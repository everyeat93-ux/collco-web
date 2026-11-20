export interface ProductMetric {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  subName?: string;
  tagline: string;
  shortDescription?: string;
  featuredDescription?: string;
  featuredCtaLabel?: string;
  category: string;
  tags: string[];
  status: string;
  statusBadgeVariant: "success" | "info" | "warning" | "purple";
  releaseState?: "live" | "testing";
  summary: string;
  targetUser?: string;
  detailSlug?: string;
  previewImage?: string;
  previewImageAlt?: string;
  ogImage?: string;
  screenshots?: Array<{
    src: string;
    alt: string;
    caption: string;
  }>;
  primaryCtaLabel?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  backgroundNotes?: string[];
  craftLabAnchor?: string;
  craftLabLabel?: string;
  blogUrl?: string;
  blogLabel?: string;
  contentNotice?: string;
  caseStudyNote?: string;
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
  appIcon?: string;
  accentColor: string;
  gradient: string;
  storeUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  domainLabel?: string;
  actionLabel?: string;
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
  example?: string;
  tags: string[];
  icon: string;
}
