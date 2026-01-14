"use client";
import Link from "next/link";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaBuilding,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-teal-700 text-white">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Logo & Description */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-teal-600 p-2 rounded">
              <FaBuilding />
            </div>
            <h2 className="text-xl font-semibold">LuxeStay</h2>
          </div>

          <p className="text-sm text-teal-100 mb-6 leading-relaxed">
            Experience luxury living in our premium apartments. Modern
            amenities, prime locations, and exceptional service make
            LuxeStay your perfect home.
          </p>

          <div className="flex gap-3">
            <span className="bg-teal-600 p-2 rounded cursor-pointer">
              <FaFacebookF />
            </span>
            <span className="bg-teal-600 p-2 rounded cursor-pointer">
              <FaXTwitter />
            </span>
            <span className="bg-teal-600 p-2 rounded cursor-pointer">
              <FaInstagram />
            </span>
            <span className="bg-teal-600 p-2 rounded cursor-pointer">
              <FaLinkedinIn />
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-teal-100 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/apartments">Apartments</Link></li>
            <li><Link href="/dashboard">Dashboard</Link></li>
            <li><Link href="/login">Login</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-4 text-teal-100 text-sm">
            <li className="flex gap-3 items-start">
              <FaLocationDot className="mt-1" />
              <span>123 Luxury Avenue, Downtown District, City 10001</span>
            </li>
            <li className="flex gap-3 items-center">
              <FaPhone />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex gap-3 items-center">
              <FaEnvelope />
              <span>info@luxestay.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-teal-600">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between text-sm text-teal-100">
          <p>© 2025 LuxeStay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
