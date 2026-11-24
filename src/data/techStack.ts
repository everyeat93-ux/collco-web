import { BuildingPillar, TechItem } from "@/types";

export const BUILDING_PILLARS: BuildingPillar[] = [
  {
    number: "01",
    title: "작게 만들고 바로 써봅니다",
    enTitle: "Fast Iteration",
    description:
      "거창한 계획보다 꼭 필요한 기능 하나를 먼저 만들어 꺼내놓습니다. 직접 써보고, 사용자 이야기를 들으며 조금씩 고쳐 나갑니다.",
    example: "초간편 가계부는 금융 연동 없이 3초 입력 흐름부터 만들어 비공개 테스트를 거쳐 정식 출시했습니다.",
    tags: [],
    icon: "Zap",
  },
  {
    number: "02",
    title: "직접 겪은 불편에서 시작합니다",
    enTitle: "Real Problems",
    description:
      "큰 서비스가 신경 쓰지 않는 생활 속 작은 불편에 집중합니다. 사용자가 많지 않아도 그 사람에게 꼭 필요한 도구라면 만들 이유가 충분합니다.",
    example: "장날가자는 ‘오늘 실제로 열리는 전통시장을 내 주변에서 확인하는 문제’ 하나에 집중했습니다.",
    tags: [],
    icon: "Target",
  },
  {
    number: "03",
    title: "처음부터 끝까지 직접 챙깁니다",
    enTitle: "Direct Ownership",
    description:
      "아이디어 정리부터 화면 구성, 개발, 스토어 출시, 출시 후 수정까지 한 사람이 끝까지 맡습니다. 중간 전달 과정이 없어 빠르고 일관됩니다.",
    example: "황금모피는 브랜드 이야기 정리부터 반응형 웹 구현, 도메인 운영까지 직접 챙겼습니다.",
    tags: [],
    icon: "Layers",
  },
];

export const TECH_ITEMS: TechItem[] = [
  // Frontend & Core
  { name: "Next.js 14+ (App Router)", category: "Frontend & Core", highlight: true },
  { name: "React 19", category: "Frontend & Core", highlight: true },
  { name: "TypeScript", category: "Frontend & Core", highlight: true },
  { name: "Tailwind CSS", category: "Frontend & Core", highlight: true },
  { name: "Framer Motion", category: "Frontend & Core" },
  { name: "Zustand", category: "Frontend & Core" },

  // Mobile & Apps
  { name: "React Native / Expo", category: "Mobile & Apps", highlight: true },
  { name: "Flutter", category: "Mobile & Apps" },
  { name: "Google Play Console", category: "Mobile & Apps", highlight: true },
  { name: "Android Native Bridge", category: "Mobile & Apps" },
  { name: "PWA (Progressive Web App)", category: "Mobile & Apps" },

  // Backend & Data
  { name: "Supabase", category: "Backend & Data", highlight: true },
  { name: "Firebase", category: "Backend & Data" },
  { name: "Node.js / Express", category: "Backend & Data" },
  { name: "REST API / Webhooks", category: "Backend & Data" },
  { name: "Chart.js & Recharts", category: "Backend & Data", highlight: true },
  { name: "Data Scraping & Analysis", category: "Backend & Data" },

  // Ops & E-commerce
  { name: "Naver SmartStore", category: "Ops & E-commerce", highlight: true },
  { name: "Vercel / Cloudflare", category: "Ops & E-commerce", highlight: true },
  { name: "Global Supply Chain Sourcing", category: "Ops & E-commerce" },
  { name: "SEO & OpenGraph", category: "Ops & E-commerce" },
  { name: "Product Analytics", category: "Ops & E-commerce" },
];
