/**
 * supabase.ts
 * Supabase client setup for HenCRE.
 * Lazy-initialized to avoid build-time crashes when env vars aren't set.
 */

import { createClient, type SupabaseClient } from '@supabase/supabase-js';

let _supabase: SupabaseClient | null = null;
let _supabaseAdmin: SupabaseClient | null = null;

/**
 * Public client — uses the anon key, respects RLS policies.
 */
export const supabase: SupabaseClient = new Proxy({} as SupabaseClient, {
  get(_, prop) {
    if (!_supabase) {
      const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
      if (!url || !key) {
        throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY');
      }
      _supabase = createClient(url, key);
    }
    return (_supabase as unknown as Record<string, unknown>)[prop as string];
  },
});

/**
 * Admin/server client — uses the service role key, bypasses RLS.
 * ONLY use in server-side code (API routes, server actions).
 */
export const supabaseAdmin: SupabaseClient = new Proxy({} as SupabaseClient, {
  get(_, prop) {
    if (!_supabaseAdmin) {
      const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
      if (!url || !key) {
        throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY');
      }
      _supabaseAdmin = createClient(url, key, {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      });
    }
    return (_supabaseAdmin as unknown as Record<string, unknown>)[prop as string];
  },
});
