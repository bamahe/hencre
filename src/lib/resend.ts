/**
 * resend.ts
 * Resend email client for lead alerts and auto-responders.
 * Lazy-initialized to avoid build-time crashes.
 */

import { Resend } from 'resend';

let _resend: Resend | null = null;

function getResend(): Resend {
  if (!_resend) {
    const key = process.env.RESEND_API_KEY;
    if (!key) throw new Error('Missing RESEND_API_KEY');
    _resend = new Resend(key);
  }
  return _resend;
}

/** Barrett's email — all alerts go here */
const BARRETT_EMAIL = 'barrett@nowtb.com';

/** From address for outbound emails */
const FROM_ADDRESS = 'Barrett Henry <barrett@nowtb.com>';

/** Alert data for a new CRE lead */
interface AlertEmailData {
  subject: string;
  leadName: string;
  email: string;
  phone: string;
  county: string;
  inquiryType: string;
  message: string;
  source: string;
}

/**
 * Send Barrett an alert email about a new lead or referral.
 */
export async function sendAlertEmail(data: AlertEmailData): Promise<{ success: boolean }> {
  const { error } = await getResend().emails.send({
    from: FROM_ADDRESS,
    to: BARRETT_EMAIL,
    subject: `[HenCRE] ${data.subject}`,
    html: `
      <h2>New CRE ${data.source === 'referral' ? 'Referral' : 'Lead'} from hencre.com</h2>
      <hr />
      <p><strong>Name:</strong> ${data.leadName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>County:</strong> ${data.county}</p>
      <p><strong>Inquiry Type:</strong> ${data.inquiryType}</p>
      <p><strong>Message:</strong> ${data.message}</p>
      <hr />
      <p style="color: #666; font-size: 12px;">
        Submitted via hencre.com and routed to Follow Up Boss.
      </p>
    `,
  });

  if (error) {
    console.error('[resend] sendAlertEmail failed:', error);
    return { success: false };
  }

  return { success: true };
}

/** Auto-responder data */
interface AutoResponderData {
  toName: string;
  toEmail: string;
}

/**
 * Send an auto-response confirming inquiry was received.
 */
export async function sendAutoResponder(data: AutoResponderData): Promise<{ success: boolean }> {
  const { error } = await getResend().emails.send({
    from: FROM_ADDRESS,
    to: data.toEmail,
    subject: 'Your Commercial Real Estate Inquiry \u2014 Barrett Henry, REALTOR\u00AE',
    html: `
      <p>Hi ${data.toName},</p>
      <p>
        Thank you for reaching out about your commercial real estate needs.
        I received your inquiry and will be in touch shortly to discuss how I can help.
      </p>
      <p>
        With 23+ years of real estate experience and deep knowledge of the Florida
        commercial market, I'm here to guide you through every step of the process.
      </p>
      <p>
        In the meantime, feel free to call or text me directly at
        <a href="tel:8137337907">(813) 733-7907</a>.
      </p>
      <p>
        Best regards,<br />
        <strong>Barrett Henry</strong><br />
        REALTOR\u00AE | Broker Associate<br />
        REMAX Collective<br />
        <a href="tel:8137337907">(813) 733-7907</a><br />
        <a href="mailto:barrett@nowtb.com">barrett@nowtb.com</a>
      </p>
    `,
  });

  if (error) {
    console.error('[resend] sendAutoResponder failed:', error);
    return { success: false };
  }

  return { success: true };
}
