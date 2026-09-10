import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "COLLCO (콜코) | 1인 프로덕트 스튜디오 & 컬렉션 허브",
  description:
    "Everyday Problems, Solved with Digital Products & Collections. 일상의 니치한 문제를 찾아 디지털 프로덕트(ditta, 장날가자, 랩타일로그 등)와 엄선된 정품 피규어 & TCG 컬렉션으로 해결합니다.",
  keywords: [
    "COLLCO",
    "콜코",
    "1인 개발자",
    "인디 해커",
    "프로덕트 스튜디오",
    "포트폴리오",
    "ditta",
    "딛다",
    "장날가자",
    "랩타일로그",
    "FM 선수 데이터 분석기",
    "1분 퀴즈",
    "피규어 스토어",
    "포켓몬 카드",
  ],
  authors: [{ name: "COLLCO Solo Product Builder" }],
  openGraph: {
    title: "COLLCO (콜코) | Everyday Problems, Solved with Digital Products & Collections",
    description:
      "일상의 니치한 문제를 해결하는 5가지 디지털 솔루션과 엄선된 정품 컬렉션 굿즈를 만나보세요.",
    siteName: "COLLCO Official Studio",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "COLLCO (콜코) | 1인 프로덕트 스튜디오",
    description: "Everyday Problems, Solved with Digital Products & Collections.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-[#0d1117] text-[#f0f6fc] antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
