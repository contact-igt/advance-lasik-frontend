import React from 'react';
import ConsultationForm from './ConsultationForm';
import StatsStrip from './StatsStrip';

export default function HeroSection({ heroNameRef, onSubmit }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 mt-6 lg:mt-12 w-full">
      {/* Hero Banner */}
      <div className="relative w-full rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-2xl bg-[#002d5c] flex flex-col">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/banner_image.png"
            alt="Hospital interior"
            className="w-full h-full object-cover object-center opacity-40 mix-blend-overlay"
          />
            <div className="absolute inset-0 bg-gradient-to-r from-[#001a38]/80 via-[#002d5c]/60 to-[#002d5c]/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col lg:flex-row w-full flex-grow pt-12 pb-12 px-6 sm:px-12 lg:pt-32 lg:pb-28 lg:px-16 xl:px-10 items-start lg:items-center justify-between gap-6 lg:gap-10 min-h-[320px] sm:min-h-[380px] md:min-h-[500px] lg:min-h-[650px] xl:min-h-[750px]">
          {/* Left Text */}
          <div className="w-full lg:w-7/12 pt-4 lg:pt-0">
            <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-[5rem] xl:text-[5.5rem] font-bold text-white mb-1.5 md:mb-2 leading-none drop-shadow-lg">
              Advanced
            </h1>
            <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-[5rem] xl:text-[5.5rem] font-bold text-[#00829b] mb-1.5 md:mb-2 leading-none drop-shadow-lg brightness-125">
              Precise
            </h1>
            <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-[5rem] xl:text-[5.5rem] font-bold text-white mb-4 md:mb-6 leading-none drop-shadow-lg">
              LASIK
            </h1>
            <p className="text-xl sm:text-2xl md:text-2xl lg:text-2.9xl text-white font-medium drop-shadow-md mt-3 md:mt-4 leading-snug max-w-xl">
              Advanced LASIK care for clearer vision and reduced dependence on glasses or contact lenses
            </p>
          </div>

          {/* Right: Form Container — hidden on mobile, shown on desktop */}
          <div className="hidden lg:block w-full lg:w-5/12 max-w-[480px] mx-auto lg:mx-0 relative z-20">
            <ConsultationForm nameRef={heroNameRef} formId="hero" onSubmit={onSubmit} />
          </div>
        </div>

        {/* Stats Strip — inside banner on desktop */}
        <div className="hidden lg:block">
          <StatsStrip />
        </div>
      </div>

      {/* Mobile/Tablet: Form first, then Stats */}
      <div className="lg:hidden mt-4 px-2">
        <ConsultationForm nameRef={heroNameRef} formId="hero-mobile" onSubmit={onSubmit} />
      </div>
      <div className="lg:hidden mt-4 px-2">
        <StatsStrip />
      </div>
    </div>
  );
}
