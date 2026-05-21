import { NextRequest, NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import type { AppLanguage, UserRole } from "@/lib/supabase/types";

const allowedRoles: UserRole[] = ["expert", "student"];
const allowedLanguages: AppLanguage[] = ["en", "hi"];

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as { role?: UserRole; language?: AppLanguage };

    if (!body.role || !allowedRoles.includes(body.role)) {
      return NextResponse.json({ error: "Invalid role" }, { status: 400 });
    }

    if (!body.language || !allowedLanguages.includes(body.language)) {
      return NextResponse.json({ error: "Invalid language" }, { status: 400 });
    }

    const supabase = createServerSupabaseClient();
    const {
      data: { user },
      error: userError
    } = await supabase.auth.getUser();

    if (userError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { error: upsertError } = await supabase.from("users").upsert(
      {
        id: user.id,
        role: body.role,
        language: body.language,
        phone: user.phone ?? null
      },
      { onConflict: "id" }
    );

    if (upsertError) {
      return NextResponse.json({ error: upsertError.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true, role: body.role, language: body.language });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
