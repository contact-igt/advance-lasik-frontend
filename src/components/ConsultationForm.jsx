import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function ConsultationForm({ nameRef, formId, onSubmit }) {
  const [loading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      mobile: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Name is required')
        .matches(/^[A-Za-z\s']+$/, 'Enter valid name'),
      mobile: Yup.string()
        .matches(/^[0-9]{10}$/, 'Mobile must be 10 digits')
        .required('Mobile is required'),
    }),
    onSubmit: async (value, Formik) => {
      try {
        setIsLoading(true);

        const ipResponse = await fetch('https://api.ipify.org?format=json');
        const ipData = await ipResponse.json();

        const Formdata = {
          Name: value.name,
          MobileNumber: value.mobile,
          IP_Address: ipData.ip,
          utm_source: localStorage.getItem('utm_source') || '',
        };

        const params = new URLSearchParams();
        Object.keys(Formdata).forEach((key) => {
          params.append(key, Formdata[key]);
        });

        const res = await fetch(
          'https://script.google.com/macros/s/AKfycbxMOdN0cGgBdcWeDInFUtn5h_M4cD5nwnd0xMLyyz-lbZFGXc6sOyqQjfKC_-7vaiCW/exec',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: params.toString(),
          }
        );

        if (!res.ok) throw new Error('Submission failed');

        const data = await res.json();

        Formik.resetForm();
        
        // Trigger the parent's success handler (navigates to thank-you)
        if (onSubmit) {
          onSubmit({ preventDefault: () => {} });
        }
      } catch (err) {
        console.error('Error:', err);
        // Ensure parent toast is not triggered on failure if needed
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
      <div className="p-6 pb-0">
        <div className="bg-[#00829b] p-6 text-center rounded-xl shadow-inner relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#002d5c]/20 to-transparent pointer-events-none"></div>
          <h3 className="text-2xl font-bold text-white mb-1 relative z-10">Book Your Consultation</h3>
          <p className="text-teal-50 text-sm relative z-10">
            Fill the form below and we will get back to you soon.
          </p>
        </div>
      </div>

      <div className="p-6">
        <form id={formId} onSubmit={formik.handleSubmit} className="space-y-4">
          <div>
            <label htmlFor={`${formId}-name`} className="sr-only">Name</label>
            <input
              ref={nameRef}
              type="text"
              id={`${formId}-name`}
              className="block w-full px-4 py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00829b] focus:border-[#00829b] bg-white text-gray-900 placeholder-gray-500 transition-colors"
              placeholder="Name"
              {...formik.getFieldProps('name')}
            />
            {formik.touched.name && formik.errors.name && (
              <small className="text-red-500 text-sm flex mt-1">{formik.errors.name}</small>
            )}
          </div>
          
          <div>
            <label htmlFor={`${formId}-mobile`} className="sr-only">Mobile Number</label>
            <input
              type="text"
              id={`${formId}-mobile`}
              className="block w-full px-4 py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00829b] focus:border-[#00829b] bg-white text-gray-900 placeholder-gray-500 transition-colors"
              placeholder="Mobile"
              {...formik.getFieldProps('mobile')}
            />
            {formik.touched.mobile && formik.errors.mobile && (
              <small className="text-red-500 text-sm flex mt-1">{formik.errors.mobile}</small>
            )}
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 px-4 rounded-lg shadow-md text-lg font-bold text-white bg-[#002d5c] hover:bg-[#001a3a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#002d5c] disabled:bg-[#002d5c]/70 disabled:cursor-not-allowed transition-all mt-2"
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
}
