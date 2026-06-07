/**
 * twilio.ts
 * Twilio SMS client for sending lead alerts to Barrett's phone.
 */

const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID!;
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN!;
const TWILIO_FROM_NUMBER = process.env.TWILIO_FROM_NUMBER!;

/** Barrett's cell for lead alerts */
const BARRETT_PHONE = '+18137337907';

/** Twilio Messages API endpoint */
const TWILIO_API_URL = `https://api.twilio.com/2010-04-01/Accounts/${TWILIO_ACCOUNT_SID}/Messages.json`;

interface SmsAlertData {
  leadName: string;
  county: string;
  source: string;
}

/**
 * Send an SMS alert to Barrett about a new CRE lead.
 * Uses Twilio REST API directly.
 */
export async function sendSmsAlert(data: SmsAlertData): Promise<{ success: boolean }> {
  const body = `[HenCRE] New lead: ${data.leadName} | ${data.county} Co. | ${data.source}`;

  const basicAuth = Buffer.from(`${TWILIO_ACCOUNT_SID}:${TWILIO_AUTH_TOKEN}`).toString('base64');

  try {
    const response = await fetch(TWILIO_API_URL, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basicAuth}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        To: BARRETT_PHONE,
        From: TWILIO_FROM_NUMBER,
        Body: body,
      }).toString(),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('[twilio] sendSmsAlert failed:', response.status, errorText);
      return { success: false };
    }

    return { success: true };
  } catch (err) {
    console.error('[twilio] sendSmsAlert error:', err);
    return { success: false };
  }
}
