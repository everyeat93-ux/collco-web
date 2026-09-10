"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Send,
  Copy,
  Check,
  MessageSquare,
  Sparkles,
  ArrowUpRight,
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

  const contactEmail = "contact@collco.studio";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate async submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const inquiryTypes = ["프로덕트 협업", "스토어 & 굿즈 제휴", "기술 및 DX 자문", "기타 문의"];

  return (
    <section id="contact" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Section Header */}
      <SectionHeader
        badgeText="Let's Connect"
        badgeVariant="info"
        title={
          <span>
            새로운 가능성을 만듭니다,{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
              협업 제안 및 문의
            </span>
          </span>
        }
        subtitle="새로운 디지털 프로덕트 공동 개발, 기존 서비스 인수/제휴, 굿즈 바잉 및 협업 아이디어가 있다면 언제든 편하게 연락해 주세요."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Direct Info & Value */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#161b22] border border-[#30363d] space-y-6 shadow-xl">
            <div>
              <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">
                Direct Contact
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                빠른 소통을 위한 직접 연락처
              </h3>
              <p className="text-xs sm:text-sm text-[#8b949e] mt-2 leading-relaxed">
                복잡한 절차 없이 이메일로 간단한 아이디어나 제안서를 보내주셔도 좋습니다.
              </p>
            </div>

            {/* Email Copy Card */}
            <div className="p-4 rounded-xl bg-[#0d1117] border border-[#30363d] flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-blue-400" />
                </div>
                <div className="truncate">
                  <div className="text-[10px] text-zinc-400 uppercase">Official Email</div>
                  <div className="text-sm font-semibold text-white font-mono truncate">
                    {contactEmail}
                  </div>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="px-3 py-1.5 rounded-lg bg-[#21262d] hover:bg-[#30363d] border border-[#30363d] text-xs font-semibold text-zinc-200 flex items-center gap-1.5 shrink-0 transition-colors"
                title="이메일 주소 복사"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">복사됨!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-zinc-400" />
                    <span>복사</span>
                  </>
                )}
              </button>
            </div>

            {/* Commitments */}
            <div className="space-y-3 pt-4 border-t border-[#30363d]/60 text-xs text-zinc-300">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">24시간 이내 회신 원칙:</span> 접수된
                  모든 제안은 1영업일 이내에 검토 후 상세 회신을 드립니다.
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">비밀 보장:</span> 협업 제안 시 논의되는
                  모든 비즈니스 정보 및 아이디어는 철저히 보안을 유지합니다.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#161b22] border border-[#30363d] shadow-2xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400 shadow-lg shadow-emerald-500/20">
                  <Check className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-white">문의가 성공적으로 전달되었습니다!</h4>
                <p className="text-sm text-[#8b949e] max-w-md mx-auto">
                  남겨주신 내용을 확인 후 입력하신 이메일(
                  <span className="text-zinc-200 font-mono">{formData.email}</span>)로 24시간 이내에
                  연락드리겠습니다.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", type: "프로덕트 협업", message: "" });
                  }}
                  className="mt-4 px-5 py-2 rounded-lg bg-[#21262d] text-xs font-semibold text-zinc-300 hover:text-white border border-[#30363d] transition-colors"
                >
                  새 문의 작성하기
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Inquiry Type selector */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                    문의 유형 (Inquiry Category)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {inquiryTypes.map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setFormData({ ...formData, type })}
                        className={`px-3 py-2 rounded-lg text-xs font-semibold border transition-all text-center ${
                          formData.type === type
                            ? "bg-blue-600/20 border-blue-500 text-blue-300 shadow-sm"
                            : "bg-[#0d1117] border-[#30363d] text-[#8b949e] hover:border-zinc-500 hover:text-white"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-medium text-zinc-300 mb-1.5"
                    >
                      성함 / 회사명 <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="홍길동 (또는 회사명)"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0d1117] border border-[#30363d] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white text-sm placeholder:text-zinc-600 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-medium text-zinc-300 mb-1.5"
                    >
                      답변받으실 이메일 <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0d1117] border border-[#30363d] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white text-sm placeholder:text-zinc-600 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Message Textarea */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-medium text-zinc-300 mb-1.5"
                  >
                    제안 및 문의 내용 <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="협업 제안의 배경, 희망하시는 일정이나 주요 내용 등을 자유롭게 적어주세요."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0d1117] border border-[#30363d] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white text-sm placeholder:text-zinc-600 outline-none transition-all resize-y"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 hover:from-blue-500 hover:to-indigo-500 text-white text-sm font-bold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {loading ? (
                    <span>전송 중...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
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
