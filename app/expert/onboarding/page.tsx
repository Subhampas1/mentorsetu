import { redirect } from "next/navigation";
import { getCurrentUserProfile } from "@/lib/auth/get-current-user";

export default async function ExpertOnboardingPage() {
  const user = await getCurrentUserProfile();

  if (!user) redirect("/login");
  if (user.role !== "expert") redirect(user.role === "student" ? "/dashboard" : "/");

  return (
    <main className="container">
      <div className="card">
        <h1>Expert Onboarding (Retired Teacher)</h1>
        <p>Next build target: multi-step, senior-friendly onboarding with voice profile.</p>
        <p>Language preference: {user.language === "hi" ? "Hindi" : "English"}</p>
      </div>
    </main>
  );
}
