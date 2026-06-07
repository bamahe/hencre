/**
 * unsplash.ts
 * Unsplash API client for fetching CRE-relevant stock photos.
 * Includes proper attribution per Unsplash API guidelines.
 */

const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY!;

/** Unsplash API base URL */
const UNSPLASH_API = 'https://api.unsplash.com';

/** Returned photo data with attribution */
export interface UnsplashPhoto {
  /** Direct image URL (regular size ~1080px) */
  url: string;
  /** Alt text / description */
  alt: string;
  /** Photographer name for attribution */
  photographer: string;
  /** Link to photo on Unsplash (required by API terms) */
  link: string;
}

/**
 * Fetch a single photo from Unsplash.
 * Automatically appends "Florida commercial real estate" to the query
 * for more relevant results.
 */
export async function fetchPhoto(query: string): Promise<UnsplashPhoto | null> {
  // Build a smart query combining the topic with CRE context
  const smartQuery = `${query} Florida commercial real estate`;

  try {
    const url = new URL(`${UNSPLASH_API}/search/photos`);
    url.searchParams.set('query', smartQuery);
    url.searchParams.set('per_page', '1');
    url.searchParams.set('orientation', 'landscape');

    const response = await fetch(url.toString(), {
      headers: {
        Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
      },
    });

    if (!response.ok) {
      console.error('[unsplash] API error:', response.status);
      return null;
    }

    const data = await response.json();

    if (!data.results || data.results.length === 0) {
      return null;
    }

    const photo = data.results[0];

    return {
      url: photo.urls.regular,
      alt: photo.alt_description ?? `${query} — commercial real estate`,
      photographer: photo.user.name,
      link: photo.links.html,
    };
  } catch (err) {
    console.error('[unsplash] fetchPhoto error:', err);
    return null;
  }
}

/**
 * Fetch multiple photos for a topic.
 * Useful for gallery sections or rotating hero images.
 */
export async function fetchPhotos(
  query: string,
  count: number = 5
): Promise<UnsplashPhoto[]> {
  const smartQuery = `${query} Florida commercial real estate`;

  try {
    const url = new URL(`${UNSPLASH_API}/search/photos`);
    url.searchParams.set('query', smartQuery);
    url.searchParams.set('per_page', String(Math.min(count, 30)));
    url.searchParams.set('orientation', 'landscape');

    const response = await fetch(url.toString(), {
      headers: {
        Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
      },
    });

    if (!response.ok) {
      console.error('[unsplash] API error:', response.status);
      return [];
    }

    const data = await response.json();

    return (data.results ?? []).map((photo: any) => ({
      url: photo.urls.regular,
      alt: photo.alt_description ?? `${query} — commercial real estate`,
      photographer: photo.user.name,
      link: photo.links.html,
    }));
  } catch (err) {
    console.error('[unsplash] fetchPhotos error:', err);
    return [];
  }
}
