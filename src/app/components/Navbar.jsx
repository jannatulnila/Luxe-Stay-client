"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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
          : "bg-transparent text-white"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <div className="p-2 rounded-lg bg-teal-500 text-white">
            🏢
          </div>
          LuxeStay
        </Link>

        {/* Menu */}
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className={`hover:text-teal-500 ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            Home
          </Link>

          <Link
            href="/apartment"
            className={`hover:text-teal-500 ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            Apartment
          </Link>

          {/* Profile */}
          <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-teal-500">
            <Image src="/user.png" alt="profile" width={36} height={36} />
          </div>
        </div>
      </div>
    </nav>
  );
}
