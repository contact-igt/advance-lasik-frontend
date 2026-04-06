import React from 'react';
import { Eye, Activity, Glasses, Sparkles, Award } from 'lucide-react';

const FEATURES = [
  { icon: <Eye className="w-6 h-6 text-white" />, title: 'Advanced Eye Evaluation', description: 'Your eyes are examined carefully using advanced diagnostic technology to assess suitability for LASIK and plan the right treatment accurately.' },
  { icon: <Activity className="w-6 h-6 text-white" />, title: 'Precision Technology', description: 'The Lenstar 900 Pro supports advanced LASIK scanning and highly accurate measurements for better treatment planning and visual outcomes.' },
  { icon: <Glasses className="w-6 h-6 text-white" />, title: 'Personalized Treatment', description: 'Treatment is customized based on factors like eye structure, pressure, dryness, and refractive needs rather than using a one-size-fits-all approach.' },
  { icon: <Sparkles className="w-6 h-6 text-white" />, title: 'Minimally Invasive Care', description: 'The hospital uses modern, minimally invasive techniques designed to improve comfort, accuracy, and safety.' },
  { icon: <Award className="w-6 h-6 text-white" />, title: 'Trusted Expertise', description: 'Dr. Anuja has over 14 years of experience and began her career as a refractive surgeon specializing in LASIK and cataract procedures.' },
];

export default function HowIsItUnique() {
  return (
    <section className="relative rounded-2xl overflow-hidden shadow-xl">
      <div className="absolute inset-0">
        <img src="./assets/how_its_unique.png" alt="Eye examination" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#002d5c]/85 mix-blend-multiply"></div>
      </div>
      <div className="relative z-10 p-6 md:p-12 lg:p-18">
        <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-8 md:mb-14">Why Is LASIK at Advanced Focus Unique?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {FEATURES.map((f, idx) => (
            <div key={idx} className="flex gap-4 md:gap-5 bg-white/10 backdrop-blur-sm border border-white/20 p-4 md:p-6 rounded-xl md:rounded-2xl hover:bg-white/20 transition-colors">
              <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#00829b] shadow-inner flex items-center justify-center">
                {f.icon}
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-base md:text-xl font-bold text-white mb-1 md:mb-2 leading-tight">{f.title}</h3>
                <p className="text-xs md:text-[15px] text-gray-200 leading-relaxed font-light">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

