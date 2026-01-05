"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled
          ? "bg-white shadow-md text-gray-900"
          : "bg-white/20 backdrop-blur-md text-white"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <div className="p-2 rounded-lg bg-teal-500 text-white">🏢</div>
          LuxeStay
        </Link>

        {/* Menu */}
        <div className="flex items-center gap-6 relative">
          <Link
            href="/"
            className={`hover:text-teal-500 ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            Home
          </Link>

          <Link
            href="/apartments"
            className={`hover:text-teal-500 ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            Apartment
          </Link>

          {/* TEMP PROFILE (STATIC) */}
          <div className="relative">
            <button onClick={() => setOpen(!open)}>
              <Image
                src="/user.jpg"
                alt="profile"
                width={36}
                height={36}
                className="rounded-full border-2 border-teal-500 cursor-pointer"
              />
            </button>

            {open && (
              <div className="absolute right-0 mt-3 w-48 bg-white rounded-lg shadow-lg text-gray-800 overflow-hidden">
                <div className="px-4 py-3 border-b font-semibold">
                  Demo User
                </div>

                <Link
                  href="/dashboard"
                  className="block px-4 py-2 hover:bg-teal-50"
                  onClick={() => setOpen(false)}
                >
                  Dashboard
                </Link>

                <Link
                  href="/login"
                  className="block px-4 py-2 text-red-500 hover:bg-red-50"
                  onClick={() => setOpen(false)}
                >
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
