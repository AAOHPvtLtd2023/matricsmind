import React from 'react';
import { Folder, BookOpen, Video, Clock, CheckCircle } from 'lucide-react';

const ExpertLedComponent = () => {
  const features = [
    {
      icon: Folder,
      title: "Expert-Led",
      description: "Creative Direction from Experienced Branding Experts"
    },
    {
      icon: BookOpen,
      title: "Custom Scripts",
      description: "Custom Storyboarding & Script Assistance"
    },
    {
      icon: Video,
      title: "Cinematic Gear",
      description: "High-End Cameras, Lighting & Editing"
    },
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "Flexible Scheduling & Quick Turnaround"
    },
    {
      icon: CheckCircle,
      title: "Trusted Globally",
      description: "Trusted by Over 300+ Brands Globally"
    }
  ];

  return (
    <div className="bg-white py-12 w-[90vw] flex justify-self-center border rounded-2xl">
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide">Why Choose Us?</h2>
          <p className="mt-2 text-4xl font-extrabold text-gray-900">Choose Excellence, Choose Us</p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            We deliver tailored solutions with seamless execution, ensuring every detail works for you.
          </p>
        </div>
        
        <div className="mt-10 overflow-x-auto scrollbar-hide">
          <div className="flex gap-6 min-w-max px-4 sm:px-0">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-indigo-800 p-6 rounded-lg text-center flex-shrink-0 w-64 sm:w-72 hover:bg-indigo-700 transition-all duration-300 hover:scale-105 hover:shadow-xl group cursor-pointer"
                >
                  <div className="mx-auto h-12 w-12 text-white group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-12 w-12" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-white group-hover:text-indigo-100 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-indigo-200 group-hover:text-indigo-100 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Mobile responsive grid fallback for smaller screens */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:hidden">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-indigo-800 p-6 rounded-lg text-center hover:bg-indigo-700 transition-all duration-300 hover:scale-105 hover:shadow-xl group cursor-pointer"
              >
                <div className="mx-auto h-12 w-12 text-white group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="h-12 w-12" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-white group-hover:text-indigo-100 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-indigo-200 group-hover:text-indigo-100 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExpertLedComponent;