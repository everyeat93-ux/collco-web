"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Heart } from "lucide-react";

const CARDS = [
  { src: "/collection/card-soccer-auto.png", alt: "콜코 컬렉션 축구 사인 카드", label: "Football Auto" },
  { src: "/collection/card-baseball-auto.png", alt: "콜코 컬렉션 야구 사인 카드", label: "Baseball Auto" },
  { src: "/collection/card-pokemon.png", alt: "콜코 컬렉션 포켓몬 카드", label: "Pokémon TCG" },
];

const NOTES = [
  {
    no: "01",
    title: "좋아하는 것만 골라요",
    desc: "팔기 위해 고르기보다, 제가 먼저 설렜던 카드와 피규어를 소개해요.",
  },
  {
    no: "02",
    title: "한 장, 한 개씩",
    desc: "많이 쌓아두기보다 하나하나 직접 보고 마음에 드는 것만 선반에 올려요.",
  },
  {
    no: "03",
    title: "같은 취미를 가진 분들과",
    desc: "이 즐거움을 아는 분들과 나누고 싶어서 작은 스토어를 열었어요.",
  },
];

export function StoreSection() {
  return (
    <section id="store" className="py-8 sm:py-16 md:py-24 px-3 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      {/* Section Header */}
      <div className="mb-5 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white border border-[#E8E5DC] text-[10px] sm:text-[11px] font-mono text-[#737067] uppercase tracking-wider mb-2.5 sm:mb-4">
          <Heart className="w-3 h-3 text-[#0B0B0C]" />
          <span>03 / COLLECTOR&apos;S SHELF</span>
        </div>

        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0B0B0C] tracking-tight leading-tight">
          좋아해서 모으고,
          <br />
          <span className="text-[#737067]">좋아해서 나눕니다.</span>
        </h2>
        <p className="mt-2 sm:mt-3 text-xs sm:text-base text-[#484B52] max-w-2xl leading-[1.75] font-normal break-keep-all">
          콜코는 앱을 만드는 스튜디오이지만, 일이 끝나면 피규어 진열장 앞에서 시간 가는 줄 모르는 수집가이기도 해요.
          카드 한 장을 슬리브에 넣을 때의 설렘, 마음에 드는 피규어를 선반에 올려둘 때의 뿌듯함. 그 마음 그대로 콜코의 작은 선반을 소개합니다.
        </p>
      </div>

      {/* Photo Bento: Collector's Shelf */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3 sm:gap-4 mb-6 sm:mb-12">
        {/* Cabinet (tall) */}
        <figure className="relative md:col-span-2 md:row-span-2 aspect-[537/734] md:aspect-auto md:min-h-[520px] rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden border border-[#E8E5DC] bg-[#FAF9F5]">
          <Image
            src="/collection/figure-cabinet.jpg"
            alt="콜코 스튜디오 피규어 진열장 컬렉션"
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover"
          />
          <figcaption className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] sm:text-[11px] font-mono font-bold text-[#0B0B0C] uppercase tracking-wider">
            The Cabinet · 하나씩 채워온 진열장
          </figcaption>
        </figure>

        {/* Busts */}
        <figure className="relative md:col-span-3 aspect-[948/724] md:aspect-auto md:min-h-[300px] rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden border border-[#E8E5DC] bg-[#FAF9F5]">
          <Image
            src="/collection/figure-busts.jpg"
            alt="콜코 스튜디오 귀멸의 칼날 피규어 컬렉션"
            fill
            sizes="(min-width: 768px) 60vw, 100vw"
            className="object-cover"
          />
          <figcaption className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] sm:text-[11px] font-mono font-bold text-[#0B0B0C] uppercase tracking-wider">
            Desk Corner · 작업실 한켠
          </figcaption>
        </figure>

        {/* Cards */}
        <div className="md:col-span-3 rounded-[1.5rem] sm:rounded-[2rem] border border-[#E8E5DC] bg-[#FAF9F5] p-4 sm:p-6 flex flex-col justify-between gap-4">
          <div>
            <div className="text-[10px] sm:text-[11px] font-mono font-bold text-[#737067] uppercase tracking-wider mb-1">
              Card Binder
            </div>
            <p className="text-xs sm:text-sm text-[#484B52] leading-[1.75] break-keep-all">
              좋아하는 선수의 사인 카드부터 어릴 적 추억의 포켓몬 카드까지. 한 장 한 장에 저마다의 이야기가 담겨 있어요.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-2.5 sm:gap-4">
            {CARDS.map((card) => (
              <figure key={card.src} className="flex flex-col items-center gap-1.5">
                <div className="relative w-full max-w-[110px] aspect-square rounded-xl overflow-hidden bg-white border border-[#E8E5DC]">
                  <Image src={card.src} alt={card.alt} fill sizes="110px" className="object-contain" />
                </div>
                <figcaption className="text-[10px] font-mono text-[#737067] uppercase tracking-wider text-center">
                  {card.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>

      {/* Story + Store Link */}
      <div className="rounded-[1.5rem] sm:rounded-[2rem] p-4 sm:p-10 lg:p-12 bg-white border border-[#E8E5DC] shadow-swiss-sm">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-10">
          <div className="max-w-2xl">
            <h3 className="text-xl sm:text-3xl font-black text-[#0B0B0C] tracking-tight leading-snug mb-2 sm:mb-3">
              콜코 스토어는 작은 수집가의 선반이에요
            </h3>
            <p className="text-xs sm:text-sm text-[#484B52] leading-[1.75] font-normal break-keep-all mb-5 sm:mb-6">
              거창한 쇼핑몰은 아니에요. 카드와 피규어를 정말 좋아하는 사람이, 좋아하는 것들을 하나씩 골라 같은 취미를 가진 분들께 소개하는 곳입니다.
            </p>

            <ol className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {NOTES.map((note) => (
                <li key={note.no} className="border-t border-[#E8E5DC] pt-3">
                  <div className="text-[10px] font-mono font-bold text-[#AFA99E] mb-1">{note.no}</div>
                  <div className="text-xs sm:text-sm font-bold text-[#0B0B0C] mb-1">{note.title}</div>
                  <p className="text-[11px] sm:text-xs text-[#737067] leading-[1.7] break-keep-all">{note.desc}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* Store Mascot Card */}
          <div className="shrink-0 w-full lg:w-64 flex flex-row lg:flex-col items-center justify-between lg:justify-center p-3.5 sm:p-6 rounded-xl sm:rounded-2xl bg-[#FAF9F5] border border-[#E8E5DC] text-left lg:text-center gap-3">
            <div className="flex items-center lg:flex-col gap-3">
              <div className="relative w-14 h-14 sm:w-24 sm:h-24 shrink-0">
                <Image src="/logo-store-dino.png" alt="콜코 스토어 마스코트" fill sizes="96px" className="object-contain" />
              </div>
              <div>
                <div className="text-xs font-mono font-bold text-[#0B0B0C] uppercase tracking-wider mb-0.5 sm:mb-1">
                  COLLCO STORE
                </div>
                <p className="text-[10px] sm:text-[11px] font-mono text-[#737067]">선반 구경하러 가기</p>
              </div>
            </div>
            <a
              href="https://smartstore.naver.com/collco"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 py-2 px-3 sm:py-2.5 sm:px-4 rounded-full bg-[#0B0B0C] hover:bg-[#252528] text-white font-mono font-bold text-xs shadow-swiss-xs transition-all shrink-0"
            >
              <span>스마트스토어</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
