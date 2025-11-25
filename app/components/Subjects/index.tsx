"use client";
import Slider from "react-slick";
import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";


export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 500,
      cssEase: "ease-in-out" as const,
      pauseOnHover: false,
      pauseOnFocus: false,
      pauseOnDotsHover: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div className="mx-auto max-w-7xl px-6 pt-20">
        <div id="courses">
          <div className="flex justify-between items-center mb-3 mx-auto max-w-7xl">
            <h3 className="text-midnightblue text-3xl lg:text-4xl font-semibold">
              Our <span className="text-Blueviolet">Subjects</span>
            </h3>
            <Link
              href="/subjects"
              className="text-Blueviolet lg:text-lg text-sm font-medium hover:text-blue-600 transition-colors duration-300"
            >
              Explore Subjects&nbsp;&gt;
            </Link>
          </div>

          <Slider {...settings} className="-mx-4">

            {/* Card 1 */}
            <div className="px-4 py-4">
              <div className="bg-white p-6 shadow-md rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 lg:h-[500px] h-full flex flex-col justify-between w-full">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 bg-semiblueviolet p-6 rounded-2xl flex-grow">
                  {/* Left */}
                  <div className="lg:col-span-2 flex flex-col justify-between">
                    <div>
                      <h4 className="text-2xl font-bold text-black leading-tight mb-1">Math Tutoring</h4>
                      <div className="text-sm text-gray-500 space-y-3 mt-8">
                        <p><strong>Algebra:</strong> {" "}Master equations, inequalities, and polynomials.</p>
                        <p><strong>Geometry:</strong> {" "}Learn the ins and outs of shapes, angles, and proofs.</p>
                        <p><strong>Calculus:</strong> {" "}Understand limits, derivatives, integrals, and more.</p>
                        <p><strong>Statistics:</strong> {" "}Analyze data, work with probability, and understand statistical concepts.</p>
                      </div>
                    </div>
                  </div>

                  {/* Right - image */}
                  <div className="flex justify-center items-center">
                    <div className="relative w-full h-52 rounded-2xl overflow-hidden">
                      <Image
                        src="/assets/courses/maths.jpg"
                        alt="Math Tutoring"
                        fill
                        className="object-cover rounded-2xl transition-transform duration-500 hover:scale-105"
                        unoptimized
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-6 pt-4">
                  <Link href="/contact-us">
                    <button className="bg-blue-600 hover:bg-semiblueviolet border border-lightgray text-Blueviolet font-semibold px-6 py-2 rounded-xl shadow-md transition">
                      Enroll Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="px-4 py-4">
              <div className="bg-white p-6 shadow-md rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 lg:h-[500px] h-full flex flex-col justify-between w-full">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 bg-paleblue p-6 rounded-2xl flex-grow">
                  <div className="lg:col-span-2 flex flex-col justify-between">
                    <div>
                      <h4 className="text-2xl font-bold text-black leading-tight mb-1">Science Tutoring</h4>
                      <div className="text-sm text-gray-500 space-y-3 mt-8">
                        <p><strong>Biology:</strong> {" "}Dive into genetics, ecology, and human biology.</p>
                        <p><strong>Chemistry:</strong> {" "}Get help with chemical reactions, bonding, and organic chemistry.</p>
                        <p><strong>Physics:</strong> {" "}: Understand the laws of motion, energy, and force.</p>
                        <p><strong>Environmental Science:</strong> {" "}Explore ecosystems, climate change, and sustainability.</p>
                      </div>
                    </div>
                  </div>

                  {/* Right - image */}
                  <div className="flex justify-center items-center">
                    <div className="relative w-full h-52 rounded-2xl overflow-hidden">
                      <Image
                        src="/assets/courses/science.jpeg"
                        alt="Design System"
                        fill
                        className="object-cover rounded-2xl transition-transform duration-500 hover:scale-105"
                        unoptimized
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-6 pt-4">
                  <Link href="/contact-us">
                    <button className="bg-blue-600 hover:bg-semiblueviolet border border-lightgray text-Blueviolet font-semibold px-6 py-2 rounded-xl shadow-md transition">
                      Enroll Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="px-4 py-4">
              <div className="bg-white p-6 shadow-md rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 lg:h-[500px] h-full flex flex-col justify-between w-full">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 bg-semiblueviolet p-6 rounded-2xl flex-grow">
                <div className="lg:col-span-2 flex flex-col justify-between">
                    <div>
                      <h4 className="text-2xl font-bold text-black leading-tight mb-1">English & Language Arts</h4>
                      <div className="text-sm text-gray-500 space-y-3 mt-8">
                        <p><strong>Reading & Comprehension:</strong> {" "}Improve your ability to understand and analyze literature.</p>
                        <p><strong>Writing:</strong> {" "}Perfect your essays, research papers, and creative writing.</p>
                        <p><strong>Test Prep:</strong> {" "}Get expert guidance for SAT, ACT, and other standardized tests.</p>
                      </div>
                    </div>
                  </div>

                  {/* Right - image */}
                  <div className="flex justify-center items-center">
                    <div className="relative w-full h-52 rounded-2xl overflow-hidden">
                      <Image
                        src="/assets/courses/english.png"
                        alt="Design Banner"
                        fill
                        className="object-cover rounded-2xl transition-transform duration-500 hover:scale-105"
                        unoptimized
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-6 pt-4">
                  {/* <h3 className="text-3xl font-bold text-gray-900">₹4999</h3> */}
                  <Link href="/contact-us">
                    <button className="bg-blue-600 hover:bg-semiblueviolet border border-lightgray text-Blueviolet font-semibold px-6 py-2 rounded-xl shadow-md transition">
                      Enroll Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="px-4 py-4">
              <div className="bg-white p-6 shadow-md rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 lg:h-[500px] h-full flex flex-col justify-between w-full">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 bg-paleblue p-6 rounded-2xl flex-grow">
                 <div className="lg:col-span-2 flex flex-col justify-between">
                    <div>
                      <h4 className="text-2xl font-bold text-black leading-tight mb-1">Test Preparation</h4>
                      <div className="text-sm text-gray-500 space-y-3 mt-8">
                        <p><strong>SAT/ACT:</strong> {" "}Focused prep to boost your test scores with personalized strategies.</p>
                        <p><strong>GRE/GMAT:</strong> {" "}Graduate school test prep that gives you the edge you need.</p>
                        <p><strong>Subject-Specific Exams:</strong> {" "}: Focused help for AP exams, state exams, and other subject-based tests.</p>
                        
                      </div>
                    </div>
                  </div>

                  {/* Right - image */}
                  <div className="flex justify-center items-center">
                    <div className="relative w-full h-52 rounded-2xl overflow-hidden">
                      <Image
                        src="/assets/courses/preparation.jpg"
                        alt="Python Data Science"
                        fill
                        className="object-cover rounded-2xl transition-transform duration-500 hover:scale-105"
                        unoptimized
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-6 pt-4">
                  <Link href="/contact-us">
                    <button className="bg-blue-600 hover:bg-semiblueviolet border border-lightgray text-Blueviolet font-semibold px-6 py-2 rounded-xl shadow-md transition">
                      Enroll Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>

          </Slider>
        </div>
      </div>
    );
  }
}
