"use client";
import Link from 'next/link';
import React from "react";
import Image from "next/image";
import instructorImg from "@/public/assets/whychooseus/1.jpg"; 
import StarSection from "@/app/components/Star/index"
const BecomeInstructor = () => {
  return (
      <div className="z-0  relative max-w-7xl mx-auto pt-10 mt-6">
          {/* Header */}
              <header className="text-center mb-12  px-6">
                 <h2 className="text-3xl md:text-4xl font-semibold text-midnightblue  text-center">
               Why Choose {" "}
                <span className=" text-Blueviolet ">
                Tutor4Study{" "}
                </span>
              </h2>
              {/* <p className="text-gray-500 mt-6 max-w-3xl text-sm md:text-base text-center mx-auto ">
               At <strong>Tutor4Study</strong>, we believe every student deserves personalized, top-quality tutoring. Whether you're tackling tough homework, preparing for important exams, or looking to boost your grades, our experienced tutors are here to help.
              </p>  */}
              </header>
    <section className=" grid grid-cols-1 md:grid-cols-2 gap-12  text-black  px-6 pb-2">
      {/* ===== Left Image Section ===== */}
      <div className="relative w-full md:w-[600px]">
        {/* White background offset frame */}
        <div className="absolute top-5 left-5 bg-white w-full h-full rounded-sm"></div>

        {/* Instructor Image */}
        <div className="relative z-10">
          <Image
            src={instructorImg}
            alt="Instructor"
            className="rounded-xl object-cover w-full h-auto shadow-lg"
            unoptimized
          />
        </div>
      </div>

      {/* ===== Right Text Section ===== */}
      <div className=" lg:text-left text-center">
       <ul className="list-disc pl-5 text-gray-400 text-sm md:text-base leading-relaxed mb-2 space-y-1">
  <li>Expert tutors with specialized knowledge</li>
  <li>24/7 availability, so you can get help whenever you need it</li>
  <li>Flexible pricing options to suit every budget</li>
  <li>A personalized approach to every student&apos;s needs</li>
</ul>

         <Link href="/about-us">
        <button className="bg-semiblueviolet hover:bg-Blueviolet text-Blueviolet hover:text-white font-medium px-5 py-3 rounded-full inline-flex items-center gap-2 transition">
          About Us
          <span className="text-lg">➜</span>
        </button>
        </Link>
        <StarSection/>
      </div>
    </section>
    </div>
  );
};

export default BecomeInstructor;
