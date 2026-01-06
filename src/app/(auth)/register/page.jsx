"use client";

import toast from "react-hot-toast";
import Link from "next/link";

export default function RegisterPage() {
  const handleRegister = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      photo: form.photo.value,
      password: form.password.value,
    };

    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const err = await res.json();
      toast.error(err.message);
    } else {
      toast.success("Registration successful!");
      form.reset();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleRegister} className="bg-white p-8 rounded-xl shadow w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        <input name="name" placeholder="Name" className="input" required />
        <input name="email" placeholder="Email" className="input mt-3" required />
        <input name="photo" placeholder="Photo URL" className="input mt-3" />
        <input name="password" type="password" placeholder="Password" className="input mt-3" required />

        <button className="btn bg-teal-500 w-full mt-4 text-white">Register</button>

        <p className="text-sm mt-4 text-center">
          Already have an account? <Link href="/login" className="text-teal-500">Login</Link>
        </p>
      </form>
    </div>
  );
}
