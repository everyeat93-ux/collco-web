export interface ProductMetric {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  subName?: string;
  tagline: string;
  category: string;
  tags: string[];
  status: string;
  statusBadgeVariant: "success" | "info" | "warning" | "purple";
  summary: string;
  problem: {
    title: string;
    description: string;
    points: string[];
  };
  solution: {
    title: string;
    description: string;
    features: string[];
  };
  impact: {
    title: string;
    description: string;
    highlights: string[];
  };
  techStack: string[];
  metrics: ProductMetric[];
  icon: string;
  accentColor: string;
  gradient: string;
  storeUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
}

export interface StoreItem {
  id: string;
  title: string;
  subtitle: string;
  category: "Figure" | "TCG Card" | "Mystery Box" | "Goods";
  tag: string;
  badge: "In Stock" | "Rare" | "Limited Event" | "Pre-Order";
  badgeVariant: "emerald" | "amber" | "indigo" | "rose";
  price: string;
  description: string;
  condition: string;
  authenticity: string;
  imageUrl: string;
  smartStoreUrl: string;
}

export interface TechItem {
  name: string;
  category: "Frontend & Core" | "Mobile & Apps" | "Backend & Data" | "Ops & E-commerce";
  highlight?: boolean;
}

export interface BuildingPillar {
  number: string;
  title: string;
  enTitle: string;
  description: string;
  tags: string[];
  icon: string;
}
