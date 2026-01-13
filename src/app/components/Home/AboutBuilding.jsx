"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutBuilding() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <Image
            src="/5.jpg"
            alt="LuxeStay Building"
            width={600}
            height={450}
            className="rounded-2xl shadow-xl object-cover"
          />

          {/* Floating badge */}
          <div className="absolute -bottom-6 left-6 bg-teal-500 text-white px-5 py-2 rounded-lg shadow-lg text-sm font-semibold">
            Premium Living Space
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
            About <span className="text-teal-500">LuxeStay</span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            LuxeStay is a modern residential building designed to deliver a
            premium living experience in the heart of the city. Our apartments
            combine contemporary architecture with thoughtful interiors,
            ensuring comfort, safety, and elegance for every resident.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            With 24/7 security, smart access control, high-speed elevators, and
            eco-friendly facilities. LuxeStay offers a peaceful and well-managed
            environment that feels like home from the very first day.
          </p>

         
        </motion.div>
      </div>
    </section>
  );
}
