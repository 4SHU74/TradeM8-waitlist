import { supabase } from "..services/supabaseClient";

export const JoinWaitlist = async (email) => {
  const { error } = await supabase.from("waitlist").insert([{ email }]);

  if (error) {
    if (error.code === "23505") return { status: "duplicate" };
    return { status: "error", message: error.message };
  }

  return { status: "success" };
};

export const getWaitlistCount = async () => {
  const { count, error } = await supabase
    .from("waitlist")
    .select("*", { count: "exact", head: true });

  return count || 0;
};
