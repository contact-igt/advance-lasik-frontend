import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import ConsultationForm from './ConsultationForm';

export default function FormModal({ isOpen, onClose, onSubmit }) {
  const nameRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => nameRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div className="relative w-full max-w-md animate-modal-enter">
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 z-10 bg-white hover:bg-gray-100 text-gray-600 hover:text-gray-900 rounded-full p-1.5 shadow-lg transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
        <ConsultationForm nameRef={nameRef} formId="modal" onSubmit={onSubmit} />
      </div>
    </div>
  );
}
