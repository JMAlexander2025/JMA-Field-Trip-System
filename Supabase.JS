import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl || '', supabaseKey || '')

// Field Trip Request Management
export const submitFieldTripRequest = async (requestData) => {
  try {
    // Generate unique trip ID
    const year = new Date().getFullYear()
    const
