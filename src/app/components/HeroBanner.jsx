"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import Link from "next/link";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const slides = [
  {
    img: "/1.jpg",
    title: "Luxury Living Redefined",
    subtitle:
      "Discover modern apartments designed for comfort, elegance, and convenience.",
  },
  {
    img: "/2.jpg",
    title: "Premium Apartments",
    subtitle:
      "Live in a community that offers world-class amenities and security.",
  },
  {
    img: "/3.jpg",
    title: "Your Perfect Home Awaits",
    subtitle:
      "Experience a lifestyle where luxury meets affordability.",
  },
];

export default function HeroBanner() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="h-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div
              className="relative h-screen bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/70" />

              {/* Content */}
              <div className="relative z-10 flex h-full items-center justify-center px-6 text-center text-white">
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="max-w-3xl"
                >
                  <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                    {slide.title}
                  </h1>

                  <p className="text-lg md:text-xl text-gray-200 mb-10">
                    {slide.subtitle}
                  </p>

                  <div className="flex justify-center gap-5 flex-wrap">
                    <Link
                      href="/apartments"
                      className="bg-teal-500 hover:bg-teal-600 transition px-7 py-3 rounded-lg font-semibold shadow-lg"
                    >
                      Explore Apartments
                    </Link>

                    <Link
                      href="#about"
                      className="border border-white/70 hover:bg-white hover:text-gray-900 transition px-7 py-3 rounded-lg font-semibold"
                    >
                      Learn More
                    </Link>
                  </div>
                </motion.div>
              </div>

              {/* Scroll Indicator */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white opacity-70 text-sm">
                ↓ Scroll Down
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
