"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

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
          ? "bg-[#0d1117]/85 backdrop-blur-md border-b border-[#30363d]/70 py-3.5 shadow-lg shadow-black/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="group flex items-center gap-2.5 text-xl font-bold tracking-tight text-white transition-opacity hover:opacity-90"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="font-extrabold tracking-wider text-xl bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
            COLLCO
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#8b949e] hover:text-white transition-colors duration-200 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-500 hover:to-indigo-500 shadow-md shadow-blue-500/20 hover:shadow-blue-500/40 transition-all active:scale-95"
          >
            협업 제안하기
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-[#8b949e] hover:text-white hover:bg-[#161b22] transition-colors border border-[#30363d]/50"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#161b22]/95 backdrop-blur-xl border-b border-[#30363d] px-6 py-5 shadow-2xl space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#8b949e] hover:text-white transition-colors py-2 border-b border-white/[0.05]"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold shadow-md shadow-blue-500/25"
            >
              협업 제안하기
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
