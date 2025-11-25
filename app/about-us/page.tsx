'use client';

import React, { useEffect, useState, useRef, FC } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import studyImg from '@/public/assets/about-page/3.jpg';
import { Star, Clock, Wallet, UserCheck,Code,Medal,GraduationCap } from 'lucide-react';
import { FaBullseye, FaEye } from 'react-icons/fa';

const Bullseye = FaBullseye as React.FC<React.SVGProps<SVGSVGElement>>;
const Eye = FaEye as React.FC<React.SVGProps<SVGSVGElement>>;

// Dynamic import of Team component (carousel) client-side only
const Team = dynamic(() => import('@/app/components/Mentor/index'), { ssr: false });
// Dynamic import of Testimonial component (carousel) client-side only
const Testimonial = dynamic(() => import('@/app/components/Testimonials/index'), { ssr: false });
// Dynamic import of Intaerested component (carousel) client-side only
const Intaerested = dynamic(() => import('@/app/components/Enrollment/index'), { ssr: false });
// Dynamic import of Intaerested component (carousel) client-side only
const FAQ = dynamic(() => import('@/app/components/FAQ/index'), { ssr: false });
const HowItWorks = dynamic(() => import('@/app/components/HowItWorks/index'), { ssr: false });
const WhyOnlineTutoringWorks = dynamic(() => import('@/app/components/WhyOnlineTutoringWorks/index'), { ssr: false });

// -----------------------------------
// Values Section Icons & Data
// -----------------------------------
interface ValueItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

const values: ValueItem[] = [
 { icon: Star, title: 'Expert Tutors', description: 'Expert tutors with specialized knowledge' },
{ icon: Clock, title: '24/7 Support', description: '24/7 availability, so you can get help whenever you need it' },
{ icon: Wallet, title: 'Affordable Plans', description: 'Flexible pricing options to suit every budget' },
{ icon: UserCheck, title: 'Personalized Learning', description: 'A personalized approach to every student’s needs' },
];

// -----------------------------------
// Counter Component (hydration-safe)
// -----------------------------------
function Counter({ target, start }: { target: number; start: boolean }) {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    if (!start) {
      setCount(0);
      return;
    }

    let animationFrame: number;
    const duration = 2000;
    const startTime = performance.now();

    const animate = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(target * progress));
      if (progress < 1) animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [start, target]);

  // Render placeholder on server to match SSR
  if (count === null) return <span>0+</span>;

  return <span>{count}+</span>;
}

// -----------------------------------
// Main Component
// -----------------------------------
const SkillsSection: FC = () => {
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 }
    );

    if (triggerRef.current) observer.observe(triggerRef.current);
    return () => observer.disconnect();
  }, []);

  const statsData = [
    { target: 3000, label: 'Total Students' },
    { target: 100, label: 'Total Teachers' },
    { target: 8, label: 'Years Experience' },
    { target: 15, label: 'Total Courses' },
  ];

  return (
    <div className='bg-white'>
    <section className="max-w-7xl mx-auto pt-5">
      <div className=" px-6">
        <div className="grid md:grid-cols-2 gap-10 items-top">
          {/* Left Content */}
          <div className="bg-paleblue p-6 rounded-xl shadow-md lg:text-left text-center lg:h-[665px] h-full">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold leading-snug">
                Welcome to {' '}
                <span className="text-blue-500">Tutor4Study </span>
              </h2>
              <p className="text-gray-600">
               At <strong>Tutor4Study</strong>, we believe every student deserves personalized, top-quality tutoring. Whether you&lsquo;re tackling tough homework, preparing for important exams, or looking to boost your grades, our experienced tutors are here to help.
              </p>
              {/* <h2 className="text-xl  font-bold leading-snug">
               Why Choose Tutor4Study
              </h2> */}
            </div>

            {/* Skills List */}
            <div className="mt-8">
              <div className="relative pl-10 space-y-10">
                {values.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="relative flex items-start gap-4">
                      <div className="absolute -left-[35px] flex flex-col items-center">
                        <div className="bg-white border border-gray-200 rounded-full p-3 shadow-sm">
                          <Icon className="w-6 h-6 text-sky-500" />
                        </div>
                        {index < values.length - 1 && (
                          <div className="h-10 border-l border-dashed border-gray-300 mt-2"></div>
                        )}
                      </div>
                      <div className="pl-10">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {item.title}
                        </h3>
                        <p className="text-gray-500 text-sm">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="space-y-6">
              <div className="w-full h-100 rounded-xl overflow-hidden flex shadow-md">
                <Image
                  src={studyImg}
                  alt="studyImg"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full opacity-90"
                  unoptimized
                />
              </div>
            </div>

            {/* Counter Section */}
            <div ref={triggerRef} className="w-full mb-12 pt-10">
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 text-center max-w-5xl mx-auto">
                {statsData.map((item, i) => (
                  <div
                    key={i}
                    className="bg-semiblueviolet shadow-md rounded-xl py-6 hover:shadow-lg transition"
                  >
                    <h3 className="text-3xl font-bold text-teal-400">
                      <Counter target={item.target} start={inView} />
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* mission and vision Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center pb-10 ">
          <div className="bg-paleblue rounded-xl p-6 transition-all hover:scale-105 hover:shadow-lg">
            <Bullseye className="text-4xl text-orange-600 mb-4" />
            <h2 className="text-2xl font-bold mb-3 text-slate-900">Our Mission</h2>
            <p className="text-slate-600">
             To provide accessible, affordable, and effective tutoring that works around your schedule. With just a few clicks, you can connect with expert tutors in a wide range of subjects.
            </p>
          </div>

          <div className="bg-paleblue rounded-xl p-6 transition-all hover:scale-105 hover:shadow-lg">
            <Eye className="text-4xl text-orange-600 mb-4" />
            <h2 className="text-2xl font-bold mb-3 text-slate-900">Our Vision</h2>
            <p className="text-slate-600">
             We&lsquo;re not just about helping you pass a test—we&lsquo;re about helping you understand the material, build confidence, and develop lifelong learning skills. Let us be a part of your academic journey and help you unlock your full potential.
            </p>
          </div>
        </div>
       </div>  
    </section>
        <div className="">
          < HowItWorks/>
        </div>

         {/* Carousel / Mentors */}
        <div className="pt-2">
          <Team />
        </div>
        <div className="pt-2">
        <WhyOnlineTutoringWorks/>
        </div>
         {/* Testimonials */}
        <div className="">
          < Testimonial/>
        </div>
        {/* Newsletter */}
        <div className="">
          < Intaerested/>
        </div>
        <FAQ/>
        <div className='max-w-7xl mx-auto px-6'>
           <hr />
        </div>
        
     </div>
  );
};

export default SkillsSection;
