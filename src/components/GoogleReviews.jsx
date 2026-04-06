import React, { useRef } from 'react';
import ReactSlick from 'react-slick';
import { ChevronLeft, ChevronRight, Star, ArrowRight } from 'lucide-react';

const Slider = ReactSlick.default || ReactSlick;

const GOOGLE_REVIEWS_URL = 'https://search.google.com/local/reviews?placeid=ChIJwyz-GbeRyzsRU7RqPwOpu58';

const reviews = [
  {
    name: 'Minchy Kumar Tadi',
    rating: 5,
    date: '3 Weeks ago',
    text: "I recently visited Advanced Focus Eye Hospital for a cataract consultation for my mother and had a very positive experience. The doctor explained the condition clearly and patiently answered all our questions. The staff were polite and the diagnostic tests were done using modern equipment. The hospital was clean, well organized, and the entire process was smooth without long waiting times. Overall, I felt confident about the treatment and would recommend this hospital to anyone looking for good eye care and cataract surgery consultation. Finally my mother is very happy after the surgery as her sight was restored.",
  },
  {
    name: 'Mousami Singh',
    rating: 5,
    date: '1 month ago',
    text: "I recently underwent Laser PRK surgery for eyesight correction at Advance Focus Eye Hospital, and my overall experience was extremely positive. Dr. Anuja Pasham is a very genuine, polite, and highly professional surgeon. She explained the entire procedure clearly and ensured that I was comfortable at every stage of the treatment. What truly stood out was her personal attention and immediate response to even minor concerns, which gave me great confidence and reassurance. The hospital maintains excellent standards of care and hospitality. The staff members are courteous, attentive, and very supportive. They handle everything in a well-organized and patient-friendly manner. I am truly happy and fully satisfied with the treatment and the results. Thank you, Dr. Anuja Pasham and the entire team at Advance Focus Eye Hospital!",
  },
  {
    name: "Rishika Ghattamaneni",
    rating: 5,
    date: '5 months ago',
    text: "We visited the hospital for my dad’s eye surgery. Dr.Anuja mam treatment and explanation were excellent , they use advanced technology.Thankyou and also I recommend you all.",
  },
  {
    name: "Prashanth Surabhi",
    rating: 5,
    date: '6 months ago',
    text:   "I had an excellent experience at Focus Eye Hospital! Hari and the staff were professional, caring, and attentive. The doctors took their time to explain my eye condition and treatment options clearly. The facilities were clean and modern.Overall, I'd highly recommend Focus Eye Hospital for anyone needing eye care. Thanks to the team for their great",
  }
];

const LINE_CLAMP_LINES = 5;

function GoogleLogo() {
  return (
    <svg viewBox="0 0 272 92" width="80" height="28" xmlns="http://www.w3.org/2000/svg">
      <path d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#EA4335"/>
      <path d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#FBBC05"/>
      <path d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z" fill="#4285F4"/>
      <path d="M225 3v65h-9.5V3h9.5z" fill="#34A853"/>
      <path d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z" fill="#EA4335"/>
      <path d="M35.29 41.19V32H67.2c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.5.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49-.01z" fill="#4285F4"/>
    </svg>
  );
}

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? 'fill-[#FBBC05] text-[#FBBC05]' : 'fill-gray-200 text-gray-200'}`}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-7 shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-lg transition-shadow duration-300 flex flex-col h-full mx-2">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-[#00829b] flex items-center justify-center text-white font-bold text-sm shrink-0">
          {review.name.charAt(0)}
        </div>
        <div className="min-w-0">
          <p className="font-bold text-[#002d5c] text-sm truncate">{review.name}</p>
          <p className="text-xs text-gray-400">{review.date}</p>
        </div>
        {/* Google "G" icon */}
        <div className="ml-auto shrink-0">
          <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
        </div>
      </div>

      {/* Stars */}
      <StarRating rating={review.rating} />

      {/* Review text - clamped to 5 lines */}
      <p
        className="text-sm text-gray-600 leading-relaxed mt-3 flex-grow"
        style={{
          display: '-webkit-box',
          WebkitLineClamp: LINE_CLAMP_LINES,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}
      >
        {review.text}
      </p>

      {/* Read more link - opens Google review */}
      <a
        href={GOOGLE_REVIEWS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#00829b] font-semibold text-sm mt-2 hover:underline inline-block"
      >
        Read more
      </a>
    </div>
  );
}

function SlickArrow({ direction, onClick }) {
  const Icon = direction === 'left' ? ChevronLeft : ChevronRight;
  return (
    <button
      onClick={onClick}
      className="w-10 h-10 rounded-full border border-gray-200 bg-white hover:bg-[#00829b] hover:text-white hover:border-[#00829b] text-[#002d5c] flex items-center justify-center transition-all duration-200 shadow-sm"
      aria-label={direction === 'left' ? 'Previous review' : 'Next review'}
    >
      <Icon className="w-5 h-5" />
    </button>
  );
}

export default function GoogleReviews({ onBookAppointment }) {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
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
    <section className="scroll-mt-24 pt-4 mt-8 md:mt-0">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 md:mb-10">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <GoogleLogo />
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Reviews</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#002d5c]">
            What Our Patients Say
          </h2>
          <div className="flex items-center gap-2 mt-2">
            <StarRating rating={5} />
            <span className="text-sm text-gray-500 font-medium">4.9 out of 5 based on Google Reviews</span>
          </div>
        </div>
        {/* Nav arrows */}
        <div className="hidden sm:flex items-center gap-2">
          <SlickArrow direction="left" onClick={() => sliderRef.current?.slickPrev()} />
          <SlickArrow direction="right" onClick={() => sliderRef.current?.slickNext()} />
        </div>
      </div>

      {/* Slider Review Cards */}
      <Slider ref={sliderRef} {...settings}>
        {reviews.map((review, idx) => (
          <div key={idx}>
            <ReviewCard review={review} />
          </div>
        ))}
      </Slider>

      {/* Mobile nav arrows */}
      <div className="flex sm:hidden items-center justify-center gap-3 mt-4">
        <SlickArrow direction="left" onClick={() => sliderRef.current?.slickPrev()} />
        <SlickArrow direction="right" onClick={() => sliderRef.current?.slickNext()} />
      </div>

      {/* Book Appointment CTA */}
      <div className="text-center mt-8">
        <button
          onClick={onBookAppointment}
          className="inline-flex items-center gap-2 bg-[#00829b] hover:bg-[#006a7f] text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
        >
          Book Appointment
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
