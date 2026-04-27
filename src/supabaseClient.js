import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = 'https://https://eoitszrznqmmqbhfnlln.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVvaXRzenJ6bnFtbXFiaGZubGxuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAwMjY1NTYsImV4cCI6MjA4NTYwMjU1Nn0.qvvP9bNbv1b07O9yLCmUZDrtDe-z-033z6N42VvuX2Y'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

// essentially importing the supabase table as an object
