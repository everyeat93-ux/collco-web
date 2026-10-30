"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Activity, Play, RotateCcw, Zap, Target, Gauge, Sparkles, ArrowRight } from "lucide-react";

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
    // Perfect zone is between 75 and 90
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

  const roleScores = {
    playmaker: { pass: 95, vision: 92, stamina: 84, pace: 72, finish: 70, overall: 91 },
    winger: { pass: 80, vision: 78, stamina: 88, pace: 96, finish: 82, overall: 89 },
    targetman: { pass: 68, vision: 65, stamina: 82, pace: 75, finish: 94, overall: 88 },
  };

  const currentScores = roleScores[selectedRole];

  return (
    <section id="craft" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      {/* Section Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E8E5DC] text-[11px] font-mono text-[#737067] uppercase tracking-wider mb-4">
          <Activity className="w-3.5 h-3.5 text-[#0B0B0C]" />
          <span>02 / CRAFT LAB & INTERACTIVE ENGINES</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B0B0C] tracking-tight leading-tight">
              손끝에서 반응하는,
              <br />
              <span className="text-[#737067]">실시간 인터랙션 & 물리 엔진 랩</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#484B52] max-w-2xl leading-[1.8] font-normal break-keep-all">
              라우노(Rauno)의 인터랙티브 플레이그라운드 철학을 따라, 실제 COLLCO의 모바일 앱과 게임에 탑재된 핵심 물리 알고리즘을 브라우저에서 직접 테스트해 보실 수 있습니다.
            </p>
          </div>

          <div className="text-xs font-mono text-[#737067] px-3 py-1 rounded-full bg-white border border-[#E8E5DC] shrink-0">
            PROTOTYPE TO PRODUCTION
          </div>
        </div>
      </div>

      {/* 3 Interactive Craft Widgets */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Craft 1: 원터치 셔틀콕 물리 엔진 (하늘이 vs 라우니) */}
        <div className="bg-white border border-[#E8E5DC] rounded-[1.5rem] sm:rounded-[2rem] p-5 sm:p-7 shadow-rauno-card flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-mono font-bold text-[#737067] uppercase tracking-wider">
                [EXPERIMENT 01] · GAME PHYSICS
              </span>
              <span className="text-xs font-mono font-bold text-[#0B0B0C]">Rally: {rallyScore}</span>
            </div>

            <div className="flex items-center gap-2.5 mb-1">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-[#E8E5DC] shrink-0 shadow-xs">
                <Image
                  src="/apps/icon-haneul-rauni.jpg"
                  alt="하늘이와 라우니"
                  fill
                  sizes="32px"
                  className="object-cover"
                />
              </div>
              <h3 className="text-base sm:text-lg font-black text-[#0B0B0C] tracking-tight">
                하늘이 vs 라우니 랠리 타이밍
              </h3>
            </div>
            <p className="text-xs text-[#484B52] mt-1 leading-relaxed">
              초록색 히트 존(Zone)에 셔틀콕이 들어왔을 때 스윙 버튼을 눌러보세요.
            </p>

            {/* Timing Rail Track */}
            <div className="my-6 p-4 rounded-xl bg-[#F8F7F4] border border-[#E8E5DC] relative">
              <div className="h-6 w-full bg-[#E8E5DC] rounded-full overflow-hidden relative">
                {/* Hit Zone Highlight */}
                <div
                  className="absolute top-0 bottom-0 bg-emerald-400/40 border-x border-emerald-600"
                  style={{ left: "75%", width: "20%" }}
                  title="Sweet Spot (Hit Zone)"
                />
                {/* Shuttlecock Dot */}
                <div
                  className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#0B0B0C] border-2 border-[#FFE600] shadow-sm transition-all"
                  style={{ left: `${Math.min(shuttlePosition, 95)}%` }}
                />
              </div>

              <div className="flex justify-between text-[10px] font-mono text-[#737067] mt-2">
                <span>서브 준비</span>
                <span className="text-emerald-700 font-bold">타격 포인트 (Hit!)</span>
                <span>아웃</span>
              </div>
            </div>

            {/* Feedback Message */}
            <div className="h-6 text-center text-xs font-mono font-bold text-[#0B0B0C]">
              {hitFeedback || "버튼을 눌러 랠리를 시작하세요"}
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-[#F2EFE8]">
            <button
              onClick={handleSwing}
              className="w-full py-3 rounded-full bg-[#0B0B0C] hover:bg-[#252528] active:scale-95 text-white font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-rauno-xs"
            >
              🏸 스윙 터치 (SWING)
            </button>
          </div>
        </div>

        {/* Craft 2: ditta 6방향 반응형 풋워크 엔진 */}
        <div className="bg-white border border-[#E8E5DC] rounded-[1.5rem] sm:rounded-[2rem] p-5 sm:p-7 shadow-rauno-card flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-mono font-bold text-[#737067] uppercase tracking-wider">
                [EXPERIMENT 02] · REACTIVE ALGORITHM
              </span>
              <span className="text-xs font-mono font-bold text-emerald-600">Delay: {delaySpeed}s</span>
            </div>

            <div className="flex items-center gap-2.5 mb-1">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-[#E8E5DC] shrink-0 shadow-xs">
                <Image
                  src="/apps/icon-ditta.png"
                  alt="ditta"
                  fill
                  sizes="32px"
                  className="object-cover"
                />
              </div>
              <h3 className="text-base sm:text-lg font-black text-[#0B0B0C] tracking-tight">
                ditta 6구역 랜덤 시각 큐레이터
              </h3>
            </div>
            <p className="text-xs text-[#484B52] mt-1 leading-relaxed">
              무작위로 활성화되는 코트 6방향에 즉각 스텝으로 반응하는 트레이닝 엔진입니다.
            </p>

            {/* 6-Zone Badminton Court Grid */}
            <div className="my-6 grid grid-cols-2 gap-2">
              {zoneNames.map((name, idx) => (
                <div
                  key={idx}
                  className={`p-3 rounded-xl text-center text-xs font-mono font-bold transition-all duration-150 border ${
                    activeZone === idx
                      ? "bg-[#FFE600] border-black text-black scale-105 shadow-sm"
                      : "bg-[#F8F7F4] border-[#E8E5DC] text-[#737067]"
                  }`}
                >
                  <div className="text-[10px] opacity-60">ZONE 0{idx + 1}</div>
                  <div className="text-[11px] truncate mt-0.5">{name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Speed Adjuster */}
          <div className="pt-4 border-t border-[#F2EFE8] flex items-center justify-between gap-3">
            <button
              onClick={() => setIsTraining(!isTraining)}
              className="px-4 py-2 rounded-full bg-[#FAF9F5] border border-[#E8E5DC] hover:border-[#0B0B0C] text-xs font-mono font-bold text-[#0B0B0C] transition-all"
            >
              {isTraining ? "일시 정지" : "재개"}
            </button>

            <div className="flex items-center gap-1.5">
              {[0.8, 1.2, 1.8].map((s) => (
                <button
                  key={s}
                  onClick={() => setDelaySpeed(s)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all ${
                    delaySpeed === s
                      ? "bg-[#0B0B0C] text-white font-bold"
                      : "bg-[#F8F7F4] text-[#737067] hover:text-[#0B0B0C]"
                  }`}
                >
                  {s}s
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Craft 3: FM 선수 분석기 가중치 엔진 */}
        <div className="bg-white border border-[#E8E5DC] rounded-[1.5rem] sm:rounded-[2rem] p-5 sm:p-7 shadow-rauno-card flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-mono font-bold text-[#737067] uppercase tracking-wider">
                [EXPERIMENT 03] · DATA WEIGHTING
              </span>
              <span className="text-xs font-mono font-bold text-[#0B0B0C]">
                Score: {currentScores.overall}점
              </span>
            </div>

            <h3 className="text-lg font-black text-[#0B0B0C] tracking-tight">
              FM 선수 분석기 롤별 가중치 연산
            </h3>
            <p className="text-xs text-[#484B52] mt-1 leading-relaxed">
              전술 역할에 따라 요구되는 능력치 가중치와 적합도 스코어를 실시간 계산합니다.
            </p>

            {/* Role Select Pills */}
            <div className="flex items-center gap-1.5 my-4">
              {[
                { key: "playmaker", label: "딥라잉 플메" },
                { key: "winger", label: "인버티드 윙" },
                { key: "targetman", label: "타깃 포워드" },
              ].map((r) => (
                <button
                  key={r.key}
                  onClick={() => setSelectedRole(r.key as any)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all ${
                    selectedRole === r.key
                      ? "bg-[#0B0B0C] text-white font-bold"
                      : "bg-[#F8F7F4] border border-[#E8E5DC] text-[#737067]"
                  }`}
                >
                  {r.label}
                </button>
              ))}
            </div>

            {/* Metric Bars */}
            <div className="space-y-2 py-2 font-mono text-xs">
              <div className="flex items-center justify-between text-[#484B52]">
                <span>패스 & 시야:</span>
                <span className="font-bold text-[#0B0B0C]">{currentScores.pass} / 100</span>
              </div>
              <div className="w-full h-1.5 bg-[#F2EFE8] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#0B0B0C] transition-all duration-300"
                  style={{ width: `${currentScores.pass}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-[#484B52] pt-1">
                <span>주력 & 가속:</span>
                <span className="font-bold text-[#0B0B0C]">{currentScores.pace} / 100</span>
              </div>
              <div className="w-full h-1.5 bg-[#F2EFE8] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#0B0B0C] transition-all duration-300"
                  style={{ width: `${currentScores.pace}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-[#484B52] pt-1">
                <span>골 결정력:</span>
                <span className="font-bold text-[#0B0B0C]">{currentScores.finish} / 100</span>
              </div>
              <div className="w-full h-1.5 bg-[#F2EFE8] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#0B0B0C] transition-all duration-300"
                  style={{ width: `${currentScores.finish}%` }}
                />
              </div>
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-[#F2EFE8] flex items-center justify-between text-xs font-mono text-[#737067]">
            <span>Algorithm: Polynomial Weighted</span>
            <span className="text-[#0B0B0C] font-bold">100% Client-Side</span>
          </div>
        </div>
      </div>
    </section>
  );
}
