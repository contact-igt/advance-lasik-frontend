import React from 'react';

const stats = [
  { value: '14+', label: 'Years of Experience' },
  { value: 'Advanced', label: 'LASIK Scanning' },
  { value: 'Customized', label: 'Eye Evaluation' },
  { value: 'Expert', label: 'Care in Hyderabad' },
];

function StatItem({ stat, textClass }) {
  return (
    <div className="px-2">
      <div className={`${textClass} font-bold text-white mb-1 flex items-center justify-center gap-1`}>
        {stat.value}
      </div>
      <div className={`${textClass === 'text-4xl' ? 'text-base text-teal-100 font-medium' : 'text-xs text-white/80 font-bold uppercase tracking-wide'}`}>
        {stat.label}
      </div>
    </div>
  );
}

export default function StatsStrip() {
  return (
    <>
      {/* Desktop: teal strip inside hero */}
      <div className="hidden lg:block bg-[#00829b]/95 backdrop-blur-md w-full relative z-20 border-t border-white/10">
        <div className="px-6 sm:px-10 lg:px-16 py-8">
          <div className="grid grid-cols-4 gap-6 text-center">
            {stats.map((stat, idx) => (
              <StatItem key={idx} stat={stat} textClass="text-3xl" />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile & Tablet: Brand Teal Stats Card */}
      <div className="lg:hidden bg-[#00829b] rounded-2xl w-full relative z-20 overflow-hidden shadow-lg border border-white/10">
        <div className="px-5 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
            {stats.map((stat, idx) => (
              <StatItem key={idx} stat={stat} textClass="text-xl" />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
