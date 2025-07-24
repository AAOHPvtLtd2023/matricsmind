import React from 'react';

const ExpertLedComponent = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide">Why Choose Us?</h2>
          <p className="mt-2 text-4xl font-extrabold text-gray-900">Choose Excellence, Choose Us</p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            We deliver tailored solutions with seamless execution, ensuring every detail works for you.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-indigo-800 p-6 rounded-lg text-center">
            <div className="mx-auto h-12 w-12 text-white">
              <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-medium text-white">Expert-Led</h3>
            <p className="mt-2 text-sm text-indigo-200">Creative Direction from Experienced Branding Experts</p>
          </div>
          <div className="bg-indigo-800 p-6 rounded-lg text-center">
            <div className="mx-auto h-12 w-12 text-white">
              <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-medium text-white">Custom Scripts</h3>
            <p className="mt-2 text-sm text-indigo-200">Custom Storyboarding & Script Assistance</p>
          </div>
          <div className="bg-indigo-800 p-6 rounded-lg text-center">
            <div className="mx-auto h-12 w-12 text-white">
              <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14m-6 0v5m-4-5v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-medium text-white">Cinematic Gear</h3>
            <p className="mt-2 text-sm text-indigo-200">High-End Cameras, Lighting & Editing</p>
          </div>
          <div className="bg-indigo-800 p-6 rounded-lg text-center">
            <div className="mx-auto h-12 w-12 text-white">
              <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-medium text-white">Fast Delivery</h3>
            <p className="mt-2 text-sm text-indigo-200">Flexible Scheduling & Quick Turnaround</p>
          </div>
          <div className="bg-indigo-800 p-6 rounded-lg text-center">
            <div className="mx-auto h-12 w-12 text-white">
              <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.5-3.5a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-medium text-white">Trusted Globally</h3>
            <p className="mt-2 text-sm text-indigo-200">Trusted by Over 300+ Brands Globally</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertLedComponent;