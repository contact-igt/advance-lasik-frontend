import React from 'react';
import { CheckCircle2, X } from 'lucide-react';

export default function Toast({ visible, onClose }) {
  if (!visible) return null;

  return (
    <div className="fixed top-4 right-4 z-[60] bg-green-500 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 animate-bounce">
      <CheckCircle2 className="w-6 h-6" />
      <div className="font-semibold">Consultation requested successfully!</div>
      <button
        onClick={onClose}
        className="ml-4 hover:bg-green-600 rounded-full p-1"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
