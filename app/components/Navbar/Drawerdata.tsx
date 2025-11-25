"use client";

import React, { useState } from "react";
import Link from "next/link";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: "Home", href: "/", current: true },
  { name: "About", href: "/about-us", current: false },
  { name: "Subjects", href: "/subjects", current: false },
  { name: "Contact ", href: "/contact-us", current: false },
];

// ⭐ Subject categories + subcategories (same as desktop)
const subjectsMenu = [
  {
    category: "Academic Subjects (School Level)",
    categorySlug: "academic-subjects",
    sub: ["Mathematics", "Science", "Languages", "Social Studies", "Computer Technology"],
  },
  {
    category: "College / Advanced Level",
    categorySlug: "college-advanced",
    sub: ["Mathematics & Statistics", "Science & Engineering", "Commerce & Business"],
  },
  {
    category: "Professional / Skill Development Courses",
    categorySlug: "professional-courses",
    sub: ["Language & Communication", "Technology & Coding", "Exam Preparation", "Soft Skills"],
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Data = () => {
  const [subjectsOpen, setSubjectsOpen] = useState(false);

  return (
    <div className="rounded-full max-w-sm w-full mx-auto">
      <div className="flex py-1">
        <div className="sm:block max-h-[70vh] overflow-y-auto scrollbar-hide w-full"> {/* 👈 Scrollable menu */}
          <div className="space-y-1 px-5 pt-2 pb-3">
            {navigation.map((item) =>
              item.name !== "Subjects" ? (
                // Regular links (Home, About, Contact)
                <Link
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current ? "text-black hover:opacity-100" : "hover:text-black hover:opacity-100",
                    "py-1 text-lg font-normal opacity-75 block"
                  )}
                >
                  {item.name}
                </Link>
              ) : (
                // Subjects dropdown (click-to-toggle)
                <div key={item.name}>
                  <button
                    onClick={() => setSubjectsOpen(!subjectsOpen)}
                    className="w-full text-left py-1 text-lg font-normal opacity-75 hover:opacity-100"
                  >
                    {item.name} {subjectsOpen ? "▲" : "▼"}
                  </button>

                  {subjectsOpen && (
                    <div className="mt-2 pl-4 space-y-4">
                      {subjectsMenu.map((cat) => (
                        <div key={cat.category}>
                          <h3 className="font-semibold text-sm text-Blueviolet">{cat.category}</h3>
                          <ul className="mt-1 space-y-1">
                            {cat.sub.map((sub) => {
                              const subSlug = sub.toLowerCase().replace(/\s+/g, "-");
                              return (
                                <li key={sub}>
                                  <Link
                                    href={`/subjects/${cat.categorySlug}/${subSlug}`}
                                    className="text-gray-600 text-sm hover:text-Blueviolet"
                                  >
                                    {sub}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )
            )}

            {/* Buttons (sticky at bottom) */}
            <div className="mt-4 flex gap-4 sticky bottom-0 bg-white py-2"> {/* 👈 Sticks at the bottom */}
              <Link href="/contact-us" className="flex-1">
                <button className="bg-semiblueviolet w-full hover:bg-Blueviolet hover:text-white text-Blueviolet font-medium py-2 px-4 rounded-full">
                  Register
                </button>
              </Link>
              <a href="tel:+917073437393">
                <button className="bg-white w-full text-Blueviolet border border-semiblueviolet font-medium py-2 px-4 rounded-full">
                  Call Us
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;

