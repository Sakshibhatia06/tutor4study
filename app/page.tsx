import Banner from './components/Banner/index';
import Subjects from './components/Subjects/index';
import WhyChooseUs from './components/WhyChooseUs/index'
import Testimonials from './components/Testimonials/index';
import Enrollment from "@/app/components/Enrollment/index";
import FAQ from '@/app/components/FAQ/index';
import BlogGrid from "./components/BlogGrid";

export default async function Home() {
  return (
    <main>
      <Banner />
      <Subjects />
      <WhyChooseUs />
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Latest <span className="text-Blueviolet">Blogs</span>
        </h2>
        <BlogGrid />
      </section>
      <Testimonials />
      <Enrollment />
      <FAQ />
      <div className='max-w-7xl mx-auto px-6'>
        <hr />
      </div>

    </main>
  )
}
