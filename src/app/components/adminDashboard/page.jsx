"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  // 🔐 demo auth check
  const user = null; // replace with real auth

  useEffect(() => {
    if (!user) {
      router.push("/login"); // ❌ login না থাকলে
    }
  }, [user, router]);

  if (!user) {
    return null; // prevent UI flash
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>Welcome back 🎉</p>
    </div>
  );
}
