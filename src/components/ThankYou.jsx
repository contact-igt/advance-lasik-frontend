import React from 'react';
import { CheckCircle2, Home, PhoneCall, Clock, Shield, Star } from 'lucide-react';

export default function ThankYou({ onBackToHome }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f0f4f8] to-[#e8ecf1] pb-12 font-sans">

      {/* Hero Banner */}
      <div className="relative bg-[#002d5c] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#002d5c] via-[#003d6b] to-[#00829b] opacity-90"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white/20 blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-[#00829b]/30 blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-2xl mx-auto text-center px-5 pt-10 pb-14 sm:pt-14 sm:pb-20">
          {/* Success Icon */}
          <div className="mb-5 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-full scale-[1.8] animate-ping opacity-20"></div>
              <div className="bg-white/15 backdrop-blur-sm rounded-full p-5 border border-white/20">
                <CheckCircle2 className="w-12 h-12 sm:w-14 sm:h-14 text-white" />
              </div>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2 leading-tight">
            Booking Confirmed!
          </h1>
          <p className="text-base sm:text-lg text-white/80 font-medium mb-1">
            Your consultation request has been received.
          </p>
          <p className="text-white/60 text-sm sm:text-base max-w-md mx-auto">
            Our team is reviewing your details.
            <span className="text-[#7dd3fc] font-semibold"> Expect a callback within 15 minutes.</span>
          </p>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60V20C240 0 480 40 720 30C960 20 1200 0 1440 20V60H0Z" fill="#f0f4f8" />
          </svg>
        </div>
      </div>

      {/* What Happens Next Steps */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 -mt-2">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8">
          <h2 className="text-lg sm:text-xl font-bold text-[#002d5c] mb-5 text-center">What Happens Next?</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#00829b]/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-[#00829b]" />
              </div>
              <div>
                <h3 className="font-bold text-[#002d5c] text-sm sm:text-base">Quick Callback</h3>
                <p className="text-gray-500 text-xs sm:text-sm">Our coordinator will call you within 15 minutes to confirm your appointment slot.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#00829b]/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-[#00829b]" />
              </div>
              <div>
                <h3 className="font-bold text-[#002d5c] text-sm sm:text-base">Pre-Consultation Guidance</h3>
                <p className="text-gray-500 text-xs sm:text-sm">You'll receive preparation instructions and any documents needed for your visit.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#00829b]/10 flex items-center justify-center">
                <Star className="w-5 h-5 text-[#00829b]" />
              </div>
              <div>
                <h3 className="font-bold text-[#002d5c] text-sm sm:text-base">Expert Consultation</h3>
                <p className="text-gray-500 text-xs sm:text-sm">Meet Dr. Anuja Pasham for a thorough eye examination and personalized treatment plan.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
          <button
            onClick={onBackToHome}
            className="flex items-center justify-center gap-2.5 bg-white hover:bg-gray-50 border-2 border-gray-200 text-gray-700 font-bold py-3.5 px-6 rounded-xl transition-all group shadow-sm"
          >
            <Home className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
            Back to Home
          </button>

          <a
            href="https://wa.me/919505116789"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1fb855] text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-[#25D366]/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp Support
          </a>
        </div>

        {/* Emergency Helpline */}
        <div className="mt-5 bg-[#002d5c] rounded-xl p-4 flex items-center justify-between">
          <div>
            <p className="text-[10px] text-white/50 uppercase tracking-widest font-bold mb-0.5">Emergency Helpline</p>
            <a href="tel:+919505116789" className="text-white font-bold text-base hover:text-[#7dd3fc] transition-colors">
              +91 95051 16789
            </a>
          </div>
          <a href="tel:+919505116789" className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg p-2.5 transition-colors">
            <PhoneCall className="w-5 h-5 text-white" />
          </a>
        </div>
      </div>

      {/* Video Section */}
      <div className="max-w-3xl w-full mx-auto mt-10 sm:mt-14 px-4 sm:px-6">
        <div className="text-center mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-[#002d5c] mb-1">
            Considering Cataract for Clear Vision?
          </h2>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="relative aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/sLoNDbUWeis?si=GsPrTyoKcuZCWJ76"
                title="Considering LASIK for clear vision?"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
