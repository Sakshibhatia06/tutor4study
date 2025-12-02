"use client";
import { subjectsData } from "@/app/subjects/data";
import { basicMathematicsContent } from "@/app/subjects/content/basic-mathematics";
import { algebraContent } from "@/app/subjects/content/algebra";
import { geometryContent } from "@/app/subjects/content/geometry";
import { trigonometryContent } from "@/app/subjects/content/trigonometry";
import { calculusContent } from "@/app/subjects/content/calculus";
import { statisticsProbabilityContent } from "@/app/subjects/content/statistics-and-probability";
import { generalScienceContent } from "@/app/subjects/content/general-science";
import { physicsContent } from "@/app/subjects/content/physics";
import { biologyContent } from "@/app/subjects/content/biology";
import { chemistryContent } from "@/app/subjects/content/chemistry";
import { evsContent } from "@/app/subjects/content/environmental-science";
import { programmingContent } from "@/app/subjects/content/programming-for-beginners";
import { msOfficeContent } from "@/app/subjects/content/microsoft-office";
import { basicComputerContent } from "@/app/subjects/content/basic-computer-skills";
import { economicsContent } from "@/app/subjects/content/economics";
import { politicalScienceContent } from "@/app/subjects/content/political-science";
import { geographyContent } from "@/app/subjects/content/geography";
import { historyContent } from "@/app/subjects/content/history";
import { hindiContent } from "@/app/subjects/content/hindi";
import { englishContent } from "@/app/subjects/content/english";
import { arabicContent } from "@/app/subjects/content/arabic";
import { frenchContent } from "@/app/subjects/content/french";
import { spanishContent } from "@/app/subjects/content/spanish";
import { germanContent } from "@/app/subjects/content/german";
import Slider from "react-slick";
import Link from 'next/link';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const topicContentMap = {

    "basic-mathematics": basicMathematicsContent,
    "microsoft-office": msOfficeContent,
    "basic-computer-skills": basicComputerContent,
    "economics": economicsContent,
    "political-science": politicalScienceContent,
    "geography": geographyContent,
    "history": historyContent,
    "hindi": hindiContent,
    "english": englishContent,
    "arabic": arabicContent,
    "french": frenchContent,
    "spanish": spanishContent,
    "german": germanContent,
    "algebra": algebraContent,
    "geometry": geometryContent,
    "trigonometry": trigonometryContent,
    "calculus": calculusContent,
    "chemistry": chemistryContent,
    "biology": biologyContent,
    "environmental-science":evsContent,
    "physics": physicsContent,
    "general-science": generalScienceContent,
    "statistics-and-probability": statisticsProbabilityContent,
    "programming-for-beginners": programmingContent,
};

