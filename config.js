import { createClient } from "https://esm.sh/@supabase/supabase-js";

export const supabaseUrl = "https://qfgqetshftvwkqkvbgrz.supabase.co";
export const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFmZ3FldHNoZnR2d2txa3ZiZ3J6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUyNzcyMTYsImV4cCI6MjA4MDg1MzIxNn0.CtcxOaqh7887OIY4hvjiZzZhAxkoBb7ePD9o9mp-Rkg";
export const supabase = createClient(supabaseUrl, supabaseKey);
