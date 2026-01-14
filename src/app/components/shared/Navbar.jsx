// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 80);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
//         ${scrolled
//           ? "bg-white shadow-md text-gray-900"
//           : "bg-white/20 backdrop-blur-md text-white"
//         }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

//         {/* Logo */}
//         <Link href="/" className="flex items-center gap-2 font-bold text-xl">
//           <div className="p-2 rounded-lg bg-teal-500 text-white">🏢</div>
//           LuxeStay
//         </Link>

//         {/* Menu */}
//         <div className="flex items-center gap-6 relative">
//           <Link
//             href="/"
//             className={`hover:text-teal-500 ${
//               scrolled ? "text-gray-800" : "text-white"
//             }`}
//           >
//             Home
//           </Link>

//           <Link
//             href="/apartments"
//             className={`hover:text-teal-500 ${
//               scrolled ? "text-gray-800" : "text-white"
//             }`}
//           >
//             Apartment
//           </Link>

//           {/* TEMP PROFILE (STATIC) */}
//           <div className="relative">
//             <button onClick={() => setOpen(!open)}>
//               <Image
//                 src="/user.jpg"
//                 alt="profile"
//                 width={36}
//                 height={36}
//                 className="rounded-full border-2 border-teal-500 cursor-pointer"
//               />
//             </button>

//             {open && (
//               <div className="absolute right-0 mt-3 w-48 bg-white rounded-lg shadow-lg text-gray-800 overflow-hidden">
//                 <div className="px-4 py-3 border-b font-semibold">
//                   Demo User
//                 </div>

//                 <Link
//                   href="/dashboard"
//                   className="block px-4 py-2 hover:bg-teal-50"
//                   onClick={() => setOpen(false)}
//                 >
//                   Dashboard
//                 </Link>

//                 <Link
//                   href="/login"
//                   className="block px-4 py-2 text-red-500 hover:bg-red-50"
//                   onClick={() => setOpen(false)}
//                 >
//                   Logout
//                 </Link>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }


// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { useRouter } from "next/navigation";

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [open, setOpen] = useState(false);
//   const router = useRouter();

//   /* 🔐 AUTH STATE (Demo)
//      user = null  → login নেই
//      user object → login আছে
//   */
//   const user = null;
//   // const user = {
//   //   name: "Demo User",
//   //   email: "demo@gmail.com",
//   //   image: "/user.jpg",
//   // };

//   // 🔽 Scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 80);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // 🔐 Dashboard click protection
//   const handleDashboardClick = () => {
//     if (!user) {
//       router.push("/login"); // login না থাকলে
//     } else {
//       router.push("/dashboard");
//     }
//   };

//   // 🔓 Logout
//   const handleLogout = () => {
//     setOpen(false);
//     // clear auth here
//     router.push("/login");
//   };

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
//         ${
//           scrolled
//             ? "bg-white shadow-md text-gray-900"
//             : "bg-white/20 backdrop-blur-md text-white"
//         }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

//         {/* 🔷 Logo */}
//         <Link href="/" className="flex items-center gap-2 font-bold text-xl">
//           <div className="p-2 rounded-lg bg-teal-500 text-white">🏢</div>
//           LuxeStay
//         </Link>

//         {/* 🔷 Menu */}
//         <div className="flex items-center gap-6">

//           <Link
//             href="/"
//             className={`hover:text-teal-500 ${
//               scrolled ? "text-gray-800" : "text-white"
//             }`}
//           >
//             Home
//           </Link>

//           <Link
//             href="/apartments"
//             className={`hover:text-teal-500 ${
//               scrolled ? "text-gray-800" : "text-white"
//             }`}
//           >
//             Apartments
//           </Link>

//           {/* 🔐 Dashboard Button (Protected) */}
//           <button
//             onClick={handleDashboardClick}
//             className={`hover:text-teal-500 ${
//               scrolled ? "text-gray-800" : "text-white"
//             }`}
//           >
//             Dashboard
//           </button>

//           {/* 🔐 AUTH SECTION */}
//           {!user ? (
//             <>
//               <Link
//                 href="/login"
//                 className={`hover:text-teal-500 ${
//                   scrolled ? "text-gray-800" : "text-white"
//                 }`}
//               >
//                 Login
//               </Link>

//               <Link
//                 href="/register"
//                 className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition"
//               >
//                 Register
//               </Link>
//             </>
//           ) : (
//             <div className="relative">
//               <button onClick={() => setOpen(!open)}>
//                 <Image
//                   src={user.image}
//                   alt="profile"
//                   width={36}
//                   height={36}
//                   className="rounded-full border-2 border-teal-500 cursor-pointer"
//                 />
//               </button>

//               {open && (
//                 <div className="absolute right-0 mt-3 w-48 bg-white rounded-lg shadow-lg text-gray-800 overflow-hidden">
//                   <div className="px-4 py-3 border-b font-semibold">
//                     {user.name}
//                   </div>

//                   <button
//                     onClick={handleDashboardClick}
//                     className="block w-full text-left px-4 py-2 hover:bg-teal-50"
//                   >
//                     Dashboard
//                   </button>

//                   <button
//                     onClick={handleLogout}
//                     className="w-full text-left px-4 py-2 text-red-500 hover:bg-red-50"
//                   >
//                     Logout
//                   </button>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const { data: session } = useSession();
  const user = session?.user; // null if not logged in

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDashboardClick = () => {
    if (!user) router.push("/login");
    else router.push("/dashboard");
  };

  const handleLogout = async () => {
    setOpen(false);
    await signOut({ callbackUrl: "/login" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md text-gray-900" : "bg-white/20 backdrop-blur-md text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-teal-600">
          <div className="p-2 bg-teal-500 rounded-lg text-white">🏢</div>
          LuxeStay
        </Link>

        {/* Desktop Menu */}
        <div className="flex items-center gap-6">

          <Link href="/" className="hover:text-teal-600">Home</Link>
          <Link href="/apartments" className="hover:text-teal-600">Apartments</Link>

          <button onClick={handleDashboardClick} className="hover:text-teal-600">
            Dashboard
          </button>

          {!user ? (
            <>
              <Link href="/login" className="hover:text-teal-600 px-4 py-2 bg-teal-600 text-white rounded-lg">
                Login
              </Link>
              <Link href="/register" className="hover:text-teal-600 px-4 py-2 border border-teal-600 text-teal-600 rounded-lg">
                Register
              </Link>
            </>
          ) : (
            <div className="relative">
              <button onClick={() => setOpen(!open)}>
                <Image
                  src={user.image || "/avatar.png"}
                  alt="profile"
                  width={36}
                  height={36}
                  className="rounded-full border-2 border-teal-500 cursor-pointer"
                />
              </button>

              {open && (
                <div className="absolute right-0 mt-3 w-48 bg-white rounded-lg shadow-lg text-gray-800 overflow-hidden">
                  <div className="px-4 py-3 border-b font-semibold">{user.name}</div>
                  <button onClick={handleDashboardClick} className="block w-full text-left px-4 py-2 hover:bg-teal-50">
                    Dashboard
                  </button>
                  <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-red-500 hover:bg-red-50">
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
