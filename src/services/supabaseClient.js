import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://yrwjppqyqbxaqydxemgv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlyd2pwcHF5cWJ4YXF5ZHhlbWd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0ODAyMTAsImV4cCI6MjA4NjA1NjIxMH0.SfeKOX8eGppeoAgWsEZ6yBcaHU5a3uIT-WOzPx6GN28";
export const supabase = createClient(supabaseUrl, supabaseKey);
