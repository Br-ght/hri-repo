import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = 'https://https://eoitszrznqmmqbhfnlln.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_gCVgdbkAbWCS9D47sE0zKQ_pt7ngZGs'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

// essentially importing the supabase table as an object