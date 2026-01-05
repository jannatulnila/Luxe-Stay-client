"use client";

import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaBus,
  FaCar,
  FaWalking,
} from "react-icons/fa";

export default function Location() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Apartment <span className="text-teal-500">Location</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            LuxeStay is located in a prime area with easy access to
            transportation, shopping centers, hospitals, and educational
            institutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Location Details */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FaMapMarkerAlt className="text-teal-500" />
                How to Get There
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Our building is situated in a well-connected neighborhood,
                ensuring a smooth commute for residents and visitors alike.
              </p>

              {/* Directions */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaBus className="text-teal-500 mt-1" />
                  <p className="text-gray-600">
                    <strong>By Bus:</strong> Several public bus routes stop
                    within a 5-minute walking distance.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <FaCar className="text-teal-500 mt-1" />
                  <p className="text-gray-600">
                    <strong>By Car:</strong> Direct road access with secure
                    underground and outdoor parking facilities.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <FaWalking className="text-teal-500 mt-1" />
                  <p className="text-gray-600">
                    <strong>On Foot:</strong> Pedestrian-friendly walkways
                    connect nearby parks, cafes, and shopping areas.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <iframe
              title="LuxeStay Location"
              src="https://www.google.com/maps?q=123+Luxury+Avenue+Downtown+District&output=embed"
              className="w-full h-[380px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
