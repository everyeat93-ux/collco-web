import React from "react";
import { Sparkles, ShoppingBag, Mail, ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[#30363d] bg-[#0d1117] text-[#8b949e] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-blue-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand & Slogan */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="font-extrabold text-white text-lg tracking-wider">COLLCO</span>
            </div>
            <p className="text-sm text-[#8b949e] max-w-md leading-relaxed">
              Everyday Problems, Solved with Digital Products & Collections.
              <br />
              일상의 니치한 문제를 찾아 디지털 프로덕트와 엄선된 큐레이션으로 해결하는 1인 인디 프로덕트 스튜디오.
            </p>

            {/* Live status badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for New Ventures & Collaborations</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Studio</a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">Digital Products</a>
              </li>
              <li>
                <a href="#store" className="hover:text-white transition-colors">Curated Store</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact & Collab</a>
              </li>
            </ul>
          </div>

          {/* Social & Direct */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Connect</h4>
            <div className="flex flex-col space-y-2 text-sm">
              <a
                href="https://smartstore.naver.com/collco"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-white transition-colors group"
              >
                <ShoppingBag className="w-4 h-4 text-emerald-400" />
                <span>Naver SmartStore</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-white transition-colors group"
              >
                <svg className="w-4 h-4 text-zinc-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>GitHub Profile</span>
              </a>
              <a
                href="mailto:collcokorea@gmail.com"
                className="inline-flex items-center gap-2 hover:text-white transition-colors group"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                <span>collcokorea@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#30363d]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6e7681]">
          <p>© {new Date().getFullYear()} COLLCO. All rights reserved. Designed & Built by Solo Builder.</p>
          <a
            href="#"
            className="inline-flex items-center gap-1 hover:text-white transition-colors py-1 px-2 rounded hover:bg-[#161b22]"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
