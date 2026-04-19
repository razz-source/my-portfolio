import { createClient } from '@supabase/supabase-js'

let supabaseInstance = null

export const getSupabase = () => {
  if (!supabaseInstance) {
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
    const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY
    
    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Missing Supabase environment variables. Check your .env file.')
    }
    
    supabaseInstance = createClient(supabaseUrl, supabaseKey)
  }
  return supabaseInstance
}

// Export for backward compatibility, but it will be created lazily
export const supabase = {
  from: (table) => getSupabase().from(table)
}
