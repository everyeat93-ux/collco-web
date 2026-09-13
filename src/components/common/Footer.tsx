import React from "react";
import Image from "next/image";
import { Sparkles, ShoppingBag, Mail, ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#ECEAE2] text-[#484B52] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand & Slogan */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-full overflow-hidden shadow-chic-xs">
                <Image
                  src="/logo-collco.png"
                  alt="COLLCO Logo"
                  fill
                  sizes="36px"
                  className="object-cover"
                />
              </div>
              <span className="font-black text-[#0B0B0C] text-xl tracking-wider">COLLCO</span>
            </div>
            <p className="text-sm text-[#484B52] max-w-md leading-relaxed font-normal">
              Everyday Life, Elevated by Technology & Thoughtful Curation.
              <br />
              불필요한 장식을 덜어내고 본질에 집중하는 1인 프로덕트 스튜디오.
            </p>

            {/* Live status badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white shadow-chic-xs text-[#0B0B0C] text-xs font-bold">
              <span className="w-2 h-2 rounded-full bg-[#0B0B0C]" />
              <span>Available for New Ventures & Collaborations</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0B0B0C]">NAVIGATION</h4>
            <ul className="space-y-2.5 text-sm font-semibold">
              <li>
                <a href="#about" className="hover:text-[#0B0B0C] transition-colors">About Studio</a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#0B0B0C] transition-colors">Digital Products</a>
              </li>
              <li>
                <a href="#store" className="hover:text-[#0B0B0C] transition-colors">Curated Store</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#0B0B0C] transition-colors">Contact & Collab</a>
              </li>
            </ul>
          </div>

          {/* Social & Direct */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0B0B0C]">CONNECT</h4>
            <div className="flex flex-col space-y-2.5 text-sm font-semibold">
              <a
                href="https://smartstore.naver.com/collco"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#484B52] hover:text-[#0B0B0C] transition-colors group"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Naver SmartStore</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#484B52] hover:text-[#0B0B0C] transition-colors group"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>GitHub Profile</span>
              </a>
              <a
                href="mailto:collcokorea@gmail.com"
                className="inline-flex items-center gap-2 text-[#484B52] hover:text-[#0B0B0C] transition-colors group"
              >
                <Mail className="w-4 h-4" />
                <span>collcokorea@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar (Borderless) */}
        <div className="mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#847E72]">
          <p>© {new Date().getFullYear()} COLLCO. All rights reserved. Built with Precision & Care.</p>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors py-2.5 px-4 rounded-xl bg-white text-[#0B0B0C] hover:bg-[#0B0B0C] shadow-chic-xs font-bold"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
