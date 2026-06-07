/**
 * county-routing.ts
 * Routes leads based on county tier.
 * Tier 1 → Barrett handles directly (FUB tag: cre-lead)
 * Tier 2 → Referral out (FUB tag: cre-referral-out + Supabase queue)
 * Form B (incoming referral) → FUB tag: cre-referral-in
 */

import { getCountyByName, type FloridaCounty } from './florida-counties';
import { supabaseAdmin } from './supabase';

/** Inquiry types that map to FUB subtags */
export type InquiryType =
  | 'lease-space'
  | 'list-space'
  | 'buy-investment'
  | 'sell-dispositions'
  | 'cre-valuation';

/** Result from routing a lead */
export interface RoutingResult {
  tier: 1 | 2;
  /** Primary FUB tag */
  fubTag: string;
  /** Optional subtag based on inquiry type */
  fubSubtag?: string;
  /** Whether the lead was added to the referral queue */
  addedToReferralQueue: boolean;
  /** County data if found */
  county?: FloridaCounty;
}

/**
 * Route a lead based on county name and inquiry type.
 * Tier 1 counties get tagged for Barrett's direct handling.
 * Tier 2 counties get tagged for referral and queued in Supabase.
 */
export async function routeLeadByCounty(
  countyName: string,
  inquiryType: InquiryType,
  leadData: {
    name: string;
    email: string;
    phone?: string;
    message?: string;
  }
): Promise<RoutingResult> {
  const county = getCountyByName(countyName);

  if (!county) {
    // Unknown county — treat as tier 2 referral
    return {
      tier: 2,
      fubTag: 'cre-referral-out',
      fubSubtag: inquiryType,
      addedToReferralQueue: false,
    };
  }

  if (county.tier === 1) {
    // Barrett handles directly
    return {
      tier: 1,
      fubTag: 'cre-lead',
      fubSubtag: inquiryType,
      addedToReferralQueue: false,
      county,
    };
  }

  // Tier 2 — referral out, add to Supabase referral queue
  let addedToQueue = false;
  try {
    const { error } = await supabaseAdmin.from('referral_queue').insert({
      county_name: county.name,
      county_slug: county.slug,
      region: county.region,
      inquiry_type: inquiryType,
      lead_name: leadData.name,
      lead_email: leadData.email,
      lead_phone: leadData.phone ?? null,
      message: leadData.message ?? null,
      status: 'pending',
      created_at: new Date().toISOString(),
    });

    if (!error) addedToQueue = true;
    if (error) console.error('[county-routing] Supabase insert error:', error);
  } catch (err) {
    console.error('[county-routing] Failed to queue referral:', err);
  }

  return {
    tier: 2,
    fubTag: 'cre-referral-out',
    fubSubtag: inquiryType,
    addedToReferralQueue: addedToQueue,
    county,
  };
}

/**
 * Route an incoming referral (Form B — another agent referring a client TO Barrett).
 * Always tagged cre-referral-in.
 */
export function routeIncomingReferral(): RoutingResult {
  return {
    tier: 1,
    fubTag: 'cre-referral-in',
    addedToReferralQueue: false,
  };
}
