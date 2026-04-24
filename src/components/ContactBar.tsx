"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";

export default function ContactBar() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-16 px-6 bg-white" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <header className="text-center mb-10">
          <p className="text-sm tracking-widest uppercase mb-3 text-primary">
            Contact & Location
          </p>

          <h2
            id="contact-heading"
            className="font-bold text-[clamp(28px,4vw,40px)] text-foreground"
          >
            Visit Our Dental Clinic in Hyderabad
          </h2>
        </header>

        {/* GRID */}
        <dl className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {/* ADDRESS */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center p-6 rounded-2xl bg-soft-bg border border-card-border"
          >
            <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4 bg-process-bg">
              <MapPin size={18} aria-hidden="true" />
            </div>

            <dt className="text-[13px] font-medium uppercase tracking-wider text-foreground mb-2">
              Address
            </dt>

            <dd>
              <address className="not-italic text-[14px] text-muted-text">
                <a
                  href="https://www.google.com/maps?q=Dwaraka+Nagar+Colony+Shaikpet+Hyderabad+500008"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition"
                >
                  Dwaraka Nagar Colony, Shaikpet,
                  <br />
                  Hyderabad – 500008, Telangana
                </a>
              </address>
            </dd>
          </motion.div>

          {/* PHONE */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center text-center p-6 rounded-2xl bg-soft-bg border border-card-border"
          >
            <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4 bg-process-bg">
              <Phone size={18} aria-hidden="true" />
            </div>

            <dt className="text-[13px] font-medium uppercase tracking-wider text-foreground mb-2">
              Phone
            </dt>

            <dd>
              <a
                href="tel:+917799376656"
                aria-label="Call dental clinic"
                className="text-[14px] text-muted-text hover:text-primary transition"
              >
                +91 77993 76656
              </a>
            </dd>
          </motion.div>

          {/* HOURS */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center text-center p-6 rounded-2xl bg-soft-bg border border-card-border"
          >
            <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4 bg-process-bg">
              <Clock size={18} aria-hidden="true" />
            </div>

            <dt className="text-[13px] font-medium uppercase tracking-wider text-foreground mb-2">
              Clinic Hours
            </dt>

            <dd className="text-[14px] text-muted-text">
              <time dateTime="Mo-Sa 10:00-19:00">
                Monday – Saturday
                <br />
                10:00 AM – 7:00 PM
              </time>
            </dd>
          </motion.div>
        </dl>

        {/* MICRO TRUST LINE */}
        <p className="text-center mt-6 text-xs text-muted-text">
          Easy location • Quick appointments • Expert Invisalign care
        </p>
      </div>
    </section>
  );
}
