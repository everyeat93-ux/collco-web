"use client";

import React, { useState } from "react";
import {
  Mail,
  Send,
  Copy,
  Check,
  Clock,
  ShieldCheck,
  ShoppingBag,
  ExternalLink,
} from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "프로덕트 협업",
    message: "",
  });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const contactEmail = "collcokorea@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const subject = encodeURIComponent(`[COLLCO 협업 제안] ${formData.type} - ${formData.name}`);
    const body = encodeURIComponent(
      `보낸 사람: ${formData.name} (${formData.email})\n문의 유형: ${formData.type}\n\n[문의 내용]\n${formData.message}`
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const inquiryTypes = ["프로덕트 협업", "스토어 & 굿즈 제휴", "기술 및 DX 자문", "기타 문의"];

  return (
    <section id="contact" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      {/* Rauno's Iconic Four-Corner Contact Frame */}
      <div className="relative bg-[#F8F7F4] border border-[#E8E5DC] rounded-[2.5rem] p-10 sm:p-16 mb-16 shadow-rauno-card overflow-hidden">
        {/* Rauno Corner Plus Accents */}
        <span className="absolute top-4 left-4 font-mono text-xs text-[#C5C0B4] select-none">+</span>
        <span className="absolute top-4 right-4 font-mono text-xs text-[#C5C0B4] select-none">+</span>
        <span className="absolute bottom-4 left-4 font-mono text-xs text-[#C5C0B4] select-none">+</span>
        <span className="absolute bottom-4 right-4 font-mono text-xs text-[#C5C0B4] select-none">+</span>

        <div className="relative z-10 flex flex-col items-center justify-center text-center py-8">
          <div className="text-[10px] font-mono font-bold text-[#737067] uppercase tracking-widest mb-3">
            [GET IN TOUCH] · FAST RESOLUTION
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B0B0C] tracking-tight mb-4">
            새로운 가능성을 만듭니다.
          </h2>

          <p className="text-xs sm:text-sm text-[#484B52] max-w-md mx-auto mb-8 font-normal leading-relaxed">
            새로운 디지털 프로덕트 빌딩, 기존 서비스 인수/제휴, 굿즈 바잉 및 기술 자문 등 언제든 편하게 제안해 주세요.
          </p>

          {/* Center Interactive Email Copy Capsule (Rauno Signature) */}
          <button
            onClick={handleCopyEmail}
            className="group relative inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#0B0B0C] hover:bg-[#252528] text-white font-mono font-bold text-xs uppercase tracking-wider shadow-rauno transition-all active:scale-95"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Mail className="w-4 h-4 text-[#FFE600]" />
                <span>{contactEmail}</span>
                <span className="text-[#AFA99E] text-[10px]">[COPY]</span>
              </>
            )}
          </button>
        </div>

        {/* Four-Corner Minimal Navigation Links */}
        <div className="pt-8 border-t border-[#E8E5DC] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#737067]">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0B0B0C] transition-colors"
          >
            ↗ GitHub
          </a>
          <a
            href="https://smartstore.naver.com/collco"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0B0B0C] transition-colors"
          >
            ↗ Naver SmartStore
          </a>
          <a
            href="#projects"
            className="hover:text-[#0B0B0C] transition-colors"
          >
            ↓ Shipped Works (7)
          </a>
          <span className="text-[#AFA99E]">1 Business Day Response SLA</span>
        </div>
      </div>

      {/* Rauno's Iconic Yellow Manifesto Banner */}
      <div className="bg-[#FFE600] rounded-[2.5rem] p-10 sm:p-14 mb-16 text-[#0B0B0C] shadow-rauno-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <div className="text-[10px] font-mono font-black uppercase tracking-widest text-black/60 mb-2">
            THE COLLCO MANIFESTO
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

        <div className="max-w-sm text-xs font-mono text-black/80 leading-relaxed pt-2 md:pt-0 border-t md:border-t-0 md:border-l border-black/20 md:pl-8">
          &ldquo;불필요한 군더더기를 덜어내고 본질에 집중합니다. 일상의 사소한 불편을 해소하는 7개의 독자적 디지털 솔루션과 수집가의 안목으로 엄선한 100% 정품 컬렉션.&rdquo;
        </div>
      </div>

      {/* Direct Proposal Form */}
      <div className="bg-white border border-[#E8E5DC] rounded-[2rem] p-8 sm:p-12 shadow-rauno-card">
        <h3 className="text-xl font-black text-[#0B0B0C] tracking-tight mb-2">
          상세 제안서 보내기
        </h3>
        <p className="text-xs sm:text-sm text-[#484B52] mb-6">
          이메일 클라이언트를 통해 작성하신 내용이 즉시 전달됩니다.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-wrap gap-1.5 mb-2">
            {inquiryTypes.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setFormData({ ...formData, type })}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  formData.type === type
                    ? "bg-[#0B0B0C] text-white font-bold"
                    : "bg-[#F8F7F4] border border-[#E8E5DC] text-[#737067] hover:text-[#0B0B0C]"
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              required
              placeholder="성함 / 기업명"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-[#F8F7F4] border border-[#E8E5DC] focus:border-[#0B0B0C] focus:bg-white text-xs sm:text-sm text-[#0B0B0C] outline-none"
            />
            <input
              type="email"
              required
              placeholder="회신 이메일 주소"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-[#F8F7F4] border border-[#E8E5DC] focus:border-[#0B0B0C] focus:bg-white text-xs sm:text-sm text-[#0B0B0C] outline-none"
            />
          </div>

          <textarea
            required
            rows={4}
            placeholder="제안 내용, 일정, 예산 등 편하신 형식으로 남겨주세요."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-[#F8F7F4] border border-[#E8E5DC] focus:border-[#0B0B0C] focus:bg-white text-xs sm:text-sm text-[#0B0B0C] outline-none resize-none leading-relaxed"
          />

          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-[#0B0B0C] hover:bg-[#252528] text-white font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-rauno-xs active:scale-95"
          >
            <Send className="w-3.5 h-3.5" />
            <span>{loading ? "전송 준비 중..." : "이메일 프로그램으로 제안서 보내기"}</span>
          </button>
        </form>
      </div>
    </section>
  );
}
