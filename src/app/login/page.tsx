// src/app/login/page.tsx
"use client";

import { useState } from "react";
import { supabase } from "../lib/supabase";
import { useRouter } from "next/navigation";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      alert(error.message);
      return;
    }

    const { data: userData } = await supabase.from("users").select("role").eq("email", email).single();
    const role = userData?.role;

    if (role === "STUDENT") router.push("/student");
    else if (role === "TEACHER") router.push("/teacher");
    else if (role === "ADMIN") router.push("/admin");
    else if (role === "SUPER_ADMIN") router.push("/super-admin");
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;
