import { NextResponse } from "next/server";
import { pickCity, pickCategory, pickBusinessType } from "@/lib/blog-topics";
import { generateBlogPost, type BlogPostData } from "@/lib/blog-generator";

/**
 * /api/cron/auto-blog — Auto-generates a CRE blog post.
 *
 * Runs Mon/Wed/Fri at 10 AM ET via Vercel cron.
 * Picks a weighted-random city + topic, generates content with Claude,
 * commits to GitHub, and triggers a Vercel redeploy.
 *
 * Required env vars:
 * - CRON_SECRET
 * - ANTHROPIC_API_KEY
 * - UNSPLASH_ACCESS_KEY
 * - GITHUB_TOKEN
 * - VERCEL_DEPLOY_HOOK
 */

const GITHUB_OWNER = "bamahe";
const GITHUB_REPO = "hencre";
const GITHUB_BRANCH = "main";

export async function GET(request: Request) {
  /* ---- Auth ---- */
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  /* ---- Check env vars ---- */
  const missing = ["ANTHROPIC_API_KEY", "UNSPLASH_ACCESS_KEY", "GITHUB_TOKEN", "VERCEL_DEPLOY_HOOK"]
    .filter((k) => !process.env[k]);
  if (missing.length > 0) {
    return NextResponse.json({ error: `Missing env vars: ${missing.join(", ")}` }, { status: 503 });
  }

  try {
    /* ---- Step 1: Read current manifest to avoid duplicate topics ---- */
    const manifestRes = await fetch(
      `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/public/data/blog-manifest.json`,
      {
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
          Accept: "application/vnd.github.v3+json",
        },
      }
    );

    let manifest: BlogPostData[] = [];
    let manifestSha = "";

    if (manifestRes.ok) {
      const manifestData = await manifestRes.json();
      manifestSha = manifestData.sha;
      manifest = JSON.parse(Buffer.from(manifestData.content, "base64").toString("utf-8"));
    }

    const existingSlugs = manifest.map((p) => p.slug);

    /* ---- Step 2: Pick topic ---- */
    const category = pickCategory();
    const city = pickCity();
    const businessType = category === "business-guide" ? pickBusinessType() : null;

    /* ---- Step 3: Generate content ---- */
    const { pageTsx, postData } = await generateBlogPost(
      category,
      city,
      businessType,
      existingSlugs
    );

    /* ---- Step 4: Check for duplicate slug ---- */
    if (existingSlugs.includes(postData.slug)) {
      postData.slug = `${postData.slug}-${postData.date}`;
    }

    /* ---- Step 5: Commit page.tsx via GitHub API ---- */
    const pagePath = `src/app/blog/${postData.slug}/page.tsx`;
    const pageContent = Buffer.from(pageTsx).toString("base64");

    const pageCommitRes = await fetch(
      `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${pagePath}`,
      {
        method: "PUT",
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
          "Content-Type": "application/json",
          Accept: "application/vnd.github.v3+json",
        },
        body: JSON.stringify({
          message: `Auto-publish: ${postData.title}`,
          content: pageContent,
          branch: GITHUB_BRANCH,
        }),
      }
    );

    if (!pageCommitRes.ok) {
      const err = await pageCommitRes.json();
      console.error("[auto-blog] GitHub page commit failed:", err);
      return NextResponse.json({ error: "GitHub page commit failed", details: err }, { status: 500 });
    }

    /* ---- Step 6: Update manifest ---- */
    manifest.push(postData);
    const updatedManifest = Buffer.from(JSON.stringify(manifest, null, 2)).toString("base64");

    const manifestCommitRes = await fetch(
      `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/public/data/blog-manifest.json`,
      {
        method: "PUT",
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
          "Content-Type": "application/json",
          Accept: "application/vnd.github.v3+json",
        },
        body: JSON.stringify({
          message: `Update blog manifest: ${postData.slug}`,
          content: updatedManifest,
          sha: manifestSha,
          branch: GITHUB_BRANCH,
        }),
      }
    );

    if (!manifestCommitRes.ok) {
      const err = await manifestCommitRes.json();
      console.error("[auto-blog] Manifest commit failed:", err);
    }

    /* ---- Step 7: Trigger Vercel redeploy ---- */
    if (process.env.VERCEL_DEPLOY_HOOK) {
      await fetch(process.env.VERCEL_DEPLOY_HOOK, { method: "POST" });
    }

    return NextResponse.json({
      success: true,
      slug: postData.slug,
      title: postData.title,
      category,
      city: city.name,
      county: city.county,
      businessType,
    });
  } catch (error) {
    console.error("[auto-blog] Error:", error);
    return NextResponse.json(
      { error: "Failed to generate blog post", details: String(error) },
      { status: 500 }
    );
  }
}
