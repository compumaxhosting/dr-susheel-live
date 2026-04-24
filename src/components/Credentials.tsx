"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Award, ShieldCheck, GraduationCap, Star } from "lucide-react";
import { LucideIcon } from "lucide-react";

type Credential = {
  icon: LucideIcon;
  label: string;
  sub: string;
};

export default function Credentials() {
  const shouldReduceMotion = useReducedMotion();

  const credentials: Credential[] = [
    {
      icon: Award,
      label: "Certified Invisalign Provider",
      sub: "Specialised in clear aligner treatment",
    },
    {
      icon: GraduationCap,
      label: "Advanced Orthodontic Training",
      sub: "Latest techniques in smile correction",
    },
    {
      icon: ShieldCheck,
      label: "Safe & Hygienic Clinic",
      sub: "Strict sterilisation protocols followed",
    },
    {
      icon: Star,
      label: "4.9★ Patient Rating",
      sub: "Highly rated by satisfied patients",
    },
  ];

  return (
    <section
      className="py-20 px-6 bg-scroll-track"
      aria-labelledby="credentials-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <header className="mb-12 text-center">
          <p className="text-sm tracking-widest text-primary uppercase mb-2">
            Why Choose Us
          </p>

          <h2
            id="credentials-heading"
            className="text-3xl md:text-5xl font-semibold text-foreground"
          >
            Experienced Invisalign Specialists in Hyderabad
          </h2>

          <p className="mt-4 text-muted-text max-w-2xl mx-auto text-sm">
            Our clinic combines expertise, advanced technology, and
            patient-focused care to deliver safe and effective orthodontic
            treatments.
          </p>
        </header>

        {/* LIST (SEMANTIC) */}
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map((c, i) => {
            const Icon = c.icon;

            return (
              <motion.li
                key={c.label}
                className="bg-white rounded-2xl p-6 text-center border-card-border shadow-sm list-none"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 bg-process-bg">
                  <Icon
                    size={20}
                    className="text-primary"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>

                <p className="font-medium text-foreground text-sm mb-1">
                  {c.label}
                </p>

                <p className="text-muted-text text-xs">{c.sub}</p>
              </motion.li>
            );
          })}
        </ul>

        {/* TRUST BOOST */}
        <p className="text-center mt-8 text-xs text-muted-text">
          Trusted by hundreds of patients for Invisalign and smile correction
          treatments
        </p>
      </div>
    </section>
  );
}
