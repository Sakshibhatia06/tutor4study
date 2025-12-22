import { subjectsData } from "@/app/subjects/data";
import SubCategoryPageClient from "./client";

export async function generateMetadata({ params }) {
  // 🔥 Next.js 15 fix
  const { category, subcategory } = await params;

  const subData =
    subjectsData?.[category]?.subcategories?.[subcategory];

  if (!subData) {
    return {
      title: "Page Not Found | Tutor4Study",
      description: "This page does not exist.",
    };
  }

  return {
    title: subData.metaTitle || `${subData.title} Topics | Tutor4Study`,
    description:
      subData.metaDesc ||
      `Explore all ${subData.title} topics with expert tutors at Tutor4Study.`,
  };
}

export default async function Page({ params }) {
  const resolvedParams = await params;
  return <SubCategoryPageClient params={resolvedParams} />;
}

