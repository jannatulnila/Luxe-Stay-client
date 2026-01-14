"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const LoginPage = () => {
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res.ok) {
      toast.success("Login successful");
      router.push("/dashboard");
    } else {
      toast.error("Invalid email or password");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input name="email" type="email" required />
      <input name="password" type="password" required />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;
