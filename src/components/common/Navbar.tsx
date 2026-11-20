"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "프로젝트", href: "/projects", match: "/projects" },
    { name: "Craft Lab", href: "/craft", match: "/craft" },
    { name: "스토어", href: "/store", match: "/store" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "glass-rauno py-3 border-b border-[#E8E5DC] shadow-rauno-xs"
          : "bg-white/85 backdrop-blur-md py-4 border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
        {/* Brand Wordmark */}
        <Link
          href="/"
          className="group flex items-center gap-2 tracking-tight text-[#0B0B0C] transition-opacity hover:opacity-80"
          aria-label="콜코 홈으로 이동"
        >
          <div className="relative h-5 w-[109px] shrink-0">
            <Image
              src="/logo-collco-wordmark.png"
              alt="COLLCO"
              fill
              priority
              className="object-contain"
            />
          </div>
          <span className="w-2 h-2 rounded-full bg-[#FFE600] border border-black/40 shrink-0" />
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="주요 메뉴"
          className="hidden md:flex items-center gap-1 bg-white/95 border border-[#E8E5DC] px-2 py-1 rounded-full shadow-rauno-xs"
        >
          {navLinks.map((link) => {
            const active = pathname.startsWith(link.match);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  active
                    ? "bg-[#0B0B0C] text-white font-bold"
                    : "text-[#484B52] hover:text-[#0B0B0C] hover:bg-[#F8F7F4]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Primary CTA */}
        <div className="hidden md:flex items-center">
          <Link
            href="/studio"
            onClick={() =>
              trackEvent("studio_page_navigate", {
                destinationType: "studio",
                location: "navbar_cta",
              })
            }
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-colors ${
              pathname.startsWith("/studio")
                ? "bg-[#FFE600] text-[#0B0B0C] border border-black/20"
                : "bg-[#0B0B0C] hover:bg-[#252528] text-white"
            }`}
          >
            <span>제작 문의</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Actions */}
        <div className="flex md:hidden items-center gap-2">
          <Link
            href="/studio"
            onClick={() =>
              trackEvent("studio_page_navigate", {
                destinationType: "studio",
                location: "mobile_navbar_cta",
              })
            }
            className="inline-flex items-center gap-1 px-3.5 py-2 min-h-[40px] rounded-full bg-[#0B0B0C] text-white text-xs font-bold"
          >
            <span>제작 문의</span>
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 min-w-[40px] min-h-[40px] flex items-center justify-center rounded-xl text-[#0B0B0C] bg-white hover:bg-[#F8F7F4] border border-[#E8E5DC] transition-colors"
            aria-label={mobileMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <nav
          aria-label="모바일 메뉴"
          className="md:hidden bg-white/98 backdrop-blur-xl px-5 py-4 border-b border-[#E8E5DC] shadow-rauno-sm space-y-1"
        >
          {navLinks.map((link) => {
            const active = pathname.startsWith(link.match);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3 py-3 min-h-[44px] rounded-xl text-sm font-medium transition-colors ${
                  active
                    ? "bg-[#0B0B0C] text-white font-bold"
                    : "text-[#0B0B0C] hover:bg-[#F8F7F4]"
                }`}
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </Link>
            );
          })}
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center justify-between px-3 py-3 min-h-[44px] rounded-xl text-sm font-medium transition-colors ${
              pathname.startsWith("/about")
                ? "bg-[#0B0B0C] text-white font-bold"
                : "text-[#484B52] hover:bg-[#F8F7F4]"
            }`}
          >
            <span>콜코 소개</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
          </Link>
        </nav>
      )}
    </header>
  );
}
