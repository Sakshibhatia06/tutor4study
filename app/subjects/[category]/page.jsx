import Link from "next/link";
import { subjectsData } from "@/app/subjects/data";
import { use } from "react";

export default function SubCategoryPage({ params }) {
  const { category, subcategory } = use(params);

  const subData = subjectsData[category]?.[subcategory];

  if (!subData) return <h1>Not Found</h1>;

  return (
    <div className="container">
      <h1>{subData.title}</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {subData.topics.map((topic) => (
          <div className="card" key={topic.slug}>
            <h3 className="text-xl font-bold">{topic.title}</h3>
            <p>{topic.desc}</p>
            <Link
              href={`/subjects/${category}/${subcategory}/${topic.slug}`}
              className="text-blue-600 underline"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
