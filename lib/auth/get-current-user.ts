import { cache } from "react";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import type { UserProfile } from "@/lib/supabase/types";

export const getCurrentUserProfile = cache(async (): Promise<UserProfile | null> => {
  const supabase = createServerSupabaseClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) return null;

  const { data, error } = await supabase
    .from("users")
    .select("id, role, language, phone")
    .eq("id", user.id)
    .maybeSingle();

  if (error || !data) return null;

  return data as UserProfile;
});
