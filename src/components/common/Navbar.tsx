"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Digital Products", href: "#products" },
    { name: "Curated Store", href: "#store" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F7F6F2]/85 backdrop-blur-xl py-3.5 shadow-chic-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="group flex items-center gap-2.5 text-xl font-extrabold tracking-tight text-[#0B0B0C] transition-opacity hover:opacity-85"
        >
          <div className="relative w-8 h-8 rounded-full overflow-hidden shadow-chic-xs group-hover:scale-105 transition-all">
            <Image
              src="/logo-collco.png"
              alt="COLLCO Logo"
              fill
              sizes="32px"
              priority
              className="object-cover"
            />
          </div>
          <span className="font-black tracking-wider text-xl text-[#0B0B0C]">
            COLLCO
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#0B0B0C]" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#666A73] hover:text-[#0B0B0C] hover:bg-[#ECEAE2] transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-mono font-bold uppercase tracking-wider rounded-full bg-[#0B0B0C] text-white hover:bg-[#1E1E22] shadow-chic-xs hover:shadow-chic-sm transition-all active:scale-95"
          >
            LET'S TALK
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-[#111113] hover:bg-[#EFECE6] transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F7F6F2]/98 backdrop-blur-2xl px-6 py-6 shadow-chic-lg space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-bold text-[#3E424B] hover:text-[#111113] transition-colors py-2"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-3">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-[#0B0B0C] text-white text-xs font-mono font-bold uppercase tracking-wider shadow-chic-sm"
            >
              LET'S TALK
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
