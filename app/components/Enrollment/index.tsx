import Image from "next/image";
import Link from 'next/link';
import { UserPlus , CalendarCheck , BookOpen  } from "lucide-react"
const Newsletter = () => {
    return (
        <>
        
        {/* get start*/}
        <div className="max-w-7xl mx-auto pt-10 mt-4 px-6">
          <div className="flex flex-col">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 text-center">
              Get <span className="text-Blueviolet"> Started</span> Today
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl text-sm md:text-base text-center mx-auto">
              Are you ready to take your learning to the next level? At <strong>Tutor4Study</strong>, we offer a no-obligation <strong>free trial session</strong> to help you experience firsthand how our tutors can help you succeed.
            </p>

           {/* Cards Section */}
<div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-14">

  {/* Card 1 */}
  <div className="bg-semiblueviolet w-[280px] h-[280px] rounded-2xl shadow-xl border border-white/40 transform rotate-[-6deg] hover:rotate-[-3deg] transition-all duration-300">
    <div className="flex flex-col items-center justify-center h-full p-6 text-center">
      <div className="bg-blue-100 p-3 rounded-full mb-3">
        <UserPlus className="w-8 h-8 text-blue-600" />
      </div>
      <h3 className="font-semibold text-lg mb-2">Sign Up for Free </h3>
      <p className="text-gray-500 text-sm">
        Create your account and fill out a brief survey to help us match you with the perfect tutor.
      </p>
    </div>
  </div>

  {/* Card 2 */}
  <div className="bg-semiblueviolet w-[280px] h-[280px] rounded-2xl shadow-xl border border-white/40 transform rotate-[3deg] hover:rotate-0 transition-all duration-300">
    <div className="flex flex-col items-center justify-center h-full p-6 text-center">
      <div className="bg-purple-100 p-3 rounded-full mb-3">
        <CalendarCheck className="w-8 h-8 text-purple-600" />
      </div>
      <h3 className="font-semibold text-lg mb-2">Book Your First Session </h3>
      <p className="text-gray-500 text-sm">
        Choose a tutor and schedule your session at a time that works for you.
      </p>
    </div>
  </div>

  {/* Card 3 */}
  <div className="bg-semiblueviolet w-[280px] h-[280px] rounded-2xl shadow-xl border border-white/40 transform rotate-[-3deg] hover:rotate-0 transition-all duration-300">
    <div className="flex flex-col items-center justify-center h-full p-6 text-center">
      <div className="bg-yellow-100 p-3 rounded-full mb-3">
        <BookOpen  className="w-8 h-8 text-yellow-600" />
      </div>
      <h3 className="font-semibold text-lg mb-2">Start Learning</h3>
      <p className="text-gray-500 text-sm">
        Join the live, interactive session and get personalized help.
      </p>
    </div>
  </div>

</div>

          </div>
        </div>
            {/* <div className="mx-auto max-w-2xl md:max-w-7xl sm:rounded-3xl testimonialbg"> */}
            <div className="mx-auto max-w-3xl md:max-w-7xl rounded-3xl px-6 mt-10">
                <div className="grid grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-12 xl:gap-x-8">

                    <div className="col-span-12 bg-imagee p-2">
                        <div className="mb-10 mt-24 lg:mx-64 lg:mt-24 lg:mb-10">
                            <h6 className="text-lg  text-center font-semibold text-white mb-3">With flexible pricing, expert tutors, and a hassle-free process, <strong>Tutor4Study </strong>makes online tutoring easy and accessible.</h6>
                            <h3 className="text-base font-normal opacity-75 text-white text-center mb-8">
                               Don&lsquo;t wait! Take the first step toward achieving your academic goals today.
                            </h3>
                             <Link href="https://wa.me/917646095877?text=I%20would%20like%20to%20book%20a%20free%20demo%20class">
                               <button className="bg-white text-lg font-medium py-4 px-6 transition duration-150 ease-in-out rounded-full  hover:bg-paleblue text-center flex justify-center max-w-xl mx-auto">
                        Get Started with a Free Trial
                    </button>
                    </Link>
                          
                        </div>
                    </div>

                </div>
            </div>
        </>


    )
}

export default Newsletter;