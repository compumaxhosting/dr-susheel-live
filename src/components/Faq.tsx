"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

type FAQ = {
  q: string;
  a: string;
};

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const shouldReduceMotion = useReducedMotion();

  const faqs: FAQ[] = [
    {
      q: "How does Invisalign treatment work?",
      a: "Invisalign uses a series of custom-made clear aligners that gradually move your teeth into the correct position without metal braces.",
    },
    {
      q: "Is Invisalign better than traditional braces?",
      a: "Invisalign is more discreet and comfortable, while braces may be better for complex orthodontic cases.",
    },
    {
      q: "How long does Invisalign treatment take?",
      a: "Most Invisalign treatments take between 6 to 18 months depending on the severity of alignment issues.",
    },
    {
      q: "Can I eat while wearing Invisalign aligners?",
      a: "Aligners should be removed while eating or drinking anything other than water to prevent damage and staining.",
    },
    {
      q: "How many hours per day should I wear aligners?",
      a: "You should wear Invisalign aligners for 20–22 hours per day for effective results.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-soft-bg" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto">
        {/* HEADER */}
        <header className="mb-12 text-center">
          <p className="text-sm tracking-widest text-primary mb-3 uppercase">
            Invisalign FAQs
          </p>

          <h2
            id="faq-heading"
            className="font-bold text-[clamp(28px,4vw,40px)] text-foreground"
          >
            Frequently Asked Questions About Invisalign
          </h2>
        </header>

        {/* FAQ LIST */}
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            const contentId = `faq-content-${i}`;
            const buttonId = `faq-button-${i}`;

            return (
              <div
                key={faq.q}
                className="bg-white rounded-2xl border border-borderCustom overflow-hidden"
              >
                {/* QUESTION */}
                <button
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <span className="font-medium text-foreground text-[15px]">
                    {faq.q}
                  </span>

                  {isOpen ? (
                    <Minus
                      size={18}
                      aria-hidden="true"
                      className="text-primary"
                    />
                  ) : (
                    <Plus size={18} aria-hidden="true" className="text-muted" />
                  )}
                </button>

                {/* ANSWER */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={contentId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={
                        shouldReduceMotion ? false : { height: 0, opacity: 0 }
                      }
                      animate={
                        shouldReduceMotion ? {} : { height: "auto", opacity: 1 }
                      }
                      exit={shouldReduceMotion ? {} : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-5"
                    >
                      <p className="text-muted text-[14px] leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* JSON-LD (CRITICAL FOR SEO) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: f.a,
              },
            })),
          }),
        }}
      />
    </section>
  );
}
