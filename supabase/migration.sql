-- HenCRE database migration
-- Creates all tables needed for lead management, content engine, and referral network
-- Safe to run multiple times (uses IF NOT EXISTS, never DROP)

-- ============================================================
-- leads: stores all incoming CRE leads (direct + referral)
-- ============================================================
CREATE TABLE IF NOT EXISTS leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  source TEXT NOT NULL DEFAULT 'direct',        -- 'direct' or 'referral'
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  county TEXT,
  inquiry_type TEXT,
  message TEXT,
  -- referral-specific fields (null for direct leads)
  brokerage TEXT,
  license_number TEXT,
  client_type TEXT,
  deal_notes TEXT,
  -- routing info set by county-routing logic
  tier INTEGER,
  fub_id TEXT,
  fub_tags TEXT[],
  -- status tracking
  status TEXT DEFAULT 'new',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- referral_queue: Tier 2 leads waiting for partner assignment
-- ============================================================
CREATE TABLE IF NOT EXISTS referral_queue (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  lead_id UUID REFERENCES leads(id),
  county TEXT NOT NULL,
  status TEXT DEFAULT 'pending',                -- pending, assigned, completed
  assigned_agent TEXT,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- content_queue: content engine pipeline tracking
-- ============================================================
CREATE TABLE IF NOT EXISTS content_queue (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  county TEXT,
  page_type TEXT NOT NULL,                      -- 'market', 'identity', 'property-type', 'blog'
  page_slug TEXT,
  status TEXT DEFAULT 'pending',                -- pending, drafting, review, published, failed
  attempts INTEGER DEFAULT 0,
  scheduled_date DATE,
  published_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- content_log: audit trail for content engine actions
-- ============================================================
CREATE TABLE IF NOT EXISTS content_log (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  queue_id UUID REFERENCES content_queue(id),
  action TEXT NOT NULL,
  status TEXT NOT NULL,
  score INTEGER,
  details JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- blog_posts: blog post metadata and content
-- ============================================================
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT,
  content TEXT,
  author TEXT DEFAULT 'Barrett Henry',
  hero_image TEXT,
  hero_alt TEXT,
  published BOOLEAN DEFAULT false,
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- partner_agents: referral network agents by county
-- ============================================================
CREATE TABLE IF NOT EXISTS partner_agents (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  brokerage TEXT,
  license_number TEXT,
  email TEXT,
  phone TEXT,
  counties TEXT[],
  specialties TEXT[],
  status TEXT DEFAULT 'active',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- activity_log: general event log for the platform
-- ============================================================
CREATE TABLE IF NOT EXISTS activity_log (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  event_type TEXT NOT NULL,
  details JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
