import React from 'react';

const ContactSkeleton = () => {
  return (
    <div id="contact-us" className="w-full px-4 py-12 md:py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
        {/* Main Container */}
        <div className="relative md:flex">
          {/* Map Section Skeleton */}
          <div className="w-full md:w-1/2 h-[400px] md:h-[500px] bg-gray-100 dark:bg-gray-700 relative">
            {/* Map Placeholder */}
            <div className="w-full h-full bg-gray-200 dark:bg-gray-600 animate-pulse"></div>
            
            {/* Toggle Button Skeleton */}
            <div className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-lg z-10">
              <div className="h-5 w-5 bg-gray-300 dark:bg-gray-500 rounded-full"></div>
            </div>
            
            {/* Show Form Button Skeleton */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <div className="px-6 py-3 bg-gray-300 dark:bg-gray-600 text-transparent font-medium rounded-lg shadow-md">
                Show Contact Form
              </div>
            </div>
          </div>

          {/* Form Section Skeleton */}
          <div className="w-full md:w-1/2 p-6 md:p-8">
            <div className="flex justify-between items-center mb-6">
              <div className="h-8 w-32 bg-gray-200 dark:bg-gray-600 rounded animate-pulse"></div>
              <div className="h-6 w-6 bg-gray-200 dark:bg-gray-600 rounded-full"></div>
            </div>

            <div className="space-y-5">
              {/* Name Field */}
              <div className="space-y-2">
                <div className="h-4 w-24 bg-gray-200 dark:bg-gray-600 rounded animate-pulse"></div>
                <div className="w-full h-10 bg-gray-200 dark:bg-gray-600 rounded-lg animate-pulse"></div>
              </div>

              {/* Phone Field */}
              <div className="space-y-2">
                <div className="h-4 w-32 bg-gray-200 dark:bg-gray-600 rounded animate-pulse"></div>
                <div className="w-full h-10 bg-gray-200 dark:bg-gray-600 rounded-lg animate-pulse"></div>
              </div>

              {/* Course Field */}
              <div className="space-y-2">
                <div className="h-4 w-36 bg-gray-200 dark:bg-gray-600 rounded animate-pulse"></div>
                <div className="w-full h-10 bg-gray-200 dark:bg-gray-600 rounded-lg animate-pulse"></div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <div className="w-full h-12 bg-gray-300 dark:bg-gray-600 rounded-lg animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSkeleton;