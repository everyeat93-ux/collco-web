import { BuildingPillar, TechItem } from "@/types";

export const BUILDING_PILLARS: BuildingPillar[] = [
  {
    number: "01",
    title: "빠른 실행과 검증 (Rapid Execution)",
    enTitle: "Rapid Prototyping & Live Deployment",
    description:
      "완벽을 기다리기보다 가장 가치 있는 핵심 기능을 정의하고 빠르게 프로덕트로 빌드하여 실제 사용자 피드백을 통해 기민하게 진화시킵니다.",
    tags: ["MVP First", "Fast Iteration", "Agile DX"],
    icon: "Zap",
  },
  {
    number: "02",
    title: "선명한 니치 문제 해결 (Niche Problem Solving)",
    enTitle: "Targeting Unmet Micro Needs",
    description:
      "거대 플랫폼이 주목하지 않는 일상의 뾰족한 불편함(배드민턴 풋워크 훈련, 5일장 캘린더, 파충류 케어, FM 스카우팅 등)을 정확히 포착해 대체 불가능한 해결책을 제시합니다.",
    tags: ["Vertical Focus", "User Empathy", "Specialized Utility"],
    icon: "Target",
  },
  {
    number: "03",
    title: "엔드투엔드 오너십 (End-to-End Ownership)",
    enTitle: "Design, Code & Commercial Operations",
    description:
      "기획, UI/UX 디자인, 풀스택 개발, 앱스토어 배포뿐만 아니라 스마트스토어 이커머스 큐레이션 및 공급망 운영까지 전 과정을 한 사람이 유기적으로 책임집니다.",
    tags: ["Full-Stack", "UI/UX Craft", "E-commerce Ops"],
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
