"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const slides = [
  "/1.jpg",
  "/2.jpg",
  "/3.jpg",
];

export default function HeroBanner() {
  return (
    <section className="relative h-screen w-full">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        loop
        className="h-full"
      >
        {slides.map((img, i) => (
          <SwiperSlide key={i}>
            <div
              className="h-screen bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Content */}
              <div className="relative z-10 flex h-full items-center justify-center text-center text-white px-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Welcome to <span className="text-teal-400">LuxeStay</span>
                  </h1>

                  <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 mb-8">
                    Experience luxury living in our premium apartments with
                    modern amenities and exceptional service
                  </p>

                  <div className="flex justify-center gap-4">
                    <button className="btn bg-teal-500 hover:bg-teal-600 text-white px-6">
                      Explore Apartments
                    </button>
                    <button className="btn btn-outline text-white border-white">
                      Learn More
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
