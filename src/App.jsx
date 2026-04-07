import React, { useState, useRef } from 'react';
import Toast from './components/Toast';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import DoctorProfile from './components/DoctorProfile';
import CataractInfo from './components/CataractInfo';
import SurgeryAccordions from './components/SurgeryAccordions';
import HowIsItUnique from './components/HowIsItUnique';
import CandidatesSection from './components/CandidatesSection';
import VideoTestimonials from './components/VideoTestimonials';
import TestimonialFeatures from './components/TestimonialFeatures';
import FaqAccordions from './components/FaqAccordions';
import StickyForm from './components/StickyForm';
import MobileActionBar from './components/MobileActionBar';
import FormModal from './components/FormModal';
import ThankYou from './components/ThankYou';
import useUTMSource from './hooks/useUTMSource';
import { Routes, Route, useNavigate } from 'react-router-dom';
import GoogleReviews from './components/GoogleReviews';

function LandingContent({ heroNameRef, stickyNameRef, handleFormSubmit, scrollToFocus, showToast, setShowToast, isModalOpen, setIsModalOpen }) {
  return (
    <div className="text-gray-800 antialiased bg-[#f8f9fa] relative min-h-screen flex flex-col pb-16 lg:pb-0">
      <Toast visible={showToast} onClose={() => setShowToast(false)} />
      <Header onEnquiry={() => setIsModalOpen(true)} />
      <HeroSection heroNameRef={heroNameRef} onSubmit={handleFormSubmit} />
      <main className="w-full max-w-7xl mx-auto px-5 sm:px-6 relative z-30 pb-20 lg:pb-24 flex-grow">
        <div className="w-full flex flex-col lg:flex-row items-start lg:gap-16">
          <div className="w-full lg:w-8/12 py-6 lg:py-16 space-y-12 md:space-y-16 lg:space-y-24">
            <DoctorProfile onBookConsultation={() => setIsModalOpen(true)} />
            <CataractInfo />
            <GoogleReviews onBookAppointment={() => setIsModalOpen(true)} />
            <SurgeryAccordions />
            <HowIsItUnique />
            <CandidatesSection />
            {/* <VideoTestimonials /> */}
            <TestimonialFeatures
              onHeroEnquiry={() => setIsModalOpen(true)}
              onStickyBook={() => setIsModalOpen(true)}
            />
            <FaqAccordions />
          </div>
          <aside className="hidden lg:block lg:w-4/12 sticky top-24 h-fit pt-14">
            <StickyForm nameRef={stickyNameRef} onSubmit={handleFormSubmit} />
          </aside>
        </div>
      </main>
      <MobileActionBar onBook={() => setIsModalOpen(true)} />
      <FormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleFormSubmit} />
    </div>
  );
}

export default function App() {
  useUTMSource();
  const navigate = useNavigate();
  const heroNameRef = useRef(null);
  const stickyNameRef = useRef(null);
  const [showToast, setShowToast] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    window.location.href = "/thank-you";
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToFocus = (ref) => {
    ref.current?.focus();
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <LandingContent
            heroNameRef={heroNameRef}
            stickyNameRef={stickyNameRef}
            handleFormSubmit={handleFormSubmit}
            scrollToFocus={scrollToFocus}
            showToast={showToast}
            setShowToast={setShowToast}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        }
      />
      <Route path="/thank-you" element={
        <>
          <Header onEnquiry={() => { navigate('/'); setTimeout(() => setIsModalOpen(true), 100); }} />
          <ThankYou onBackToHome={() => navigate('/')} />
        </>
      } />
    </Routes>
  );
}
