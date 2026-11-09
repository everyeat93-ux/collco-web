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
                  01 / Shipped Works (8)
                </a>
              </li>
              <li>
                <a href="#store" className="hover:text-[#0B0B0C] transition-colors">
                  02 / Collector&apos;s Shelf
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
                href="https://blog.naver.com/collco_kr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#0B0B0C] transition-colors"
              >
                <span className="w-3.5 h-3.5 flex items-center justify-center font-bold text-[10px] bg-[#03C75A] text-white rounded-xs">
                  N
                </span>
                <span>Naver Blog</span>
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
