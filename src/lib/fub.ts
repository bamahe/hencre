/**
 * fub.ts
 * Follow Up Boss API client for creating leads and referrals.
 * Every record includes customClaudeConversation field.
 */

const FUB_API_KEY = process.env.FUB_API_KEY!;
const FUB_X_SYSTEM = process.env.FUB_X_SYSTEM!;
const FUB_X_SYSTEM_KEY = process.env.FUB_X_SYSTEM_KEY!;

const FUB_BASE_URL = 'https://api.followupboss.com/v1';

function getHeaders(): HeadersInit {
  const basicAuth = Buffer.from(`${FUB_API_KEY}:`).toString('base64');
  return {
    Authorization: `Basic ${basicAuth}`,
    'Content-Type': 'application/json',
    'X-System': FUB_X_SYSTEM,
    'X-System-Key': FUB_X_SYSTEM_KEY,
  };
}

/** Input for creating a CRE lead in FUB */
export interface CreateLeadInput {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  tags: string[];
  source: string;
  customClaudeConversation: string;
}

/** Input for creating an incoming referral in FUB */
export interface CreateReferralInput {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  brokerage: string;
  licenseNumber: string;
  tags: string[];
  source: string;
  customClaudeConversation: string;
}

/**
 * Create a person in Follow Up Boss as a CRE lead.
 */
export async function createLead(input: CreateLeadInput): Promise<{ id: number; success: boolean }> {
  const body = {
    firstName: input.firstName,
    lastName: input.lastName,
    emails: [{ value: input.email }],
    phones: input.phone ? [{ value: input.phone }] : [],
    tags: input.tags,
    source: input.source,
    customClaudeConversation: input.customClaudeConversation,
  };

  try {
    const response = await fetch(`${FUB_BASE_URL}/people`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('[fub] createLead failed:', response.status, errorText);
      return { id: 0, success: false };
    }

    const data = await response.json();
    return { id: data.id, success: true };
  } catch (err) {
    console.error('[fub] createLead error:', err);
    return { id: 0, success: false };
  }
}

/**
 * Create a person in Follow Up Boss as an incoming referral.
 */
export async function createReferral(input: CreateReferralInput): Promise<{ id: number; success: boolean }> {
  const body = {
    firstName: input.firstName,
    lastName: input.lastName,
    emails: [{ value: input.email }],
    phones: input.phone ? [{ value: input.phone }] : [],
    tags: input.tags,
    source: input.source,
    customBrokerage: input.brokerage,
    customLicenseNumber: input.licenseNumber,
    customClaudeConversation: input.customClaudeConversation,
  };

  try {
    const response = await fetch(`${FUB_BASE_URL}/people`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('[fub] createReferral failed:', response.status, errorText);
      return { id: 0, success: false };
    }

    const data = await response.json();
    return { id: data.id, success: true };
  } catch (err) {
    console.error('[fub] createReferral error:', err);
    return { id: 0, success: false };
  }
}
