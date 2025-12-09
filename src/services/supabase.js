import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ksyxvqrghckjmgtuxwkk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtzeXh2cXJnaGNram1ndHV4d2trIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIyNjQzNjMsImV4cCI6MjA3Nzg0MDM2M30.9CpzvlqK3qC3IoYu5fde07n-iT65ufKTss8rGfCiLxs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
