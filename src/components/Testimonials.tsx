"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

type Testimonial = {
  quote: string;
  name: string;
  initials: string;
  treatment: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Dr. Susheel completely transformed my smile with Invisalign. The treatment was smooth, and the results exceeded my expectations.",
    name: "Priya Reddy",
    initials: "PR",
    treatment: "Invisalign · 14 months",
  },
  {
    quote:
      "Great experience for my child. The clinic is friendly, clean, and very professional. Highly recommended for pediatric care.",
    name: "Arjun Sharma",
    initials: "AS",
    treatment: "Pediatric Care",
  },
  {
    quote:
      "One of the best dental clinics in Hyderabad. The smile makeover results were amazing and totally worth it.",
    name: "Sneha Patel",
    initials: "SP",
    treatment: "Smile Makeover",
  },
];

/* ⭐ Accessible Star Rating */
function StarRating() {
  return (
    <div className="flex gap-0.5" aria-label="5 star rating">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="#D4AF6A"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="py-20 md:py-28 px-4 md:px-6 bg-[#F7F9FC]"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Patient Reviews
          </p>

          <h2
            id="testimonials-heading"
            className="mt-3 text-3xl sm:text-4xl font-semibold text-foreground"
          >
            Invisalign Reviews in Hyderabad
          </h2>

          <p className="mt-4 text-sm text-muted-text leading-relaxed">
            Trusted by hundreds of patients for Invisalign and dental care.
          </p>
        </div>

        {/* GOOGLE REVIEWS IMAGE */}
        <div className="mb-12 text-center">
          <p className="text-sm text-muted-text mb-3">
            Rated 4.9★ on Google by 120+ patients
          </p>

          <div className="flex justify-center">
            <Image
              src="/images/scanner-2.jpeg" // 👈 add your screenshot here
              alt="Google reviews rating showing 4.9 star rating for dental clinic in Hyderabad"
              width={320}
              height={120}
              className="rounded-xl shadow-sm"
            />
          </div>
        </div>

        {/* TESTIMONIAL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-white rounded-2xl p-6 shadow-sm"
            >
              {/* QUOTE MARK */}
              <div className="absolute -top-4 left-6 text-[60px] font-serif text-[#6DBFAA]">
                &ldquo;
              </div>

              {/* TEXT */}
              <p className="text-[15px] italic text-[#6B7B8D] leading-relaxed pt-6 mb-6">
                {t.quote}
              </p>

              {/* FOOTER */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-medium bg-[#EAF7F3] text-[#6DBFAA]">
                    {t.initials}
                  </div>

                  <div>
                    <p className="text-sm font-medium text-[#1A2331]">
                      {t.name}
                    </p>

                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#EAF7F3] text-[#6DBFAA]">
                      {t.treatment}
                    </span>
                  </div>
                </div>

                <StarRating />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ⭐ SEO SCHEMA (CRITICAL) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dentist",
            name: "Dr Susheel Aligners",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Hyderabad",
              addressCountry: "India",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "120",
            },
          }),
        }}
      />
    </section>
  );
}
