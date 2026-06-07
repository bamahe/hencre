/**
 * validation.ts
 * Zod schemas for all HenCRE form inputs.
 * Shared between client validation and server-side parsing.
 */

import { z } from 'zod';

/** CRE inquiry type options */
export const INQUIRY_TYPES = [
  'lease-space',
  'list-space',
  'buy-investment',
  'sell-dispositions',
  'cre-valuation',
] as const;

export type InquiryType = (typeof INQUIRY_TYPES)[number];

/** Human-readable labels for each inquiry type */
export const INQUIRY_TYPE_LABELS: Record<InquiryType, string> = {
  'lease-space': 'Lease Space',
  'list-space': 'List Space for Lease/Sale',
  'buy-investment': 'Buy / Investment',
  'sell-dispositions': 'Sell / Dispositions',
  'cre-valuation': 'CRE Valuation',
};

/** Referral client type options */
export const CLIENT_TYPES = ['buyer', 'seller', 'tenant', 'landlord'] as const;
export type ClientType = (typeof CLIENT_TYPES)[number];

/**
 * Lead form schema (Form A) — prospect inquiring about CRE services.
 */
export const LeadFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name is too long'),
  email: z
    .string()
    .email('Please enter a valid email address'),
  phone: z
    .string()
    .min(10, 'Please enter a valid phone number')
    .max(20, 'Phone number is too long')
    .optional()
    .or(z.literal('')),
  county: z
    .string()
    .min(1, 'Please select a county'),
  inquiryType: z.enum(INQUIRY_TYPES, {
    message: 'Please select an inquiry type',
  }),
  message: z
    .string()
    .max(2000, 'Message is too long')
    .optional()
    .or(z.literal('')),
  turnstileToken: z
    .string()
    .min(1, 'Please complete the security check'),
});

export type LeadFormData = z.infer<typeof LeadFormSchema>;

/**
 * Referral form schema (Form B) — agent referring a client TO Barrett.
 */
export const ReferralFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name is too long'),
  brokerage: z
    .string()
    .min(2, 'Brokerage name is required')
    .max(200, 'Brokerage name is too long'),
  licenseNumber: z
    .string()
    .min(2, 'License number is required')
    .max(30, 'License number is too long'),
  email: z
    .string()
    .email('Please enter a valid email address'),
  phone: z
    .string()
    .min(10, 'Please enter a valid phone number')
    .max(20, 'Phone number is too long')
    .optional()
    .or(z.literal('')),
  clientType: z.enum(CLIENT_TYPES, {
    message: 'Please select a client type',
  }),
  county: z
    .string()
    .min(1, 'Please select a county'),
  dealNotes: z
    .string()
    .max(3000, 'Notes are too long')
    .optional()
    .or(z.literal('')),
  turnstileToken: z
    .string()
    .min(1, 'Please complete the security check'),
});

export type ReferralFormData = z.infer<typeof ReferralFormSchema>;
