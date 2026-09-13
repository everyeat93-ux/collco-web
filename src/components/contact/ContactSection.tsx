"use client";

import React, { useState } from "react";
import {
  Mail,
  Send,
  Copy,
  Check,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";

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
    
    // Automatically trigger mailto client with pre-filled subject and body
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const inquiryTypes = ["프로덕트 협업", "스토어 & 굿즈 제휴", "기술 및 DX 자문", "기타 문의"];

  return (
    <section id="contact" className="py-28 md:py-36 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-[#EFECE6]/50 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Section Header */}
      <SectionHeader
        badgeText="04 / LET'S TALK"
        badgeVariant="neutral"
        title={
          <span>
            새로운 가능성을 만듭니다,{" "}
            <span className="text-[#0B0B0C]">
              협업 제안 및 문의
            </span>
          </span>
        }
        subtitle="새로운 디지털 프로덕트 공동 개발, 기존 서비스 인수/제휴, 굿즈 바잉 및 협업 아이디어가 있다면 언제든 편하게 연락해 주세요."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Direct Info & Value (Borderless) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-9 sm:p-11 rounded-[2.4rem] bg-white space-y-8 shadow-chic-lg">
            <div>
              <div className="text-[11px] font-mono font-bold text-[#847E72] uppercase tracking-wider mb-2">
                DIRECT COMMUNICATION
              </div>
              <h3 className="text-2xl font-black text-[#0B0B0C] tracking-tight">
                빠른 소통을 위한 직접 연락처
              </h3>
              <p className="text-sm text-[#484B52] mt-3 leading-relaxed font-normal">
                복잡한 절차 없이 이메일로 간단한 아이디어나 제안서를 보내주셔도 좋습니다.
              </p>
            </div>

            {/* Email Copy Card (Borderless) */}
            <div className="p-5 rounded-2xl bg-[#ECEAE2] flex items-center justify-between gap-3 shadow-chic-xs">
              <div className="flex items-center gap-3.5 overflow-hidden">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-chic-xs">
                  <Mail className="w-4 h-4 text-[#0B0B0C]" />
                </div>
                <div className="truncate">
                  <div className="text-[10px] font-mono text-[#847E72] uppercase font-bold">Official Email</div>
                  <a
                    href={`mailto:${contactEmail}`}
                    className="text-sm font-black text-[#0B0B0C] font-mono truncate transition-colors block"
                    title="이메일 바로 보내기"
                  >
                    {contactEmail}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="px-4.5 py-2 rounded-full bg-white text-xs font-bold text-[#0B0B0C] hover:bg-[#0B0B0C] hover:text-white flex items-center gap-1.5 shrink-0 transition-colors shadow-chic-xs"
                title="이메일 주소 복사"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">복사됨!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>복사</span>
                  </>
                )}
              </button>
            </div>

            {/* Commitments (Borderless) */}
            <div className="space-y-4 pt-2 text-xs sm:text-sm text-[#484B52]">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#0B0B0C] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#0B0B0C]">24시간 이내 회신 원칙:</span> 접수된
                  모든 제안은 1영업일 이내에 검토 후 상세 회신을 드립니다.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-[#0B0B0C] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#0B0B0C]">비밀 보장:</span> 협업 제안 시 논의되는
                  모든 비즈니스 정보 및 아이디어는 철저히 보안을 유지합니다.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form (Borderless) */}
        <div className="lg:col-span-7">
          <div className="p-9 sm:p-11 rounded-[2.4rem] bg-white shadow-chic-lg">
            {submitted ? (
              <div className="py-14 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#ECEAE2] flex items-center justify-center mx-auto text-[#0B0B0C] shadow-chic-xs">
                  <Check className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-black text-[#0B0B0C]">문의가 성공적으로 전달되었습니다</h4>
                <p className="text-sm text-[#484B52] max-w-md mx-auto leading-relaxed">
                  남겨주신 내용을 확인 후 입력하신 이메일(
                  <span className="text-[#0B0B0C] font-mono font-bold">{formData.email}</span>)로 24시간 이내에
                  연락드리겠습니다.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", type: "프로덕트 협업", message: "" });
                  }}
                  className="mt-4 px-6 py-3 rounded-xl bg-[#0B0B0C] text-xs font-bold text-white transition-all shadow-chic-xs hover:bg-[#1E1E22]"
                >
                  새 문의 작성하기
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Inquiry Type selector */}
                <div>
                  <label className="block text-xs font-bold text-[#0B0B0C] uppercase tracking-wider mb-3">
                    문의 유형 (Inquiry Category)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {inquiryTypes.map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setFormData({ ...formData, type })}
                        className={`px-4 py-3 rounded-full text-xs font-bold transition-all text-center ${
                          formData.type === type
                            ? "bg-[#0B0B0C] text-white shadow-chic-xs"
                            : "bg-[#ECEAE2] text-[#484B52] hover:text-[#0B0B0C] hover:bg-[#DFDCD2]"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email inputs (Borderless, Tone Fill) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-bold text-[#0B0B0C] mb-2"
                    >
                      성함 / 회사명 <span className="text-[#847E72]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="홍길동 (또는 회사명)"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-4 rounded-2xl bg-[#ECEAE2] focus:bg-white text-[#0B0B0C] text-sm placeholder:text-[#847E72] outline-none transition-all shadow-chic-xs focus:shadow-chic"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-bold text-[#0B0B0C] mb-2"
                    >
                      답변받으실 이메일 <span className="text-[#847E72]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-4 rounded-2xl bg-[#ECEAE2] focus:bg-white text-[#0B0B0C] text-sm placeholder:text-[#847E72] outline-none transition-all shadow-chic-xs focus:shadow-chic"
                    />
                  </div>
                </div>

                {/* Message Textarea (Borderless, Tone Fill) */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-bold text-[#0B0B0C] mb-2"
                  >
                    제안 및 문의 내용 <span className="text-[#847E72]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="협업 제안의 배경, 희망하시는 일정이나 주요 내용 등을 자유롭게 적어주세요."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl bg-[#ECEAE2] focus:bg-white text-[#0B0B0C] text-sm placeholder:text-[#847E72] outline-none transition-all resize-y shadow-chic-xs focus:shadow-chic"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4.5 rounded-full bg-[#0B0B0C] hover:bg-[#1E1E22] text-white text-xs font-mono font-bold uppercase tracking-wider shadow-chic hover:shadow-chic-lg active:scale-[0.99] transition-all flex items-center justify-center gap-2.5 disabled:opacity-50"
                >
                  {loading ? (
                    <span>전송 중...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-zinc-300" />
                      <span>COLLCO에 문의 보내기</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
