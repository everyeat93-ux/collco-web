"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

export function CraftSection() {
  // Demo 1: Shuttlecock Rally Timing (하늘이 vs 라우니)
  const [shuttlePosition, setShuttlePosition] = useState(0);
  const [hitFeedback, setHitFeedback] = useState<string | null>(null);
  const [rallyScore, setRallyScore] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setShuttlePosition((prev) => (prev >= 100 ? 0 : prev + 2.5));
    }, 40);
    return () => clearInterval(interval);
  }, []);

  const handleSwing = () => {
    if (shuttlePosition >= 78 && shuttlePosition <= 92) {
      setHitFeedback("🔥 호쾌한 스매시! (PERFECT)");
      setRallyScore((s) => s + 1);
    } else if (shuttlePosition >= 65 && shuttlePosition < 78) {
      setHitFeedback("⚡ 하이클리어 딥 샷! (GOOD)");
      setRallyScore((s) => s + 1);
    } else if (shuttlePosition > 92 && shuttlePosition <= 98) {
      setHitFeedback("✨ 절묘한 헤어핀 드롭! (GREAT)");
      setRallyScore((s) => s + 1);
    } else {
      setHitFeedback("❌ 타이밍 미스 (MISS)");
      setRallyScore(0);
    }
    setShuttlePosition(10);
  };

  // Demo 2: ditta 6-Court Step Simulator
  const [activeZone, setActiveZone] = useState<number>(1);
  const [delaySpeed, setDelaySpeed] = useState<number>(1.2);
  const [isTraining, setIsTraining] = useState<boolean>(true);

  useEffect(() => {
    if (!isTraining) return;
    const interval = setInterval(() => {
      const nextZone = Math.floor(Math.random() * 6);
      setActiveZone(nextZone);
    }, delaySpeed * 1000);
    return () => clearInterval(interval);
  }, [delaySpeed, isTraining]);

  const zoneNames = [
    "전방 좌측 (헤어핀)",
    "전방 우측 (드롭)",
    "중앙 좌측 (드라이브)",
    "중앙 우측 (푸시)",
    "후방 좌측 (백핸드)",
    "후방 우측 (스매시)",
  ];

  // Demo 3: FM Radar Preset Engine
  const [selectedRole, setSelectedRole] = useState<"winger" | "playmaker" | "targetman">("playmaker");
  const [mobileTab, setMobileTab] = useState<number>(0);

  const roleScores = {
    playmaker: { pass: 95, vision: 92, stamina: 84, pace: 72, finish: 70, overall: 91 },
    winger: { pass: 80, vision: 78, stamina: 88, pace: 96, finish: 82, overall: 89 },
    targetman: { pass: 68, vision: 65, stamina: 82, pace: 75, finish: 94, overall: 88 },
  };

  const currentScores = roleScores[selectedRole];

  return (
    <section
      id="craft"
      aria-labelledby="craft-heading"
      className="py-8 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative"
    >
      {/* Section Header */}
      <div className="mb-8 sm:mb-10 max-w-2xl">
        <p className="text-xs font-mono text-[#737067] mb-2">CRAFT LAB</p>
        <h1
          id="craft-heading"
          className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0B0B0C] tracking-tight leading-tight"
        >
          직접 눌러보며 써보는 작은 실험들
        </h1>
        <p className="mt-2.5 text-sm sm:text-base text-[#484B52] leading-[1.8] break-keep-all">
          콜코가 만든 앱의 핵심 기능을 여기서 바로 써보세요. 스윙 타이밍, 6방향 스텝 신호, 전술 역할별 능력치 계산을 설치 없이 체험할 수 있습니다.
        </p>
      </div>

      {/* Mobile Experiment Selector Tabs */}
      <div
        role="tablist"
        aria-label="체험 데모 선택"
        className="lg:hidden flex items-center gap-1 p-1 mb-4 rounded-full bg-[#F8F7F4] border border-[#E8E5DC]"
      >
        {[
          { label: "01 랠리 타이밍", id: 0 },
          { label: "02 딛다 6방향", id: 1 },
          { label: "03 FM 가중치", id: 2 },
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={mobileTab === tab.id}
            onClick={() => setMobileTab(tab.id)}
            className={`flex-1 py-2.5 min-h-[40px] rounded-full text-xs font-medium transition-all text-center ${
              mobileTab === tab.id
                ? "bg-[#0B0B0C] text-white font-bold shadow-xs"
                : "text-[#484B52] hover:text-[#0B0B0C]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 3 Interactive Craft Widgets */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Craft 1: 하늘이 vs 라우니 랠리 타이밍 */}
        <div
          id="craft-rally"
          className={`${
            mobileTab === 0 ? "flex" : "hidden lg:flex"
          } bg-white border border-[#E8E5DC] rounded-[1.5rem] sm:rounded-[2rem] p-5 sm:p-7 shadow-rauno-card flex-col justify-between`}
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-mono font-bold text-[#737067]">DEMO 01</span>
              <span className="text-xs font-mono font-bold text-[#0B0B0C]">연속 랠리: {rallyScore}</span>
            </div>

            <div className="flex items-center gap-2.5 mb-1.5">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-[#E8E5DC] shrink-0 shadow-xs">
                <Image
                  src="/apps/icon-haneul-rauni.jpg"
                  alt="하늘이 vs 라우니 앱 아이콘"
                  fill
                  sizes="32px"
                  className="object-cover"
                />
              </div>
              <h3 className="text-base sm:text-lg font-black text-[#0B0B0C] tracking-tight">
                하늘이 vs 라우니 랠리 타이밍
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#484B52] mt-1 leading-relaxed break-keep-all">
              초록색 구간에 공이 들어왔을 때 아래 스윙 버튼을 눌러 타이밍을 맞춰보세요.
            </p>

            {/* Timing Rail Track */}
            <div className="my-5 p-4 rounded-xl bg-[#F8F7F4] border border-[#E8E5DC] relative">
              <div className="h-6 w-full bg-[#E8E5DC] rounded-full overflow-hidden relative">
                <div
                  className="absolute top-0 bottom-0 bg-emerald-400/40 border-x border-emerald-600"
                  style={{ left: "75%", width: "20%" }}
                  title="타격 구간"
                />
                <div
                  className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#0B0B0C] border-2 border-[#FFE600] shadow-sm transition-all"
                  style={{ left: `${Math.min(shuttlePosition, 95)}%` }}
                />
              </div>

              <div className="flex justify-between text-[11px] font-mono text-[#484B52] mt-2">
                <span>준비</span>
                <span className="text-emerald-700 font-bold">타격 구간</span>
                <span>아웃</span>
              </div>
            </div>

            <div className="min-h-[24px] text-center text-xs font-mono font-bold text-[#0B0B0C]">
              {hitFeedback || "버튼을 눌러 랠리를 시작하세요"}
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-[#F2EFE8] space-y-3">
            <button
              type="button"
              onClick={handleSwing}
              className="w-full py-3 min-h-[44px] rounded-full bg-[#0B0B0C] hover:bg-[#252528] active:scale-95 text-white font-bold text-xs sm:text-sm transition-all shadow-rauno-xs"
            >
              🏸 스윙 터치
            </button>

            <div className="flex items-center justify-between gap-2 text-xs">
              <span className="text-[11px] font-mono text-[#737067]">원터치 타이밍 판정</span>
              <a
                href="https://play.google.com/store/apps/details?id=com.collco.haneulrauni"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-bold text-[#0B0B0C] hover:underline underline-offset-4"
              >
                <span>관련 프로젝트 보기</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Craft 2: 딛다 6방향 풋워크 훈련 */}
        <div
          id="craft-ditta"
          className={`${
            mobileTab === 1 ? "flex" : "hidden lg:flex"
          } bg-white border border-[#E8E5DC] rounded-[1.5rem] sm:rounded-[2rem] p-5 sm:p-7 shadow-rauno-card flex-col justify-between`}
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-mono font-bold text-[#737067]">DEMO 02</span>
              <span className="text-xs font-mono font-bold text-emerald-700">간격: {delaySpeed}초</span>
            </div>

            <div className="flex items-center gap-2.5 mb-1.5">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-[#E8E5DC] shrink-0 shadow-xs">
                <Image
                  src="/apps/icon-ditta.png"
                  alt="딛다 앱 아이콘"
                  fill
                  sizes="32px"
                  className="object-cover"
                />
              </div>
              <h3 className="text-base sm:text-lg font-black text-[#0B0B0C] tracking-tight">
                딛다(ditta) 6방향 풋워크 훈련
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#484B52] mt-1 leading-relaxed break-keep-all">
              노란 불이 켜지는 코트 구역에 맞춰 스텝을 밟아보세요. 아래에서 속도를 조절할 수 있습니다.
            </p>

            {/* 6-Zone Badminton Court Grid */}
            <div className="my-5 grid grid-cols-2 gap-2">
              {zoneNames.map((name, idx) => (
                <div
                  key={idx}
                  className={`p-3 rounded-xl text-center text-xs font-mono font-bold transition-all duration-150 border ${
                    activeZone === idx
                      ? "bg-[#FFE600] border-black text-black scale-[1.03] shadow-sm"
                      : "bg-[#F8F7F4] border-[#E8E5DC] text-[#484B52]"
                  }`}
                >
                  <div className="text-[10px] opacity-70">ZONE 0{idx + 1}</div>
                  <div className="text-[11px] truncate mt-0.5">{name}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-[#F2EFE8] space-y-3">
            <div className="flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={() => setIsTraining(!isTraining)}
                className="px-4 py-2 min-h-[40px] rounded-full bg-[#FAF9F5] border border-[#E8E5DC] hover:border-[#0B0B0C] text-xs font-bold text-[#0B0B0C] transition-all"
              >
                {isTraining ? "일시 정지" : "다시 시작"}
              </button>

              <div className="flex items-center gap-1.5" role="group" aria-label="신호 간격 선택">
                {[0.8, 1.2, 1.8].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setDelaySpeed(s)}
                    className={`px-2.5 py-2 min-h-[38px] rounded-lg text-xs font-mono transition-all ${
                      delaySpeed === s
                        ? "bg-[#0B0B0C] text-white font-bold"
                        : "bg-[#F8F7F4] text-[#484B52] hover:text-[#0B0B0C]"
                    }`}
                  >
                    {s}s
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between gap-2 text-xs">
              <span className="text-[11px] font-mono text-[#737067]">6구역 랜덤 신호 알고리즘</span>
              <Link
                href="/projects/ditta"
                className="inline-flex items-center gap-1 font-bold text-[#0B0B0C] hover:underline underline-offset-4"
              >
                <span>관련 프로젝트 보기</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Craft 3: FM 역할별 가중치 계산 */}
        <div
          id="craft-fm"
          className={`${
            mobileTab === 2 ? "flex" : "hidden lg:flex"
          } bg-white border border-[#E8E5DC] rounded-[1.5rem] sm:rounded-[2rem] p-5 sm:p-7 shadow-rauno-card flex-col justify-between`}
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-mono font-bold text-[#737067]">DEMO 03</span>
              <span className="text-xs font-mono font-bold text-[#0B0B0C]">
                적합도: {currentScores.overall}점
              </span>
            </div>

            <h3 className="text-base sm:text-lg font-black text-[#0B0B0C] tracking-tight">
              FM 역할별 가중치 계산
            </h3>
            <p className="text-xs sm:text-sm text-[#484B52] mt-1 leading-relaxed break-keep-all">
              원하는 전술 역할을 눌러보세요. 역할마다 중요하게 보는 능력치 비중과 적합도 점수가 바로 바뀝니다.
            </p>

            {/* Role Select Pills */}
            <div className="flex flex-wrap items-center gap-1.5 my-4">
              {(
                [
                  { key: "playmaker", label: "딥라잉 플메" },
                  { key: "winger", label: "인버티드 윙" },
                  { key: "targetman", label: "타깃 포워드" },
                ] as const
              ).map((r) => (
                <button
                  key={r.key}
                  type="button"
                  onClick={() => setSelectedRole(r.key)}
                  className={`px-3 py-2 min-h-[38px] rounded-lg text-xs font-medium transition-all ${
                    selectedRole === r.key
                      ? "bg-[#0B0B0C] text-white font-bold"
                      : "bg-[#F8F7F4] border border-[#E8E5DC] text-[#484B52] hover:text-[#0B0B0C]"
                  }`}
                >
                  {r.label}
                </button>
              ))}
            </div>

            {/* Metric Bars */}
            <div className="space-y-2.5 py-2 font-mono text-xs">
              <div className="flex items-center justify-between text-[#484B52]">
                <span>패스 &amp; 시야</span>
                <span className="font-bold text-[#0B0B0C]">{currentScores.pass} / 100</span>
              </div>
              <div className="w-full h-2 bg-[#F2EFE8] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#0B0B0C] transition-all duration-300"
                  style={{ width: `${currentScores.pass}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-[#484B52] pt-1">
                <span>주력 &amp; 가속</span>
                <span className="font-bold text-[#0B0B0C]">{currentScores.pace} / 100</span>
              </div>
              <div className="w-full h-2 bg-[#F2EFE8] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#0B0B0C] transition-all duration-300"
                  style={{ width: `${currentScores.pace}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-[#484B52] pt-1">
                <span>골 결정력</span>
                <span className="font-bold text-[#0B0B0C]">{currentScores.finish} / 100</span>
              </div>
              <div className="w-full h-2 bg-[#F2EFE8] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#0B0B0C] transition-all duration-300"
                  style={{ width: `${currentScores.finish}%` }}
                />
              </div>
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-[#F2EFE8] flex items-center justify-between gap-2 text-xs">
            <span className="text-[11px] font-mono text-[#737067]">브라우저 가중치 연산</span>
            <a
              href="https://scout.soccerdatainsights.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-bold text-[#0B0B0C] hover:underline underline-offset-4"
            >
              <span>관련 프로젝트 보기</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
