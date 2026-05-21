import Link from "next/link";
import { redirect } from "next/navigation";
import { getCurrentUserProfile } from "@/lib/auth/get-current-user";

export default async function DashboardPage() {
  const user = await getCurrentUserProfile();

  if (!user) redirect("/login");
  if (user.role !== "student") redirect(user.role === "expert" ? "/expert/onboarding" : "/");

  return (
    <main className="container grid">
      <section className="card">
        <h1>Student Dashboard</h1>
        <p>Welcome! You are onboarded as a student. Search and booking screens are next.</p>
        <Link href="/" className="btn">Back to Home</Link>
      </section>
    </main>
  );
}
