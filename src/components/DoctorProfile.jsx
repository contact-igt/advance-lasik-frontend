import React from 'react';

export default function DoctorProfile({ onBookConsultation }) {
  return (
    <section className="scroll-mt-24 px-4 sm:px-0">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#002d5c] mb-8 md:mb-10 text-center md:text-left">
        Expert LASIK Specialist in Hyderabad
      </h2>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-10">
        {/* Text - Left Side */}
        <div className="w-full md:w-7/12 order-2 md:order-1 text-center md:text-left">
          <div className="text-sm md:text-base text-gray-700 space-y-4 md:space-y-5">
            <p>
              Dr. Anuja Pasham, the founder of Advanced Focus Eye Hospital, is a skilled ophthalmologist with over 14 years of experience. She began her career as a refractive surgeon, specializing in cataract and LASIK procedures. With a strong commitment to eye safety, she focuses on customized, minimally invasive treatment based on each patient's unique eye structure and needs.
            </p>
          </div>

          {/* Key Credentials */}
          <div className="mt-6 md:mt-8 grid grid-cols-2 gap-3 md:gap-4">
            <div className="bg-[#f9f5f0] p-3 md:p-4 rounded-xl border border-gray-100">
              <span className="block text-[10px] md:text-[11px] font-bold text-[#00829b] uppercase tracking-widest mb-1 opacity-80">Specialisation</span>
              <span className="text-sm md:text-base font-bold text-[#002d5c]">Phaco &amp; LASIK Surgery</span>
            </div>
            <div className="bg-[#f9f5f0] p-3 md:p-4 rounded-xl border border-gray-100">
              <span className="block text-[10px] md:text-[11px] font-bold text-[#00829b] uppercase tracking-widest mb-1 opacity-80">Practice Location</span>
              <span className="text-sm md:text-base font-bold text-[#002d5c]">Hyderabad – Advanced Focus Eye Hospital</span>
            </div>
          </div>

          <button
            onClick={onBookConsultation}
            className="mt-6 md:mt-8 inline-flex items-center gap-2 bg-[#002d5c] hover:bg-[#001a3a] text-white font-semibold py-3 md:py-3.5 px-6 md:px-8 rounded-lg transition-colors duration-300 shadow-md text-sm md:text-base"
          >
            Book Your Consultation Today
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </button>
        </div>

        {/* Photo - Right Side with Yellow Circle */}
        <div className="w-full md:w-5/12 order-1 md:order-2 flex-shrink-0 flex flex-col items-center">
          <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80">
            {/* Yellow circle background */}
            <div className="absolute inset-0 rounded-full bg-[#e8b94a]"></div>
            {/* Doctor image */}
            <img
              src="/assets/anuja_pasham.png"
              alt="Dr. Anuja Pasham"
              className="relative z-10 w-full h-full object-cover object-top rounded-full"
            />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-[#002d5c] mt-4 md:mt-6 text-center">
            Dr. Anuja Pasham
          </h3>
          <p className="text-[#00829b] text-sm md:text-base text-center mt-1">
            M.S (Ophthalmology) – Phaco &amp; Refractive Specialist
          </p>
        </div>
      </div>
    </section>
  );
}
