"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Award } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      duration: 0.6,
    },
  },
};

const itemLeft = {
  hidden: { opacity: 0, x: -24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const itemRight = {
  hidden: { opacity: 0, x: 24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.1 } },
};

export default function About() {
  return (
    <section
      className="pt-10 pb-20 px-6 bg-white"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* LEFT CONTENT */}
          <motion.div variants={itemLeft}>
            <header>
              <p className="eyebrow mb-3 text-sm uppercase tracking-wide">
                Meet Your Dentist
              </p>

              <h2
                id="about-heading"
                className="font-cormorant font-bold leading-tight mb-5 text-foreground"
                style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
              >
                Dr. Susheel —{" "}
                <span className="text-primary">A Dentist Who Listens</span>
              </h2>
            </header>

            <p className="font-dm font-light leading-relaxed mb-5 text-[16px] text-muted-text">
              With over 12 years of clinical experience, Dr. Susheel has built a
              trusted dental practice in Hyderabad focused on personalized care.
              Every treatment plan is designed around the patient’s needs—not a
              one-size-fits-all approach.
            </p>

            <p className="font-dm font-light leading-relaxed mb-8 text-[16px] text-muted-text">
              He specializes in Invisalign orthodontics and pediatric dentistry,
              combining precision with a calm, reassuring experience for
              patients of all ages.
            </p>

            <Link
              href="/contact"
              className="inline-block bg-green-bg text-white px-6 py-3 rounded-full hover:bg-primary transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label="Book a consultation with Dr. Susheel"
            >
              Book a Consultation
            </Link>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div className="relative" variants={itemRight}>
            <figure className="relative overflow-hidden rounded-3xl aspect-[3/4]">
              <Image
                src="/images/about-img.webp"
                alt="Dr. Susheel smiling in his dental clinic"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={false}
              />
              <figcaption className="sr-only">
                Dr. Susheel at his dental clinic in Hyderabad
              </figcaption>
            </figure>

            {/* STATS CARD */}
            <div
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-lg border border-card-border"
              aria-label="Over 500 smiles transformed"
            >
              <p className="font-cormorant font-bold text-foreground text-[26px]">
                500+
              </p>
              <p className="font-dm font-light text-muted-text text-[13px]">
                Smiles Transformed
              </p>
            </div>

            {/* BADGE */}
            <div
              className="absolute -top-4 -right-4 w-20 h-20 rounded-full flex items-center justify-center bg-process-bg border-2 border-primary"
              aria-hidden="true"
            >
              <Award size={28} className="text-primary" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
