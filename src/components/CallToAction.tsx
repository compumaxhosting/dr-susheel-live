"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

export default function CallToAction() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="relative overflow-hidden py-20 md:py-24 px-4 md:px-6 bg-gradient-to-br from-[#1A2331] to-[#263347]"
      aria-labelledby="cta-heading"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#6DBFAA] opacity-5" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-[#6DBFAA] opacity-5" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* EYEBROW */}
        <motion.p
          className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6DBFAA] mb-4"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Invisalign Consultation
        </motion.p>

        {/* HEADING */}
        <motion.h2
          id="cta-heading"
          className="text-white font-semibold leading-tight mb-5 text-3xl sm:text-4xl md:text-5xl"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Get Your Perfect Smile with{" "}
          <span className="text-[#6DBFAA]">Invisalign Treatment</span>
        </motion.h2>

        {/* SUBTEXT */}
        <motion.p
          className="text-white/70 text-sm md:text-base leading-relaxed mb-10 max-w-xl mx-auto"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Book a free Invisalign consultation and receive a personalised smile
          assessment. Discover how clear aligners can straighten your teeth
          comfortably without braces.
        </motion.p>

        {/* ACTIONS */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* PRIMARY CTA */}
          <Link
            href="/contact"
            aria-label="Book your free Invisalign consultation"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#6DBFAA] text-white text-sm font-medium hover:opacity-90 transition focus:outline-none focus:ring-2 focus:ring-[#6DBFAA]"
          >
            Book Free Consultation
          </Link>

          {/* PHONE CTA */}
          <a
            href="tel:+917799376656"
            aria-label="Call clinic for Invisalign consultation"
            className="text-white/70 text-sm font-medium hover:text-white transition underline-offset-4 hover:underline"
          >
            Call +91 77993 76656
          </a>
        </motion.div>

        {/* TRUST SIGNAL */}
        <p className="mt-6 text-xs text-white/50">
          ✔ No obligation • ✔ Quick assessment • ✔ Expert guidance
        </p>
      </div>
    </section>
  );
}
