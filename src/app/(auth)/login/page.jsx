"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import toast from "react-hot-toast";

export default function LoginPage() {
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.error) toast.error(res.error);
    else toast.success("Login successful!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <input name="email" placeholder="Email" className="input" required />
        <input name="password" type="password" placeholder="Password" className="input mt-3" required />

        <button className="btn bg-teal-500 w-full mt-4 text-white">Login</button>

        <button
          type="button"
          onClick={() => signIn("google")}
          className="btn border w-full mt-3"
        >
          Continue with Google
        </button>

        <p className="text-sm mt-4 text-center">
          New here? <Link href="/register" className="text-teal-500">Register</Link>
        </p>
      </form>
    </div>
  );
}
