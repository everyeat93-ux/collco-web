import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Mail, ArrowUp } from "lucide-react";
import { getProductCounts } from "@/data/products";
import { CONTACT_EMAIL, SOCIAL_LINKS } from "@/data/siteConfig";

export function Footer() {
  const counts = getProductCounts();

  return (
    <footer className="bg-[#FAF9F5] border-t border-[#E8E5DC] text-[#484B52] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-14">
          {/* Brand & Slogan */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5" aria-label="콜코 홈으로 이동">
              <div className="relative h-8 w-[85px]">
                <Image
                  src="/logo-collco-studio.png"
                  alt="COLLCO STUDIO"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-xs sm:text-sm text-[#484B52] max-w-md leading-relaxed font-normal break-keep-all">
              일상의 작은 불편을 발견하고, 직접 만들어 해결하는 1인 프로덕트 스튜디오입니다.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0B0B0C]">
              MENU
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#484B52]">
              <li>
                <Link href="/projects" className="hover:text-[#0B0B0C] transition-colors">
                  전체 프로젝트 ({counts.total})
                </Link>
              </li>
              <li>
                <Link href="/studio" className="hover:text-[#0B0B0C] transition-colors">
                  웹사이트 제작 안내
                </Link>
              </li>
              <li>
                <Link href="/craft" className="hover:text-[#0B0B0C] transition-colors">
                  Craft Lab
                </Link>
              </li>
              <li>
                <Link href="/store" className="hover:text-[#0B0B0C] transition-colors">
                  컬렉션 스토어
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#0B0B0C] transition-colors">
                  콜코 소개 · 제작 철학
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Direct */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0B0B0C]">
              CONNECT
            </h4>
            <div className="flex flex-col space-y-2.5 text-xs sm:text-sm text-[#484B52]">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#0B0B0C] transition-colors"
              >
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span>인스타그램 (@collco_korea)</span>
              </a>
              <a
                href={SOCIAL_LINKS.threads}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#0B0B0C] transition-colors"
              >
                <span className="w-4 h-4 flex items-center justify-center font-bold text-xs text-current shrink-0">
                  @
                </span>
                <span>스레드 (@collco_korea)</span>
              </a>
              <a
                href={SOCIAL_LINKS.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#0B0B0C] transition-colors"
              >
                <span className="w-4 h-4 flex items-center justify-center font-bold text-[10px] bg-[#03C75A] text-white rounded-xs shrink-0">
                  N
                </span>
                <span>네이버 블로그</span>
              </a>
              <a
                href={SOCIAL_LINKS.smartStore}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#0B0B0C] transition-colors"
              >
                <ShoppingBag className="w-4 h-4 shrink-0" />
                <span>스마트스토어</span>
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-2 hover:text-[#0B0B0C] transition-colors font-mono text-xs"
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span>{CONTACT_EMAIL}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-[#E8E5DC] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#737067]">
          <p>© {new Date().getFullYear()} COLLCO. All rights reserved.</p>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors py-2 px-3.5 rounded-full bg-white text-[#0B0B0C] hover:bg-[#0B0B0C] border border-[#E8E5DC]"
          >
            <span>맨 위로</span>
            <ArrowUp className="w-3 h-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