export default function TopicPage({ params }) {
    const { category, subcategory, topic } = params;

    const subData = subjectsData[category]?.subcategories?.[subcategory];
    const topicInfo = subData?.topics?.find((t) => t.slug === topic);

    if (!topicInfo) return <h1>Topic Not Found</h1>;

    const content = topicContentMap[topic];
    if (!content) return <h1>Content Coming Soon...</h1>;

    return (
        <>
            <section className="w-full text-center py-16 bg-gradient-to-r from-[#E8F1FF] to-[#cbe0f5]">
                <div className="w-full max-w-none py-10 px-6 md:px-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
                        {content.hero?.heading}
                    </h1>

                    <p className="mt-4 mb-20 text-lg text-blue-700 max-w-3xl mx-auto leading-relaxed">
                        {content.hero?.subheading}
                    </p>

                    <a
                        href={`https://wa.me/917646095877?text=${encodeURIComponent(
                            `Hello! I am interested in learning more about the topic ${content.hero?.heading}`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-Blueviolet text-lg font-medium py-4 px-6 transition duration-150 ease-in-out rounded-full bg-semiblueviolet hover:text-white hover:bg-Blueviolet"
                    >
                        Connect With Us Now
                    </a>
                </div>
            </section>

            <section className="mt-12">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4">

                    {/* Text Content */}
                    <div className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                            {content.overview?.heading}
                        </h2>

                        {content.overview?.paragraphs?.map((p, i) => (
                            <p key={i} className="text-gray-700 leading-relaxed">
                                {p}
                            </p>
                        ))}
                    </div>


                    {/* Image */}
                    <div className="flex justify-center">
                        <img
                            src={content.overview?.image}
                            alt={content.hero?.heading}
                            className="rounded-xl shadow-lg w-full max-w-sm md:max-w-md"
                        />
                    </div>

                </div>
            </section>



            <section className="pt-10 mt-7 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">

                    <h2 className="text-3xl md:text-4xl mb-5 font-semibold text-gray-900 text-center">
                        {content.whyChoose?.heading}
                    </h2>

                    <p className="max-w-4xl mx-auto text-center text-gray-600 mb-12">
                        {content.whyChoose?.intro}
                    </p>

                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                        {content.whyChoose?.points?.map((item, i) => (
                            <div
                                key={i}
                                className="bg-blue-50 p-6 rounded-lg shadow-lg flex flex-col h-full
          transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                            >
                                <div className="flex items-start mb-4">
                                    <span className="text-3xl mr-4 flex-shrink-0">{item.icon}</span>
                                    <h3 className="text-xl font-bold text-blue-900 leading-snug">
                                        {item.title}
                                    </h3>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* CURRICULUM */}
            <section className="mt-12">
                {/* Dynamic Heading */}
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 text-center">
                    {content.curriculum?.curriculumHeading}
                </h2>

                {/* Cards Section Like Previous Design */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-14 flex-wrap">
                    {content.curriculum?.list?.map((c, i) => (
                        <div
                            key={i}
                            className={`bg-semiblueviolet w-[280px] h-[280px] rounded-2xl shadow-xl border border-white/40 transform transition-all duration-300`}
                        >
                            <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                                <h3 className="font-semibold text-lg mb-2">{c.title}</h3>

                                <ul className="text-gray-500 text-sm space-y-1">
                                    {c.points?.map((p, j) => (
                                        <li key={j}>{p}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className="mt-16">
                <h2 className="text-3xl md:text-4xl font-semibold text-center">
                    {content.howItWorks?.heading}
                </h2>
                <p className="text-gray-600 text-center mt-2 max-w-2xl mx-auto">
                    {content.howItWorks?.subheading}
                </p>

                <div className="mt-10 flex flex-col gap-10">

                    {/* First row: 3 steps */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {content.howItWorks?.steps.slice(0, 3).map((step, i) => (
                            <div
                                key={i}
                                className="flex flex-col items-center text-center p-5 rounded-xl 
                     bg-white shadow-[0_4px_15px_rgba(0,0,0,0.08)] 
                     hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] hover:scale-[1.03]
                     transition-all duration-300"
                            >
                                <div className="w-12 h-12 flex items-center justify-center rounded-full 
                bg-[#2563eb] text-white font-semibold text-xl leading-none">
                                    {i + 1}
                                </div>
                                <h3 className="font-semibold text-lg mt-4 text-gray-900">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 text-sm mt-2">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Second row: 2 steps centered */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 justify-center mx-auto lg:w-2/3">
                        {content.howItWorks?.steps.slice(3).map((step, i) => (
                            <div
                                key={i}
                                className="flex flex-col items-center text-center p-5 rounded-xl 
                     bg-white shadow-[0_4px_15px_rgba(0,0,0,0.08)] 
                     hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] hover:scale-[1.03]
                     transition-all duration-300"
                            >
                                <div className="w-12 h-12 flex items-center justify-center rounded-full 
                bg-[#2563eb] text-white font-semibold text-xl leading-none">
                                    {i + 4}
                                </div>
                                <h3 className="font-semibold text-lg mt-4 text-gray-900">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 text-sm mt-2">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
            <section className="mt-16 py-16 bg-gradient-to-r from-[#E8F1FF] to-[#cbe0f5]">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 mb-4">
                        {content.whoCanJoin.heading}
                    </h2>
                    <p className="text-lg text-blue-700 mb-8">
                        {content.whoCanJoin.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {content.whoCanJoin.list.map((item, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-xl shadow-lg p-6 flex items-center justify-center text-center
                     hover:scale-105 hover:shadow-2xl transition-all duration-300"
                            >
                                <p className="text-gray-700 font-medium">{item}</p>
                            </div>
                        ))}
                    </div>

                    <p className="mt-8 text-[color:#1e40af] font-semibold text-lg max-w-2xl mx-auto">
                        {content.whoCanJoin.conclusion}
                    </p>
                </div>
            </section>

            <section className="mt-12 py-12">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4">

                    {/* Image */}
                    <div className="flex justify-center">
                        <img
                            src={content.overview?.image}
                            alt={content.hero?.heading}
                            className="rounded-xl shadow-lg w-full max-w-sm md:max-w-md"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                            {content.benefits?.heading}
                        </h2>

                        <ul className="space-y-3">
                            {content.benefits?.paragraphs?.map((p, i) => (
                                <li
                                    key={i}
                                    className="relative pl-6 text-gray-700 leading-relaxed"
                                >
                                    {/* Blue Dot */}
                                    <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#2563eb]"></span>
                                    {p}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section className="mt-12 py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-2">
                        Hear From Our <span className="text-[#2563eb]">Students</span>
                    </h2>
                    <p className="mb-8 text-gray-600">What our students have to say about their experiences.</p>

                    <Slider
                        dots={true}
                        infinite={true}
                        slidesToShow={3}
                        slidesToScroll={1}
                        autoplay={true}
                        speed={2000}
                        autoplaySpeed={5000}
                        arrows={false}
                        responsive={[
                            { breakpoint: 1200, settings: { slidesToShow: 3 } },
                            { breakpoint: 800, settings: { slidesToShow: 2 } },
                            { breakpoint: 600, settings: { slidesToShow: 1 } },
                        ]}
                    >
                        {content.testimonialSection.map((t, i) => (
                            <div key={i} className="px-4">
                                <div className="bg-white m-4 p-6 rounded-xl shadow-md h-[320px] flex flex-col justify-between relative">
                                    <p className="mt-12 text-gray-700 text-lg leading-relaxed">{t.comment}</p>

                                    <div className="mt-4">
                                        <h4 className="text-lg font-semibold text-gray-900">{t.name}</h4>
                                        {t.profession && <p className="text-sm text-[#2563eb]">{t.profession}</p>}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>
            <section className="mt-16 py-16 bg-gradient-to-r from-[#f0f4ff] to-[#dbe8ff]">
                <div className="max-w-5xl mx-auto px-6 text-center">

                    {/* Heading */}
                    <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 mb-4">
                        {content.tutors.heading}
                    </h2>

                    {/* Description */}
                    <p className="text-lg text-gray-700 mb-8">
                        {content.tutors.description}
                    </p>

                    <ul className="flex flex-wrap justify-center gap-6 mb-8">
                        {content.tutors.highlights.map((item, i) => (
                            <li
                                key={i}
                                className="flex items-start gap-3 bg-white rounded-lg p-4 shadow hover:shadow-lg transition-all min-w-[220px]"
                            >
                                <span className="text-xl">{item.split(" ")[0]}</span>
                                <span className="text-gray-700">{item.split(" ").slice(1).join(" ")}</span>
                            </li>
                        ))}
                    </ul>


                    <Link href={content.mathPromo?.ctaLink}>
                        <button className="bg-[#2563eb] text-lg text-white font-medium py-4 px-6 transition duration-150 ease-in-out rounded-full hover:bg-[#1047bd] text-center flex justify-center max-w-xl mx-auto">
                            {content.mathPromo?.ctaText}
                        </button>
                    </Link>
                </div>
            </section>



            {/* FAQs */}
            <section className="mt-12">
                <h2 className="text-2xl font-semibold text-center mb-6">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-4 max-w-3xl mx-auto">
                    {content.faqs?.map((f, i) => (
                        <details
                            key={i}
                            className="group bg-white rounded-lg shadow-sm p-4 cursor-pointer hover:shadow-md transition"
                        >
                            <summary className="font-medium text-lg text-gray-900 flex items-center">
                                <span className="mr-2 transition-transform group-open:rotate-90">▶</span>
                                {f.q}
                            </summary>
                            <p className="mt-2 text-gray-600">{f.a}</p>
                        </details>
                    ))}
                </div>
            </section>
            <div className="mx-auto max-w-3xl md:max-w-7xl rounded-3xl px-6 mt-10">
                <div className="grid grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-12 xl:gap-x-8">
                    <div className="col-span-12 bg-imagee p-2">
                        <div className="mb-10 mt-24 lg:mx-64 lg:mt-24 lg:mb-10">
                            <h6 className="text-lg text-center font-semibold text-white mb-3">
                                {content.mathPromo?.title}
                            </h6>
                            <h3 className="text-base font-normal opacity-75 text-white text-center mb-8">
                                {content.mathPromo?.description}
                            </h3>
                            <Link href={content.mathPromo?.ctaLink}>
                                <button className="bg-white text-lg font-medium py-4 px-6 transition duration-150 ease-in-out rounded-full hover:bg-paleblue text-center flex justify-center max-w-xl mx-auto">
                                    {content.mathPromo?.ctaText}
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
