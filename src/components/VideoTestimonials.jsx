import React, { useRef } from 'react';
import ReactSlick from 'react-slick';
import { Play, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slider = ReactSlick.default || ReactSlick;

const TESTIMONIALS = [
  {
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400',
    name: 'Chaturvedi',
    procedure: 'LASIK Surgery',
    quote: 'I had vision problems for years and was tired of wearing glasses. The LASIK procedure at Advanced Focus was quick and painless. Dr. Anuja guided me through every step...',
  },
  {
    img: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&q=80&w=400',
    name: 'Karnal Charanjit Nagarath',
    procedure: 'LASIK Surgery',
    quote: 'I had trouble with blurry vision and was diagnosed with astigmatism. I chose Advanced Focus and Dr. Anuja Pasham for LASIK. The surgery was smooth and my vision is crystal clear now...',
  },
  {
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
    name: 'Kamlesh Agrawal',
    procedure: 'LASIK Surgery',
    quote: 'I struggled with nearsightedness for about a decade before consulting Dr. Anuja. The LASIK surgery was painless and successful. Within 24 hours, my vision was perfect without glasses.',
  },
  {
    img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=400',
    name: 'Snehal Rao',
    procedure: 'LASIK Surgery',
    quote: 'The staff was extremely professional and the procedure was quicker than I thought. Highly recommend Dr. Anuja to anyone wanting freedom from spectacles!',
  },
];

export default function VideoTestimonials() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section>
      {/* Section Header */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#002d5c] mb-6 sm:mb-8 md:mb-10">
        Insightful Words from Healthcare Heroes :
      </h2>

      {/* Slick Carousel */}
      <div className="testimonial-slider">
        <Slider ref={sliderRef} {...settings}>
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="px-2 sm:px-3 pb-4 h-full">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 group transition-all duration-500 h-full bg-white">

                {/* Image & Video Wrapper */}
                <div className="relative h-56 sm:h-64 md:h-72 w-full overflow-hidden">
                  <img
                    src={t.img}
                    alt={`${t.name} testimonial`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Dark gradient from bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002d5c]/80 via-black/10 to-transparent" />

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#ee2020] rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-6 h-6 sm:w-7 sm:h-7 text-white ml-0.5 fill-current" />
                    </div>
                  </div>

                  {/* Patient Name at bottom */}
                  <div className="absolute bottom-0 left-0 w-full px-4 py-3 sm:px-5 sm:py-4">
                    <span className="text-white text-base sm:text-lg md:text-xl font-bold drop-shadow-md">
                      {t.name}
                    </span>
                  </div>
                </div>

                {/* Procedure Label */}
                <div className="bg-[#00829b] px-4 py-2.5 sm:py-3 text-center">
                  <span className="text-white text-sm sm:text-base font-bold">
                    {t.procedure}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Navigation Buttons Centered */}
      <div className="flex justify-end gap-3 mt-6">
        <button
          onClick={() => sliderRef.current?.slickPrev()}
          className="w-10 h-10 rounded-full bg-[#002d5c] hover:bg-[#00829b] text-white flex items-center justify-center transition-all duration-300 shadow-md hover:scale-110"
          aria-label="Previous Testimonial"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => sliderRef.current?.slickNext()}
          className="w-10 h-10 rounded-full bg-[#002d5c] hover:bg-[#00829b] text-white flex items-center justify-center transition-all duration-300 shadow-md hover:scale-110"
          aria-label="Next Testimonial"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Custom Slick Styles */}
      <style>{`
        .testimonial-slider .slick-track {
          display: flex !important;
          padding: 4px 0;
        }
        .testimonial-slider .slick-slide {
          height: inherit !important;
        }
        .testimonial-slider .slick-slide > div {
          height: 100%;
        }
        .testimonial-slider .slick-list {
          overflow: hidden;
          margin: 0 -8px;
        }
      `}</style>
    </section>
  );
}

