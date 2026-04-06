import React from 'react';
import ConsultationForm from './ConsultationForm';

export default function StickyForm({ nameRef, onSubmit }) {
  return (
    <div className="w-full relative z-40">
      <ConsultationForm nameRef={nameRef} formId="sticky" onSubmit={onSubmit} />
    </div>
  );
}
