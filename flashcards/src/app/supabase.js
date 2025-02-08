import { createClient } from '@supabase/supabase-js'

// Vlož svoje URL a kľúč z Supabase projektu
const supabaseUrl = 'https://aikesknvcksdzbvrtsvy.supabase.co/'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFpa2Vza252Y2tzZHpidnJ0c3Z5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg4MzM0NjcsImV4cCI6MjA1NDQwOTQ2N30.dIy94rTqpoq7_71g31vB4kbFjfQSYMScOyF6YexW5Xs'

export const supabase = createClient(supabaseUrl, supabaseKey)