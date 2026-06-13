/**
 * anthropic.ts
 * Anthropic API client for the HenCRE content engine.
 * Uses Haiku for fast drafts, Sonnet for quality oversight/editing.
 */

import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY!,
});

/** Haiku model for fast, cost-effective first drafts */
const DRAFT_MODEL = 'claude-haiku-4-5-20250901';

/** Sonnet model for quality oversight and editing */
const OVERSEE_MODEL = 'claude-sonnet-4-20250514';

/** System prompt baked into every content engine call */
const SYSTEM_PROMPT = `You are a commercial real estate content writer for Barrett Henry, Commercial Real Estate Advisor at REMAX Collective in Tampa Bay, Florida.

Key rules:
- Always say "REMAX" (never "RE/MAX")
- Always say "REALTOR®" with the registered trademark symbol
- Always say "owners suite" (never "master suite")
- Barrett has 23+ years of real estate experience (NEVER tie this to Tampa Bay or any specific location)
- Phone: (813) 733-7907
- Email: barrett@nowtb.com
- Write in a direct, professional tone — no fluff
- Focus on Florida commercial real estate: office, retail, industrial, multifamily, mixed-use, land
- Never invent statistics, vacancy rates, cap rates, or price-per-square-foot numbers
`;

/**
 * Generate a fast first draft using Haiku.
 * Best for: blog outlines, initial page copy, FAQ generation.
 */
export async function draft(
  prompt: string,
  options?: { maxTokens?: number }
): Promise<string> {
  const response = await anthropic.messages.create({
    model: DRAFT_MODEL,
    max_tokens: options?.maxTokens ?? 2048,
    system: SYSTEM_PROMPT,
    messages: [{ role: 'user', content: prompt }],
  });

  // Extract text from the response content blocks
  const textBlock = response.content.find((block) => block.type === 'text');
  return textBlock?.text ?? '';
}

/**
 * Review and refine content using Sonnet.
 * Best for: editing drafts, fact-checking, quality control, rewriting.
 */
export async function oversee(
  prompt: string,
  options?: { maxTokens?: number }
): Promise<string> {
  const response = await anthropic.messages.create({
    model: OVERSEE_MODEL,
    max_tokens: options?.maxTokens ?? 4096,
    system: SYSTEM_PROMPT,
    messages: [{ role: 'user', content: prompt }],
  });

  const textBlock = response.content.find((block) => block.type === 'text');
  return textBlock?.text ?? '';
}
