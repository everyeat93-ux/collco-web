import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getProductCounts } from "@/data/products";
import { SITE_URL, SOCIAL_LINKS } from "@/data/siteConfig";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const counts = getProductCounts();

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "콜코 (COLLCO) 공식 홈페이지 | 1인 프로덕트 스튜디오",
    template: "%s | 콜코 (COLLCO)",
  },
  description: `콜코(COLLCO) 공식 사이트입니다. 일상의 구체적인 문제를 해결하는 ${counts.total}가지 앱과 웹(장날가자, 딛다, 황금모피, 두둥, 랩티로그, 데이터라이터 등)을 직접 기획·개발·운영하는 1인 프로덕트 스튜디오입니다.`,
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
    "소규모 브랜드 웹사이트 제작",
    "두둥",
    "ditta",
    "딛다",
    "배드민턴 풋워크",
    "장날가자",
    "전국 5일장",
    "랩티로그",
    "ReptiLog",
    "파충류 사육일지",
    "황금모피",
    "goldfur",
    "하늘이 vs 라우니",
    "FM 선수 데이터 분석기",
    "1분 퀴즈",
    "초간편 가계부",
    "사커 데이터 인사이트",
    "데이터라이터",
    "피규어 컬렉션",
    "TCG 카드",
  ],
  authors: [{ name: "COLLCO Solo Product Studio" }],
  openGraph: {
    title: "콜코 (COLLCO) 공식 홈페이지 | 1인 프로덕트 스튜디오",
    description: `일상의 작은 불편을 발견하고 해결하는 ${counts.total}가지 앱·웹 프로젝트와 소규모 브랜드 웹사이트 제작, 수집가의 선반을 운영하는 콜코(COLLCO)입니다.`,
    siteName: "콜코 COLLCO Studio",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/logo-collco-og.png",
        width: 512,
        height: 512,
        alt: "콜코 COLLCO 공식 로고",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "콜코 (COLLCO) 공식 홈페이지 | 1인 프로덕트 스튜디오",
    description: `일상의 작은 불편을 발견하고 해결하는 ${counts.total}가지 앱·웹 프로젝트와 소규모 브랜드 웹사이트 제작.`,
    images: ["/logo-collco-og.png"],
  },
  icons: {
    icon: "/logo-collco-square.png",
    apple: "/logo-collco-square.png",
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
  url: SITE_URL,
  alternateName: ["COLLCO", "콜코 스튜디오", "COLLCO Studio", "콜코 공식 홈페이지"],
  description: `일상의 작은 불편을 발견하고 해결하는 ${counts.total}가지 앱과 웹을 직접 기획·개발·운영하는 1인 프로덕트 스튜디오`,
  inLanguage: "ko-KR",
  sameAs: [
    SOCIAL_LINKS.instagram,
    SOCIAL_LINKS.threads,
    SOCIAL_LINKS.blog,
    SOCIAL_LINKS.smartStore,
  ],
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
      <body className="min-h-screen flex flex-col bg-white text-[#0B0B0C] antialiased selection:bg-[#FFE600] selection:text-black">
        {children}
      </body>
    </html>
  );
}
