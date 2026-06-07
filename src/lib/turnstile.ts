/**
 * turnstile.ts
 * Cloudflare Turnstile server-side token verification.
 * Protects forms from bots without CAPTCHAs.
 */

const TURNSTILE_SECRET_KEY = process.env.TURNSTILE_SECRET_KEY!;

/** Cloudflare siteverify endpoint */
const VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

/** Response from Turnstile verification */
export interface TurnstileResult {
  success: boolean;
  /** Error codes if verification failed */
  errorCodes: string[];
}

/**
 * Verify a Turnstile token server-side.
 * Call this in your API route before processing form data.
 */
export async function verifyTurnstileToken(
  token: string,
  remoteIp?: string
): Promise<TurnstileResult> {
  try {
    const formData = new URLSearchParams({
      secret: TURNSTILE_SECRET_KEY,
      response: token,
    });

    // Include client IP if available (improves accuracy)
    if (remoteIp) {
      formData.append('remoteip', remoteIp);
    }

    const response = await fetch(VERIFY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData.toString(),
    });

    const data = await response.json();

    return {
      success: data.success === true,
      errorCodes: data['error-codes'] ?? [],
    };
  } catch (err) {
    console.error('[turnstile] Verification error:', err);
    return {
      success: false,
      errorCodes: ['internal-error'],
    };
  }
}
