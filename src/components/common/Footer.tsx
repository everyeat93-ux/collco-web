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
              <div className="relative h-8 w-[85px]">
                <Image
                  src="/logo-collco-studio.png"
                  alt="COLLCO STUDIO"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#484B52] max-w-md leading-relaxed font-normal">
              Everyday Life, Elevated by Technology & Thoughtful Curation.
              <br />
              불필요한 군더더기를 덜어내고 본질에 집중하는 1인 프로덕트 스튜디오.
            </p>

            {/* Live status badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E8E5DC] text-[#0B0B0C] text-xs font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>프로덕트 제작 · 협업 제안 열림</span>
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
                <a href="#projects" className="hover:text-[#0B0B0C] transition-colors">
                  01 / Shipped Works (11)
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
                href="https://www.instagram.com/collco_korea/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#0B0B0C] transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span>Instagram (@collco_korea)</span>
              </a>
              <a
                href="https://www.threads.net/@collco_korea"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#0B0B0C] transition-colors"
              >
                <span className="w-3.5 h-3.5 flex items-center justify-center font-bold text-[11px] text-current">
                  @
                </span>
                <span>Threads (@collco_korea)</span>
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
