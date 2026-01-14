"use client";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;

    const user = {
      name: form.name.value,
      email: form.email.value,
      password: form.password.value,
      photo: form.photo.value,
    };

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/register`,
        user
      );

      toast.success("Registration successful");
      router.push("/login");
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <input name="name" placeholder="Name" required />
      <input name="email" type="email" required />
      <input name="photo" placeholder="Photo URL" />
      <input name="password" type="password" required />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterPage;
