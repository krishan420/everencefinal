import React from "react";

function TrainingCoursesSkeleton() {
  return (
    <section className="py-7 md:py-16 dark:bg-gray-900 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Skeleton */}
        <div className="text-center mb-12">
          <div className="h-10 w-1/2 mx-auto bg-gray-200 dark:bg-gray-700 rounded mb-4 animate-pulse"></div>
          <div className="h-6 w-3/4 mx-auto bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
        </div>

        {/* Courses Grid Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(12)].map((_, index) => (
            <div className="w-full max-w-sm mx-auto" key={index}>
              <div className="relative shadow-lg rounded-xl overflow-hidden bg-white dark:bg-gray-800 animate-pulse">
                {/* Image Placeholder */}
                <div className="h-56 w-full bg-gray-200 dark:bg-gray-700"></div>

                {/* Content Placeholder */}
                <div className="p-4 bg-white dark:bg-gray-900">
                  <div className="h-6 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-3"></div>
                  <div className="space-y-2">
                    <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
                    <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  </div>
                </div>

                {/* Footer Placeholder */}
                <div className="p-4 bg-white dark:bg-gray-900 flex justify-between items-center">
                  <div className="h-6 w-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  <div className="h-10 w-24 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrainingCoursesSkeleton;
