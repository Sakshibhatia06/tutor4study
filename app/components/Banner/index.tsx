import Image from 'next/image';
import Link from 'next/link';
const Banner = () => {

    return (
        <div id="home-section" className='bg-lightkblue'>
            <div className="mx-auto max-w-7xl  pb-15 px-6 pt-5">

                <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1'>

                    <div className='col-span-6 flex flex-col justify-center '>
                        <h1 className='text-midnightblue text-4xl sm:text-5xl font-semibold text-center lg:text-start  pt-5 lg:pt-0'>Transform Your  Learning  with Expert Online Tutors!</h1>
                        <h3 className='text-charcoal text-lg font-normal text-center lg:text-start opacity-75 pt-5 lg:pt-0 mt-6'>Personalized tutoring that fits your schedule and helps you succeed.</h3>

                        <div className="flex flex-row gap-4 justify-center lg:justify-start mt-10">
                             <Link href="https://wa.me/917646095877?text=I%20would%20like%20to%20book%20a%20free%20demo%20class">
                           <button className="text-Blueviolet text-lg font-medium py-4 px-6 transition duration-150 ease-in-out rounded-full bg-semiblueviolet hover:text-white hover:bg-Blueviolet"> 
                            Get Started with a Free Trial </button>
                            </Link>
                        </div>
                    </div>

                    <div className='col-span-6 flex justify-center'>
                        <Image src="/assets/banner/mahila.png" alt="nothing" width={1000} height={805} unoptimized/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;
