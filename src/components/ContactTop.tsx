"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function ContactTop() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="pt-12 pb-8 px-6 bg-white"
      aria-labelledby="contact-page-heading"
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          {/* Eyebrow */}
          <p className="mb-4 text-sm tracking-widest uppercase text-primary">
            Contact Our Dental Clinic
          </p>

          {/* Heading */}
          <h1
            id="contact-page-heading"
            className="font-bold leading-tight mb-5 text-[clamp(32px,5vw,60px)] text-[#1A2331]"
          >
            Book Your Invisalign Consultation in Hyderabad
          </h1>

          {/* Description */}
          <p className="text-muted-text max-w-[520px] text-[16px] leading-[1.7]">
            Schedule your free consultation with our dental experts and discover
            how Invisalign clear aligners can help you achieve a straighter,
            healthier smile—without metal braces.
          </p>

          {/* MICRO CTA */}
          <p className="mt-4 text-sm text-muted-text">
            Takes less than 2 minutes • No obligation
          </p>
        </motion.div>
      </div>
    </section>
  );
}
