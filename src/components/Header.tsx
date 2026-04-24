"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Invisalign", href: "/invisalign" },
    { name: "Pediatric", href: "/pediatric" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  /* Lock scroll on mobile menu */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-[60] bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* LOGO */}
        <Link
          href="/"
          aria-label="Dr Susheel Invisalign Dental Clinic homepage"
        >
          <Image
            src="/images/Logo.webp"
            alt="Dr Susheel Invisalign dental clinic in Hyderabad"
            width={180}
            height={40}
            priority
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav
          className="hidden lg:flex items-center gap-6 text-foreground"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <div key={link.name} className="relative">
                <Link
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`pb-1 transition focus:outline-none focus:ring-2 focus:ring-primary ${
                    isActive ? "text-primary" : "hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>

                {isActive && !shouldReduceMotion && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 bottom-0 h-[2px] w-full bg-primary"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
              </div>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            aria-label="Book Invisalign consultation"
            className="bg-green-bg text-white px-5 py-2 rounded-full hover:bg-primary transition focus:outline-none focus:ring-2 focus:ring-primary"
          >
            Book Consultation
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="lg:hidden focus:outline-none focus:ring-2 focus:ring-primary"
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div
          id="mobile-menu"
          className="lg:hidden bg-white px-4 pb-7 pt-8 flex flex-col items-center gap-6 text-xl text-center"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={isActive ? "page" : undefined}
                className={`block py-2 ${
                  isActive ? "text-primary font-semibold" : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 w-full text-center bg-primary text-white py-3 rounded-full"
          >
            Book Consultation
          </Link>
        </div>
      )}
    </header>
  );
}
