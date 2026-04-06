import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function TestimonialFeatures({ onHeroEnquiry, onStickyBook }) {
  return (
    <section className="relative pt-4">
      {/* Dark banner with quote */}
      <div className="relative bg-[#002d5c] rounded-2xl md:rounded-[2rem] overflow-hidden pt-12 md:pt-20 pb-16 md:pb-56 px-6 md:px-14 lg:px-16 shadow-2xl">
        <div className="absolute inset-0 z-0">
          <img
            src="./assets/advanced_testimonial.png"
            className="w-full h-full object-cover object-right"
            alt="Eye Exam"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#002d5c] via-[#002d5c]/90 to-transparent"></div>
        </div>
        <div className="relative z-10 w-full md:w-[70%] lg:w-[65%] text-white">
          <h2 className="text-xl md:text-3xl font-bold mb-3 md:mb-4">What Patients Say About Advanced Focus</h2>
          <div className="text-5xl md:text-7xl font-serif text-white leading-none mb-[-0.8rem] md:mb-[-1.5rem]">&ldquo;</div>
          <p className="text-sm md:text-base text-gray-200 leading-relaxed mb-4 md:mb-6 font-light">
            I recently underwent LASIK surgery performed by Dr. Anuja, and I'm thrilled to share that it was a complete success. My vision is now perfect, and I couldn't be happier with the results. The entire experience was smooth, professional, and reassuring, and the office atmosphere was warm and welcoming.
          </p>
          <p className="font-bold text-white text-sm md:text-base">– Sujith Dasari</p>
        </div>
      </div>

      {/* Overlapping Feature Cards */}
      <div className="relative z-30 flex flex-col sm:flex-row gap-6 px-4 sm:px-6 mt-10 sm:-mt-32 md:-mt-36">
        {/* Card 1 */}
        <div className="flex-1 rounded-2xl overflow-hidden relative shadow-2xl min-h-[220px] sm:h-72 md:h-[300px] bg-[#002d5c] group cursor-pointer border border-white/10">
          <img src="./assets/advanced_3.png" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="LASIK Technology" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#002d5c] via-[#002d5c]/70 to-transparent"></div>
          <div className="absolute inset-0 p-6 flex flex-col justify-end">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 leading-tight drop-shadow-lg">Advanced LASIK Evaluation with Modern Technology</h3>
            <button onClick={onHeroEnquiry} className="bg-white/20 backdrop-blur-md hover:bg-white/30 border border-white/30 text-white text-sm md:text-base font-bold py-3 md:py-3.5 px-6 md:px-7 rounded-xl shadow-lg w-max flex items-center gap-2.5 transition-all group/btn">
              Enquiry Now <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex-1 rounded-2xl overflow-hidden relative shadow-2xl min-h-[220px] sm:h-72 md:h-[300px] bg-[#00829b] group cursor-pointer border border-white/10">
          <img src="./assets/advanced_2.png" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 object-top" alt="Ophthalmologist Expert" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#00829b] via-[#00829b]/70 to-transparent"></div>
          <div className="absolute inset-0 p-6 flex flex-col justify-end">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 leading-tight drop-shadow-lg">Expert Refractive Care with Personalized Guidance</h3>
            <button onClick={onStickyBook} className="bg-white hover:bg-gray-100 text-[#00829b] text-sm md:text-base font-bold py-3 md:py-3.5 px-6 md:px-7 rounded-xl shadow-lg w-max flex items-center gap-2.5 transition-all group/btn">
              Book Appointment <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
