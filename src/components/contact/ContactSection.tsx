"use client";

import React, { useState } from "react";
import { Mail, Send, Check, Copy } from "lucide-react";
import { CONTACT_EMAIL, INQUIRY_GUIDE, SOCIAL_LINKS } from "@/data/siteConfig";
import { getProductCounts } from "@/data/products";
import { trackEvent } from "@/lib/analytics";

interface InquiryFormCardProps {
  defaultSubjectPrefix?: string;
  locationTag: string;
  heading?: string;
  description?: string;
}

export function InquiryFormCard({
  defaultSubjectPrefix = "[COLLCO 문의]",
  locationTag,
  heading = INQUIRY_GUIDE.heading,
  description = INQUIRY_GUIDE.description,
}: InquiryFormCardProps) {
  const [formData, setFormData] = useState({
    channelUrl: "",
    reason: "",
    timeline: "",
  });
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_EMAIL);
    setCopied(true);
    trackEvent("contact_email_copy", {
      destinationType: "copy_email",
      location: locationTag,
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    trackEvent("contact_email_draft_click", {
      destinationType: "mailto",
      location: locationTag,
    });

    const subject = encodeURIComponent(`${defaultSubjectPrefix} 제작 · 협업 문의`);
    const body = encodeURIComponent(
      [
        `1. 운영 중인 SNS 또는 스토어 주소: ${formData.channelUrl}`,
        `2. 웹사이트가 필요한 이유 / 해결하고 싶은 문제:\n${formData.reason}`,
        `3. 희망 시기: ${formData.timeline}`,
      ].join("\n\n")
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-[#FAF9F5] border border-[#E8E5DC] rounded-2xl p-5 sm:p-10 lg:p-12">
      <div className="max-w-2xl mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-black text-[#0B0B0C] tracking-tight break-keep-all">
          {heading}
        </h2>
        <p className="mt-2.5 text-sm sm:text-base text-[#484B52] leading-[1.8] break-keep-all">
          {description}
        </p>
      </div>

      {/* Mailto Draft Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label className="block space-y-1.5">
            <span className="text-xs font-bold text-[#0B0B0C]">
              운영 중인 SNS 또는 스토어 주소
            </span>
            <input
              type="text"
              required
              placeholder="예: 인스타그램 아이디, 스마트스토어 링크"
              value={formData.channelUrl}
              onChange={(e) => setFormData({ ...formData, channelUrl: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-white border border-[#E8E5DC] focus:border-[#0B0B0C] text-sm text-[#0B0B0C] outline-none"
            />
          </label>

          <label className="block space-y-1.5">
            <span className="text-xs font-bold text-[#0B0B0C]">희망 시기</span>
            <input
              type="text"
              required
              placeholder="예: 이번 달 말, 12월 중순, 일정 협의"
              value={formData.timeline}
              onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-white border border-[#E8E5DC] focus:border-[#0B0B0C] text-sm text-[#0B0B0C] outline-none"
            />
          </label>
        </div>

        <label className="block space-y-1.5">
          <span className="text-xs font-bold text-[#0B0B0C]">
            웹사이트가 필요한 이유나 해결하고 싶은 문제
          </span>
          <textarea
            required
            rows={4}
            placeholder="소개하고 싶은 브랜드 이야기, 작업 내용, 또는 함께 만들고 싶은 앱·웹 아이디어를 편하게 적어주세요."
            value={formData.reason}
            onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-white border border-[#E8E5DC] focus:border-[#0B0B0C] text-sm text-[#0B0B0C] outline-none resize-none leading-relaxed"
          />
        </label>

        <div className="pt-1 space-y-2.5">
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 min-h-[48px] rounded-full bg-[#0B0B0C] hover:bg-[#252528] text-white font-bold text-sm transition-colors cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>문의 이메일 작성</span>
          </button>

          <p className="text-xs text-[#737067] leading-relaxed break-keep-all">
            {INQUIRY_GUIDE.mailtoNote}
          </p>
        </div>
      </form>

      {/* Email Address & Copy Fallback */}
      <div className="mt-6 pt-6 border-t border-[#E8E5DC] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs sm:text-sm text-[#484B52]">
          <Mail className="w-4 h-4 text-[#0B0B0C] shrink-0" />
          <span className="font-mono font-bold text-[#0B0B0C]">{CONTACT_EMAIL}</span>
          <span className="text-xs text-[#737067] hidden sm:inline">
            · 메일 앱이 열리지 않으면 주소를 복사해 직접 보내주세요.
          </span>
        </div>

        <button
          type="button"
          onClick={handleCopyEmail}
          className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 min-h-[42px] rounded-full bg-white hover:bg-[#0B0B0C] text-[#0B0B0C] hover:text-white border border-[#E8E5DC] hover:border-[#0B0B0C] text-xs font-bold transition-colors shrink-0 cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-500" />
              <span>복사됨</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>주소 복사</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export function ContactSection() {
  const counts = getProductCounts();

  return (
    <section
      id="contact"
      aria-label="제작 및 협업 문의"
      className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-[#E8E5DC] space-y-10 sm:space-y-14"
    >
      {/* Inquiry Form + Email Copy */}
      <InquiryFormCard locationTag="home_contact" />

      {/* Signature Yellow Manifesto Banner */}
      <div className="bg-[#FFE600] rounded-2xl sm:rounded-3xl p-7 sm:p-14 text-[#0B0B0C] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8">
        <div>
          <div className="text-[11px] font-mono font-bold uppercase tracking-widest text-black/60 mb-2.5">
            COLLCO MANIFESTO
          </div>
          <p className="text-xl sm:text-2xl lg:text-3xl font-black leading-snug tracking-tight">
            Make it fast.
            <br />
            Make it beautiful.
            <br />
            Make it consistent.
            <br />
            Make it timeless.
            <br />
            Make it soulful.
            <br />
            Make it.
          </p>
        </div>

        <div className="max-w-sm space-y-4 pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-black/15 md:pl-8">
          <p className="text-xs sm:text-sm text-black/85 leading-[1.8] break-keep-all">
            &ldquo;군더더기를 덜어내고 본질에 집중합니다. 일상의 작은 불편과 이야기를 담은 {counts.total}개의 앱·웹, 그리고 좋아하는 마음으로 골라 담은 컬렉션.&rdquo;
          </p>
          <div className="flex flex-wrap gap-4 text-xs font-mono font-bold text-black/80">
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline underline-offset-4"
            >
              ↗ Instagram
            </a>
            <a
              href={SOCIAL_LINKS.threads}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline underline-offset-4"
            >
              ↗ Threads
            </a>
            <a
              href={SOCIAL_LINKS.blog}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline underline-offset-4"
            >
              ↗ Naver Blog
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
