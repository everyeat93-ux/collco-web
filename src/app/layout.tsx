import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://collco-web.onrender.com"),
  alternates: {
    canonical: "https://collco-web.onrender.com",
  },
  title: "콜코 (COLLCO) 공식 홈페이지 | 1인 프로덕트 스튜디오 & 컬렉션 허브",
  description:
    "콜코(COLLCO) 공식 사이트입니다. 일상의 니치한 문제를 해결하는 독자적 디지털 솔루션(ditta, 장날가자, 랩타일로그 등) 개발과 100% 라이선스 정품 피규어 & TCG 컬렉션 스토어를 함께 운영하는 1인 프로덕트 스튜디오입니다.",
  keywords: [
    "콜코",
    "COLLCO",
    "collco",
    "콜코 공식",
    "콜코 스튜디오",
    "콜코 스토어",
    "콜코 홈페이지",
    "1인 개발자",
    "1인 프로덕트 스튜디오",
    "인디 해커",
    "포트폴리오",
    "ditta",
    "딛다",
    "배드민턴 풋워크",
    "장날가자",
    "전국 5일장",
    "랩타일로그",
    "파충류 사육",
    "FM 선수 데이터 분석기",
    "1분 퀴즈",
    "피규어 스토어",
    "정품 피규어",
    "일본 정품 피규어",
    "포켓몬 카드",
    "TCG 카드",
    "키덜트 컬렉션",
  ],
  authors: [{ name: "COLLCO Solo Product Builder" }],
  openGraph: {
    title: "콜코 (COLLCO) 공식 홈페이지 | 1인 프로덕트 스튜디오 & 컬렉션 허브",
    description:
      "일상의 니치한 문제를 해결하는 5가지 디지털 솔루션과 엄선된 100% 라이선스 정품 피규어 & TCG 컬렉션을 선보이는 콜코(COLLCO) 공식 스튜디오입니다.",
    siteName: "콜코 COLLCO Official Studio",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/logo-collco.png",
        width: 512,
        height: 512,
        alt: "콜코 COLLCO 공식 로고",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "콜코 (COLLCO) 공식 홈페이지 | 1인 프로덕트 스튜디오",
    description:
      "일상의 니치한 문제를 해결하는 독자적 디지털 솔루션과 엄선된 정품 피규어 & TCG 컬렉션.",
    images: ["/logo-collco.png"],
  },
  icons: {
    icon: "/logo-collco.png",
    apple: "/logo-collco.png",
  },
  verification: {
    google: "SUcXjFcXls2e3D2CjDdibyJk5oOpZkowNtWj22QZkFs",
    other: {
      "naver-site-verification": "0998bc4accdc75918538764cc88e2f744029ab66",
      "msvalidate.01": "81BAE42A8920B110031D7CF60707170D",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "콜코",
  alternateName: ["COLLCO", "콜코 스튜디오", "COLLCO Studio", "콜코 공식 홈페이지"],
  description:
    "일상의 니치한 문제를 해결하는 독자적 디지털 솔루션과 100% 라이선스 정품 피규어 & TCG 컬렉션을 선보이는 1인 프로덕트 스튜디오",
  inLanguage: "ko-KR",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={`${inter.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F5F4EE] text-[#0B0B0C] antialiased selection:bg-[#0B0B0C] selection:text-white">
        {children}
      </body>
    </html>
  );
}
