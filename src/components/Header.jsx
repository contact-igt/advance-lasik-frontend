import React from 'react';
import { Eye, Phone, ArrowRight } from 'lucide-react';

export default function Header({ onEnquiry }) {
  return (
    <header className="sticky top-0 z-50 bg-[#f9f5f0] shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-28">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="/assets/logo.png" alt="Logo" className="h-16 w-auto md:h-24 md:w-auto object-contain" />
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-5">
            <a
              href="tel:+919505116789"
              className="hidden sm:flex items-center gap-2.5 bg-white px-5 py-3 rounded-lg border border-gray-100 shadow-sm text-gray-800 font-bold hover:shadow-md transition-shadow text-[15px]"
            >
              <Phone className="w-4 h-4 text-[#00829b]" />
              <span>+91 95051 16789</span>
            </a>
            <a
              href="tel:+919505116789"
              className="sm:hidden flex items-center justify-center bg-[#002d5c] p-2.5 rounded-lg shadow-md hover:bg-[#001a3a] transition-colors"
              aria-label="Call Now"
            >
              <Phone className="w-5 h-5 text-white" />
            </a>
            <button
              onClick={onEnquiry}
              className="flex items-center gap-2 bg-[#00829b] hover:bg-[#002d5c] text-white px-4 md:px-7 py-2.5 md:py-3 rounded-lg font-bold transition-colors shadow-md text-sm md:text-base tracking-wide"
            >
              Enquiry Now <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
