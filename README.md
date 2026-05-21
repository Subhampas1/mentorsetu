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
- Expert profile creation flow:
  - `/expert/profile` large-input onboarding form
  - `POST /api/expert-profile` validation + upsert for expert profile data
- Student dashboard placeholder (`/dashboard`)
- Supabase browser + server client utilities

## Environment
Copy `.env.example` and set:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Current DB Assumptions
`expert_profiles` currently expects these columns in addition to baseline schema:
- `availability_summary` (text)
- `subjects` (text[])
- `languages` (text[])

## Next Milestones
- Add migration updates for expert profile fields and RLS policies
- Build expert voice intro upload + transcription
- Add expert discovery and scheduled booking lifecycle
