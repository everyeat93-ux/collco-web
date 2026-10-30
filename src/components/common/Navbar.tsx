"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ArrowUpRight, Copy, Check } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const contactEmail = "collcokorea@gmail.com";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navLinks = [
    { name: "Overview", href: "#overview" },
    { name: "Projects (7)", href: "#projects" },
    { name: "Craft Lab", href: "#craft" },
    { name: "Store", href: "#store" },
    { name: "Doctrine", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-rauno py-3 border-b border-[#E8E5DC] shadow-rauno-xs"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Rauno-style Identity Tag */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="group flex items-center gap-2.5 text-sm font-mono font-bold tracking-tight text-[#0B0B0C]"
          >
            <div className="relative w-6 h-6 rounded-full overflow-hidden border border-[#E8E5DC] group-hover:border-[#0B0B0C] transition-all">
              <Image
                src="/logo-collco.png"
                alt="COLLCO Logo"
                fill
                sizes="24px"
                priority
                className="object-cover"
              />
            </div>
            <span className="font-mono font-black text-sm tracking-widest uppercase">COLLCO</span>
            <span className="w-2 h-2 rounded-full bg-[#FFE600] border border-black/40" />
          </a>

          {/* Status Badge */}
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F8F7F4] border border-[#E8E5DC] text-[10px] font-mono text-[#737067]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>SHIPPING LIVE</span>
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/90 border border-[#E8E5DC] px-2 py-1 rounded-full shadow-rauno-xs">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1 rounded-full text-xs font-mono text-[#737067] hover:text-[#0B0B0C] hover:bg-[#F8F7F4] transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Quick Email Trigger (Rauno style) */}
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F8F7F4] hover:bg-white border border-[#E8E5DC] text-xs font-mono text-[#0B0B0C] transition-all shadow-rauno-xs"
            title="Click to copy email address"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700 font-bold">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#737067]" />
                <span>Email</span>
              </>
            )}
          </button>

          <a
            href="#contact"
            className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-[#0B0B0C] hover:bg-[#252528] text-white text-xs font-mono font-bold transition-all"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-[#0B0B0C] hover:bg-[#F8F7F4] border border-[#E8E5DC] transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl px-6 py-5 border-b border-[#E8E5DC] shadow-rauno-sm space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-mono text-[#0B0B0C] hover:text-[#737067] py-1.5"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-[#E8E5DC] flex items-center justify-between">
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#0B0B0C]"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>collcokorea@gmail.com</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
