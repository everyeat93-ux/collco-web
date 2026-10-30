import React from "react";
import Image from "next/image";
import { ShoppingBag, Mail, ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#FAF9F5] border-t border-[#E8E5DC] text-[#484B52] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-14">
          {/* Brand & Slogan */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="relative w-7 h-7 rounded-full overflow-hidden border border-[#E8E5DC]">
                <Image
                  src="/logo-collco.png"
                  alt="COLLCO Logo"
                  fill
                  sizes="28px"
                  className="object-cover"
                />
              </div>
              <span className="font-mono font-black text-[#0B0B0C] text-sm tracking-widest uppercase">
                COLLCO
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#484B52] max-w-md leading-relaxed font-normal">
              Everyday Life, Elevated by Technology & Thoughtful Curation.
              <br />
              불필요한 군더더기를 덜어내고 본질에 집중하는 1인 프로덕트 스튜디오.
            </p>

            {/* Live status badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E8E5DC] text-[#0B0B0C] text-xs font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Select Advisory & Ventures</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0B0B0C]">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs font-mono text-[#737067]">
              <li>
                <a href="#about" className="hover:text-[#0B0B0C] transition-colors">
                  03 / About Studio
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#0B0B0C] transition-colors">
                  01 / Shipped Works (7)
                </a>
              </li>
              <li>
                <a href="#store" className="hover:text-[#0B0B0C] transition-colors">
                  02 / Curated Store
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#0B0B0C] transition-colors">
                  04 / Contact & Collab
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Direct */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0B0B0C]">
              CONNECT
            </h4>
            <div className="flex flex-col space-y-2 text-xs font-mono text-[#737067]">
              <a
                href="https://smartstore.naver.com/collco"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#0B0B0C] transition-colors"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Naver SmartStore</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#0B0B0C] transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>GitHub Profile</span>
              </a>
              <a
                href="mailto:collcokorea@gmail.com"
                className="inline-flex items-center gap-2 hover:text-[#0B0B0C] transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>collcokorea@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-6 border-t border-[#E8E5DC] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#737067]">
          <p>© {new Date().getFullYear()} COLLCO. All rights reserved.</p>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors py-1.5 px-3 rounded-full bg-white text-[#0B0B0C] hover:bg-[#0B0B0C] border border-[#E8E5DC] shadow-swiss-xs"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
