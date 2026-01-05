"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "How do I book an apartment at LuxeStay?",
    answer:
      "You can explore our apartments on the website and click the 'Agreement' button. Make sure you are logged in to apply for your preferred apartment.",
  },
  {
    question: "Are pets allowed in LuxeStay apartments?",
    answer:
      "Yes! We are a pet-friendly building, but there are certain guidelines to ensure safety and comfort for all residents.",
  },
  {
    question: "Is parking available for residents?",
    answer:
      "Absolutely! We have secure underground and outdoor parking spaces available for all residents.",
  },
  {
    question: "What amenities are included in the apartments?",
    answer:
      "All apartments come with modern interiors, high-speed Wi-Fi, air conditioning, and access to amenities like swimming pool, gym, and 24/7 security.",
  },
  {
    question: "Can I use a coupon for rent payment?",
    answer:
      "Yes, members can apply valid coupons while making payments to avail discounts. The coupon details will be verified before deduction.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-12">
          Frequently Asked <span className="text-teal-500">Questions</span>
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
            >
              <button
                className="w-full px-6 py-4 flex justify-between items-center text-left"
                onClick={() => toggle(i)}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                {activeIndex === i ? (
                  <FaChevronUp className="text-teal-500" />
                ) : (
                  <FaChevronDown className="text-teal-500" />
                )}
              </button>

              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4 text-gray-600 text-sm"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
