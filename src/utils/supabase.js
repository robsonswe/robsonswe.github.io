import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://edlcictxpnwiriizcylf.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkbGNpY3R4cG53aXJpaXpjeWxmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc3MjM4MjksImV4cCI6MjA1MzI5OTgyOX0.7NAGGPrAKT8wYU67wG5npHedBrPBfds3m7ncV69GIFQ'
);