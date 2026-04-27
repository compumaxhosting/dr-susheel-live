"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { CheckCircle } from "lucide-react";

type FormData = {
  name: string;
  phone: string;
  service: string;
  date?: string;
  message?: string;
};

export default function FormAndMap() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setLoading(true);

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        setSubmitted(true);
      } else {
        alert("Failed to send. Try again.");
        console.error(result.error);
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 px-6 bg-soft-bg">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[55%_45%] gap-10">
        {/* MAP */}
        <motion.div
          className="overflow-hidden rounded-2xl h-[480px]"
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <iframe
            src="https://maps.google.com/maps?q=Dwaraka+Nagar+Colony,+Shaikpet,+Hyderabad,+500008&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            title="Clinic Location"
          />
        </motion.div>

        {/* FORM */}
        <motion.div
          className="bg-white rounded-2xl p-8 border border-card-border shadow-sm"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-8">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-5 bg-process-bg">
                <CheckCircle size={28} className="text-primary" />
              </div>

              <h2 className="font-cormorant font-bold text-[28px] text-foreground mb-3">
                Appointment Requested!
              </h2>

              <p className="font-dm font-light text-muted-text text-[15px] leading-[1.8]">
                Thank you! We&apos;ll confirm your appointment within 2 hours.
              </p>

              <a
                href="https://wa.me/917799376656"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-[14px] bg-[#25D366]"
              >
                Confirm on WhatsApp
              </a>
            </div>
          ) : (
            <>
              <h2 className="font-cormorant font-bold text-[26px] text-foreground mb-6">
                Request Appointment
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <input
                  placeholder="Full Name"
                  {...register("name", { required: "Name is required" })}
                  className="w-full px-4 py-3 rounded-xl border"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs">{errors.name.message}</p>
                )}

                <input
                  placeholder="Phone"
                  {...register("phone", { required: "Phone is required" })}
                  className="w-full px-4 py-3 rounded-xl border"
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs">{errors.phone.message}</p>
                )}

                <select
                  {...register("service", { required: "Select a service" })}
                  className="w-full px-4 py-3 rounded-xl border"
                >
                  <option value="">Select service</option>
                  <option value="invisalign">Invisalign</option>
                  <option value="cleaning">Cleaning</option>
                </select>

                <input
                  type="date"
                  {...register("date")}
                  className="w-full px-4 py-3 rounded-xl border"
                />

                <textarea
                  placeholder="Message"
                  {...register("message")}
                  className="w-full px-4 py-3 rounded-xl border"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-full text-white bg-primary"
                >
                  {loading ? "Sending..." : "Confirm Appointment"}
                </button>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}