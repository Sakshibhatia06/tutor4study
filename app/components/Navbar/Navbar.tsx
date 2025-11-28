"use client";

import { Disclosure } from '@headlessui/react';
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Logo from "@/public/logo.png";
import Link from 'next/link';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Image from 'next/image';

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about-us" },
  { name: "Subjects", href: "/subjects" },
  { name: "Contact ", href: "/contact-us" },
];

// ⭐ Subject categories + subcategories
const subjectsMenu = [
  {
    category: "Academic Subjects (School Level)",
    categorySlug: "academic-subjects",
    sub: ["Mathematics", "Science", "Languages", "Social Studies", "Computer Technology"]
  },
  {
    category: "College / Advanced Level",
    categorySlug: "college-advanced",
    sub: ["Mathematics & Statistics", "Science & Engineering", "Commerce & Business"]
  },
  {
    category: "Professional / Skill Development Courses",
    categorySlug: "professional-courses",
    sub: ["Language & Communication", "Technology & Coding", "Exam Preparation", "Soft Skills"]
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile Drawer
  const [subjectOpen, setSubjectOpen] = useState(false); // Desktop Subjects Dropdown
  const pathname = usePathname();

  // 🚀 Close drawer & dropdown when route changes
  useEffect(() => {
    setIsOpen(false);
    setSubjectOpen(false);
  }, [pathname]);

  return (
    <Disclosure as="nav" className="navbar">
      <>
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="relative flex h-12 md:h-15 items-center justify-between">
            <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">

              {/* LOGO */}
              <div className="flex flex-shrink-0 items-center">
                <Link href="/" className="flex items-center">
                  <Image src={Logo} alt="Logo" width={100} height={100} className="h-20 w-auto block lg:hidden" priority unoptimized/>
                </Link>
                <Link href="/" className="flex items-center">
                  <Image src={Logo} alt="Logo" width={100} height={100} className="h-20 w-auto hidden lg:block" priority unoptimized/>
                </Link>
              </div>

              {/* DESKTOP LINKS */}
              <div className="hidden lg:block m-auto">
                <div className="flex space-x-4">

                  {/* HOME */}
                  <Link href="/">
                    <span className={classNames(
                      pathname === "/" ? "underline-links" : "text-slategray",
                      "px-3 py-4 text-lg opacity-75 hover:opacity-100 cursor-pointer font-semibold"
                    )}>
                      Home
                    </span>
                  </Link>

                  {/* ABOUT */}
                  <Link href="/about-us">
                    <span className={classNames(
                      pathname === "/about-us" ? "underline-links" : "text-slategray",
                      "px-3 py-4 text-lg opacity-75 hover:opacity-100 cursor-pointer font-semibold"
                    )}>
                      About
                    </span>
                  </Link>

                  {/* ⭐ SUBJECTS WITH DROPDOWN */}
                  <div
                    className="relative"
                    onMouseEnter={() => setSubjectOpen(true)}
                    onMouseLeave={() => setSubjectOpen(false)}
                  >
                    <Link href="/subjects">
                      <span
                        className={classNames(
                          pathname.startsWith("/subjects") ? "underline-links" : "text-slategray",
                          "px-3 py-4 text-lg opacity-75 hover:opacity-100 cursor-pointer font-semibold"
                        )}
                      >
                        Subjects
                      </span>
                    </Link>

                    {subjectOpen && (
                      <div className="absolute left-0 top-full mt-2 w-[650px] bg-white shadow-xl rounded-xl p-6 grid grid-cols-2 gap-6 z-50">
                        {subjectsMenu.map((cat) => (
                          <div key={cat.category}>
                            <h2 className="font-semibold text-Blueviolet mb-2">{cat.category}</h2>
                            <ul className="space-y-1">
                              {cat.sub.map((sub) => {
                                const subSlug = sub.toLowerCase().replace(/\s+/g, "-");
                                return (
                                  <li key={sub}>
                                    <Link href={`/subjects/${cat.categorySlug}/${subSlug}`}>
                                      <span className="text-gray-600 hover:text-Blueviolet text-lg cursor-pointer">
                                        {sub}
                                      </span>
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

                  {/* CONTACT */}
                  <Link href="/contact-us">
                    <span className={classNames(
                      pathname === "/contact-us" ? "underline-links" : "text-slategray",
                      "px-3 py-4 text-lg opacity-75 hover:opacity-100 cursor-pointer font-semibold"
                    )}>
                      Contact
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* REGISTER & CALL US BUTTONS */}
            <div className="hidden lg:flex space-x-4">
              <Link href="/contact-us">
                <button className="text-Blueviolet text-lg font-medium py-4 px-6 transition duration-150 ease-in-out rounded-full bg-semiblueviolet hover:text-white hover:bg-Blueviolet">
                  Register
                </button>
              </Link>
              <a href="tel:+917073437393">
                <button className="text-lg text-Blueviolet px-6 py-4 rounded-full font-medium shadow hover:brightness-110 transition border border-lightgray hover:bg-semiblueviolet">
                  Call Us
                </button>
              </a>
            </div>

            {/* MOBILE DRAWER ICON */}
            <div className="block lg:hidden">
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" onClick={() => setIsOpen(true)} />
            </div>

            {/* MOBILE DRAWER */}
            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              <Drawerdata />
            </Drawer>

          </div>
        </div>
      </>
    </Disclosure>
  );
};

export default Navbar;
