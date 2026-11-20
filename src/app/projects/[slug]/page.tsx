import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { ProjectDetailView } from "@/components/projects/ProjectDetailView";
import { getDetailProducts, getProductBySlug } from "@/data/products";
import { SITE_URL } from "@/data/siteConfig";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getDetailProducts().map((product) => ({
    slug: product.detailSlug!,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "프로젝트를 찾을 수 없습니다",
    };
  }

  const pageUrl = `${SITE_URL}/projects/${slug}`;
  const ogImage = product.ogImage || product.previewImage || product.appIcon || "/logo-collco-og.png";
  const title = product.subName ? `${product.name} (${product.subName})` : product.name;
  const description = product.shortDescription
    ? `${product.shortDescription}. ${product.summary}`
    : product.summary;

  return {
    title,
    description,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${title} | 콜코 (COLLCO)`,
      description,
      url: pageUrl,
      type: "article",
      images: [
        {
          url: ogImage,
          alt: product.previewImageAlt || `${product.name} 대표 이미지`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | 콜코 (COLLCO)`,
      description,
      images: [ogImage],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div id="top" className="flex flex-col min-h-screen bg-white text-[#0B0B0C]">
      <Navbar />
      <main className="flex-1 w-full">
        <ProjectDetailView product={product} />
      </main>
      <Footer />
    </div>
  );
}
