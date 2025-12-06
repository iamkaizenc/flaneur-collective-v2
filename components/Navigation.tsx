"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const NAV_ITEMS = [
  { label: "Work", id: "work" },
  { label: "Process", id: "process" },
  { label: "Contact", id: "contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    // Set initial scroll state
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        mounted && scrolled
          ? "bg-cream/90 backdrop-blur-md border-b border-charcoal/5"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-3 hover:opacity-70 transition-opacity"
          aria-label="Go to top"
        >
          <Image
            src="/logo.png"
            alt="Flaneur Collective"
            width={40}
            height={40}
            className="h-10 w-auto"
            priority
          />
          <span className="hidden sm:block font-light tracking-[0.15em] text-xs uppercase">
            Collective
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm tracking-wide text-charcoal/70 hover:text-charcoal transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 -mr-2"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span
              className={`h-px bg-charcoal transition-all duration-300 origin-center ${
                mobileMenuOpen ? "rotate-45 translate-y-[3px]" : ""
              }`}
            />
            <span
              className={`h-px bg-charcoal transition-all duration-300 origin-center ${
                mobileMenuOpen ? "-rotate-45 -translate-y-[3px]" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          mobileMenuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 flex flex-col gap-4 bg-cream/95 backdrop-blur-md">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-left text-sm tracking-wide text-charcoal/70 hover:text-charcoal transition-colors py-2"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
