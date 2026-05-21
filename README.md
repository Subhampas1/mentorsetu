# MentorSetu MVP App

Current implementation status:

## Implemented
- Next.js + TypeScript app foundation
- Landing page (`/`)
- Phone OTP login flow (`/login`): send + verify OTP
- Role/language onboarding (`/onboarding`) persisted to Supabase `users` table
- Authenticated server-side role checks for:
  - `/dashboard` (student)
  - `/expert/onboarding` (expert)
- Student dashboard placeholder (`/dashboard`)
- Expert onboarding placeholder (`/expert/onboarding`)
- Supabase browser + server client utilities
- Onboarding API route with auth and request validation

## Environment
Copy `.env.example` and set:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Next Milestones
- Add schema migrations + RLS policies for all MVP tables
- Build expert profile form + voice intro upload/transcription
- Add expert discovery and scheduled booking lifecycle
