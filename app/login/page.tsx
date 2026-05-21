"use client";
import { FormEvent, useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    try {
      const supabase = createClient();
      const { error } = await supabase.auth.signInWithOtp({ phone });
      if (error) throw error;
      setMessage("OTP sent. Please check your phone.");
    } catch (err) {
      setMessage(err instanceof Error ? err.message : "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="container"><div className="card">
      <h1>Phone OTP Login</h1>
      <form onSubmit={handleSubmit} className="grid">
        <label htmlFor="phone">Phone number (E.164)</label>
        <input id="phone" value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="+919876543210" required style={{padding:12,fontSize:18}} />
        <button className="btn" type="submit" disabled={loading}>{loading ? "Sending..." : "Send OTP"}</button>
      </form>
      {message && <p>{message}</p>}
    </div></main>
  );
}
