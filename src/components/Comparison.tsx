"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check, X } from "lucide-react";

type Row = {
  feature: string;
  invisalign: string;
  braces: string;
};

export default function Comparison() {
  const shouldReduceMotion = useReducedMotion();

  const comparison: Row[] = [
    {
      feature: "Appearance",
      invisalign: "Nearly invisible clear aligners",
      braces: "Visible metal brackets and wires",
    },
    {
      feature: "Comfort",
      invisalign: "Smooth plastic trays, comfortable fit",
      braces: "Can cause irritation and soreness",
    },
    {
      feature: "Removability",
      invisalign: "Removable for eating and cleaning",
      braces: "Fixed permanently during treatment",
    },
    {
      feature: "Oral Hygiene",
      invisalign: "Easy brushing and flossing",
      braces: "More difficult to maintain hygiene",
    },
    {
      feature: "Clinic Visits",
      invisalign: "Fewer dental visits required",
      braces: "Frequent tightening appointments",
    },
    {
      feature: "Food Restrictions",
      invisalign: "No food restrictions",
      braces: "Avoid sticky and hard foods",
    },
  ];

  return (
    <section
      className="py-20 px-6 bg-background"
      aria-labelledby="comparison-heading"
    >
      <div className="max-w-5xl mx-auto">
        {/* HEADER */}
        <header className="mb-12 text-center">
          <p className="text-sm tracking-widest text-primary mb-3 font-medium uppercase">
            Invisalign vs Braces
          </p>

          <h2
            id="comparison-heading"
            className="font-bold text-foreground text-[clamp(28px,4vw,40px)]"
          >
            Invisalign vs Traditional Braces: Which Is Better?
          </h2>

          <p className="mt-4 text-muted-text text-sm max-w-2xl mx-auto">
            Compare Invisalign clear aligners and traditional metal braces to
            understand which orthodontic treatment is right for your smile.
          </p>
        </header>

        {/* TABLE */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-x-auto rounded-2xl border border-borderCustom"
        >
          <table className="w-full border-collapse text-left">
            {/* CAPTION (SEO BOOST) */}
            <caption className="sr-only">
              Comparison of Invisalign clear aligners and traditional braces
              including comfort, appearance, hygiene, and treatment flexibility.
            </caption>

            {/* HEAD */}
            <thead className="bg-foreground">
              <tr>
                <th className="px-6 py-4 text-white/60 text-xs uppercase tracking-widest">
                  Feature
                </th>
                <th className="px-6 py-4 text-primary text-xs uppercase tracking-widest text-center">
                  Invisalign
                </th>
                <th className="px-6 py-4 text-white/60 text-xs uppercase tracking-widest text-center">
                  Braces
                </th>
              </tr>
            </thead>

            {/* BODY */}
            <tbody>
              {comparison.map((row, i) => (
                <tr
                  key={row.feature}
                  className={`border-t border-borderCustom ${
                    i % 2 === 0 ? "bg-white" : "bg-soft-bg"
                  }`}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 text-foreground text-sm font-medium"
                  >
                    {row.feature}
                  </th>

                  {/* Invisalign */}
                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <Check
                        size={16}
                        className="text-primary"
                        aria-hidden="true"
                      />
                      <span className="text-foreground text-sm">
                        {row.invisalign}
                      </span>
                    </div>
                  </td>

                  {/* Braces */}
                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <X size={16} className="text-muted" aria-hidden="true" />
                      <span className="text-muted text-sm">{row.braces}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
