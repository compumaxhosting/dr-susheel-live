"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

/* ---------------------------------- */
/* Component */
/* ---------------------------------- */
export default function AlignerTherapy() {
  const [imgError, setImgError] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="pt-12 pb-20 px-6 bg-white"
      aria-labelledby="aligner-heading"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, x: -24 }}
          animate={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Eyebrow */}
          <p className="mb-2 text-sm tracking-widest text-primary uppercase">
            Clear Aligner Therapy
          </p>

          {/* Main Heading */}
          <h1
            id="aligner-heading"
            className="text-foreground text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Straighter Teeth,
            <br />
            <span className="text-primary">Invisible Invisalign Treatment</span>
          </h1>

          {/* SEO-optimized paragraph */}
          <p className="mt-6 mb-8 text-muted-text leading-relaxed text-sm md:text-base max-w-xl">
            Invisalign clear aligners are a modern orthodontic solution designed
            to straighten teeth without metal braces. These custom-made,
            removable trays gradually shift your teeth into place, offering a
            comfortable, discreet, and effective treatment for achieving a
            confident smile.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              aria-label="Start your Invisalign consultation"
              className="inline-block bg-green-bg text-white px-6 py-3 rounded-full text-sm md:text-base hover:bg-primary transition focus:outline-none focus:ring-2 focus:ring-primary"
            >
              Start Your Smile Journey
            </Link>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="relative overflow-hidden"
          style={{ borderRadius: "24px", aspectRatio: "4/3" }}
          initial={shouldReduceMotion ? false : { opacity: 0, x: 24 }}
          animate={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {!imgError ? (
            <Image
              src="/images/invisalign-page.webp"
              alt="Invisalign clear aligners on teeth showing invisible orthodontic treatment"
              fill
              className="object-cover"
              onError={() => setImgError(true)}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <div
              className="w-full h-full bg-gradient-to-br from-teal-300 to-teal-50"
              role="img"
              aria-label="Placeholder image for Invisalign treatment"
            />
          )}
        </motion.div>
      </div>
    </section>
  );
}
