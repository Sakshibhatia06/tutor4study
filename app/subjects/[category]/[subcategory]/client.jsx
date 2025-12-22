"use client";

import Link from "next/link";
import Image from "next/image";
import { subjectsData } from "@/app/subjects/data";

export default function SubCategoryPageClient({ params }) {
  const { category, subcategory } = params;

  const subData =
    subjectsData?.[category]?.subcategories?.[subcategory];

  if (!subData) {
    return <h1 className="text-center py-10">Not Found</h1>;
  }

  return (
    <div className="mx-auto max-w-7xl px-6 pt-5 pb-20">
      {/* Heading */}
      <div className="mb-10 mx-auto max-w-4xl text-center">
        <h3 className="text-midnightblue text-3xl lg:text-4xl font-semibold">
          {subData.title} <span className="text-Blueviolet">Topics</span>
        </h3>
        <p className="mt-4 text-gray-600">
          Explore all available topics under{" "}
          <strong>{subData.title}</strong>.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
        {subData.topics.map((topic) => (
          <div key={topic.slug} className="py-4">
            <div className="bg-white p-6 shadow-md rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col justify-between">

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 bg-semiblueviolet p-6 rounded-2xl flex-grow">
                <div className="lg:col-span-2">
                  <h4 className="text-2xl font-bold text-black">
                    {topic.title}
                  </h4>
                  <p className="text-sm text-gray-700 mt-4">
                    {topic.desc}
                  </p>
                </div>

                {/* Image */}
                <div className="relative w-full h-40 rounded-2xl overflow-hidden">
                  <Image
                    src={topic.image}
                    alt={topic.title}
                    fill
                    className="object-cover rounded-2xl"
                    unoptimized
                  />
                </div>
              </div>

              <div className="mt-6">
                <Link
                  href={`/subjects/${category}/${subcategory}/${topic.slug}`}
                >
                 <button className="bg-blue-600 hover:bg-semiblueviolet border border-lightgray text-Blueviolet font-semibold px-6 py-2 rounded-xl shadow-md transition">
                    Read More
                  </button>
                </Link>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
