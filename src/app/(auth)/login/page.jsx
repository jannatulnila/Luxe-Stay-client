// "use client";

// import { signIn } from "next-auth/react";
// import Link from "next/link";
// import toast from "react-hot-toast";

// export default function LoginPage() {
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     const email = e.target.email.value;
//     const password = e.target.password.value;

//     const res = await signIn("credentials", {
//       email,
//       password,
//       redirect: false,
//     });

//     if (res?.error) toast.error(res.error);
//     else toast.success("Login successful!");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow w-96">
//         <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

//         <input name="email" placeholder="Email" className="input" required />
//         <input name="password" type="password" placeholder="Password" className="input mt-3" required />

//         <button className="btn bg-teal-500 w-full mt-4 text-white">Login</button>

//         <button
//           type="button"
//           onClick={() => signIn("google")}
//           className="btn border w-full mt-3"
//         >
//           Continue with Google
//         </button>

//         <p className="text-sm mt-4 text-center">
//           New here? <Link href="/register" className="text-teal-500">Register</Link>
//         </p>
//       </form>
//     </div>
//   );
// }


// "use client";
// import { signIn } from "next-auth/react";
// import toast from "react-hot-toast";

// const LoginPage = () => {
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     const email = e.target.email.value;
//     const password = e.target.password.value;

//     const res = await signIn("credentials", {
//       email,
//       password,
//       redirect: false
//     });

//     if (res.ok) toast.success("Login successful");
//     else toast.error("Invalid credentials");
//   };

//   return (
//     <form onSubmit={handleLogin}>
//       <input name="email" />
//       <input name="password" type="password" />
//       <button>Login</button>
//       <button onClick={() => signIn("google")}>Google Login</button>
//     </form>
//   );
// };

// export default LoginPage;


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

    if (res?.error) {
      toast.error(res.error);
    } else {
      toast.success("Login successful!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-white rounded-2xl  p-8"
      >
        <h2 className="text-3xl font-bold text-center text-teal-500 mb-6">
          Welcome Back 
        </h2>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm text-teal-500font-medium mb-1">Email</label>
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-5">
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            required
          />
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 rounded-lg transition"
        >
          Login
        </button>

        {/* Divider */}
        <div className="flex items-center my-5">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-3 text-sm text-gray-400">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Google Login */}
        <button
          type="button"
          onClick={() => signIn("google")}
          className="w-full border border-gray-300 hover:bg-gray-100 py-2 rounded-lg transition font-medium"
        >
          Continue with Google
        </button>

        {/* Register Link */}
        <p className="text-sm text-center mt-5">
          New here?{" "}
          <Link href="/register" className="text-teal-500 font-medium hover:underline">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}
