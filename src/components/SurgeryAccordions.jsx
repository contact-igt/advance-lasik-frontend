import React, { useState } from 'react';
import { ChevronDown, Plus, Minus } from 'lucide-react';

const SURGERY_ITEMS = [
  {
    title: 'Advanced LASIK Evaluation and Customized Planning',
    content: 'Before treatment, your eyes are evaluated in detail to understand refractive error, eye structure, pressure, and dryness. This helps the team plan a customized, minimally invasive LASIK approach designed for better safety and visual outcomes.',
  },
  {
    title: 'Lenstar 900 Pro for Advanced LASIK Scanning',
    content: 'Advanced Focus uses the Lenstar 900 Pro, an extremely accurate biometer designed for advanced LASIK scanning. It provides precise measurements that support better treatment planning and the best possible visual results.',
  },
  {
    title: 'Trans PRK for Flap-Free Vision Correction',
    content: 'Trans PRK Surgery is offered as a cutting-edge laser procedure that reshapes the cornea without requiring a flap to treat myopia, hyperopia, and astigmatism. It is a valuable refractive option when a flap-free surface treatment is preferred.',
  },
  {
    title: 'ICL Options When LASIK Is Not Suitable',
    content: 'For patients who are not ideal candidates for LASIK, Advanced Focus also offers Implantable Collamer Lens (ICL) surgery. This advanced, stitch-free procedure helps achieve sharp, natural vision even when LASIK may not be the best fit.',
  },
  {
    title: 'Minimally Invasive Technique with Eye-Safety Focus',
    content: 'Guided by Dr. Anuja\'s eye-safety-first philosophy, treatments are designed to be minimally invasive, precise, and tailored to the unique needs of each eye.',
  },
  {
    title: 'Structured Follow-Up for Comfortable Recovery',
    content: 'Beyond technology and treatment, the hospital emphasizes patient comfort, clear communication, and careful follow-up so patients feel secure, informed, and well cared for throughout their LASIK journey.',
  },
];

export default function SurgeryAccordions() {
  const [openIndex, setOpenIndex] = useState(1);

  return (
    <section className="bg-[#fdf6e3] p-6 md:p-10 rounded-xl md:rounded-2xl border border-[#e8d9b8] shadow-sm">
      <h2 className="text-2xl md:text-3xl font-bold text-[#002d5c] mb-4 md:mb-6">
        Advanced LASIK at Advanced Focus
      </h2>
      <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
        At Advanced Focus Eye Hospital, LASIK is not just about reducing dependence on glasses or contact lenses — it is about restoring clearer vision with precision, safety, and confidence. With expert refractive care, advanced diagnostics, and a customized approach, treatment is planned according to each eye's structure, pressure, dryness, and vision needs.
      </p>

      <div className="space-y-4">
        {SURGERY_ITEMS.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`border-2 rounded-xl overflow-hidden transition-all duration-300 ${
                isOpen
                  ? 'border-[#00829b] bg-[#f4f7f9]'
                  : 'border-gray-100 bg-white hover:border-gray-200'
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                className="w-full text-left px-4 md:px-6 py-4 md:py-6 flex items-center justify-between gap-4 focus:outline-none"
              >
                <span className={`text-[15px] md:text-lg font-bold transition-colors duration-300 ${isOpen ? 'text-[#00829b]' : 'text-[#002d5c]'}`}>
                  {item.title}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#00829b] text-white rotate-180' : 'bg-gray-100 text-[#002d5c]'}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              
              <div 
                className={`transition-all duration-500 ease-in-out ${
                  isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <div className="px-4 md:px-6 pb-6 md:pb-8 text-sm md:text-base text-gray-600 leading-relaxed pt-2 border-t border-gray-100/50">
                  {item.content}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}