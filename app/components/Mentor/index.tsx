'use client';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

// ======================
// CAROUSEL DATA
// ======================
interface DataType {
  profession: string;
  name: string;
  imgSrc: string;
}

const postData: DataType[] = [
  { profession: 'Lead UX Designer', name: 'Amelia Carter', imgSrc: '/assets/mentor/mentor1.jpeg' },
  { profession: 'Product Design Mentor', name: 'Liam Rodriguez', imgSrc: '/assets/mentor/mentor2.jpeg' },
  { profession: 'UI/UX Consultant', name: 'Sofia Patel', imgSrc: '/assets/mentor/mentor3.jpeg' },
  { profession: 'Creative Director', name: 'Ethan Williams', imgSrc: '/assets/mentor/mentor4.jpeg' },
];

// ======================
// CUSTOM ARROWS (optional)
// ======================
function SampleNextArrow(props: { className?: string; style?: React.CSSProperties; onClick?: () => void }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        background: '#D5EFFA',
        padding: '28px',
        borderRadius: '30px',
        border: '1px solid #1A21BC',
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: { className?: string; style?: React.CSSProperties; onClick?: () => void }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#D5EFFA',
        padding: '28px',
        borderRadius: '30px',
        border: '1px solid #1A21BC',
      }}
      onClick={onClick}
    />
  );
}

// ======================
// MAIN COMPONENT
// ======================
export default function MultipleItems(): JSX.Element | null {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 800,
    cssEase: 'linear',
    pauseOnHover: false,
    pauseOnFocus: false,
    pauseOnDotsHover: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 1000, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 530, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-6 pt-10 mt-7">
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 text-center mb-10">
        Meet Our <span className="text-Blueviolet">Mentors</span>
      </h2>

      <div className="bg-paleblue rounded-xl p-6" id="mentor">
        <div className="sm:py-4 px-6 lg:px-8 relative">
          <Slider {...settings}>
            {postData.map((item, i) => (
              <div key={i}>
                <div className="m-3 md:my-3 text-center">
                  {/* Fixed square container */}
                  <div className="relative lg:w-[250px] lg:h-[250px] w-[150px] h-[150px] mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg transition-transform duration-300 hover:scale-105">
                    <Image
                      src={item.imgSrc}
                      alt={item.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>

                  <div className="mt-6">
                    <h3 className="text-2xl font-semibold text-lightblack">{item.name}</h3>
                    <h4 className="text-lg font-normal text-lightblack pt-2 opacity-50">
                      {item.profession}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
