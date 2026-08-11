import React from 'react'

function AboutCourseSkeleton() {
  return (
<section className="relative w-full overflow-visible py-16 sm:py-20 md:py-24 bg-white dark:bg-gray-900">
  {/* Background skeleton */}
  <div className="absolute inset-0 z-0 bg-gray-200 dark:bg-gray-800" />
  <div className="absolute inset-0 opacity-90 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 z-0 backdrop-blur-sm" />

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-start gap-6 md:gap-8">
    {/* Content skeleton */}
    <div className="w-full md:w-[85%] lg:w-[88%] text-center md:text-left z-20 pt-5 space-y-6">
      {/* Title skeleton */}
      <div className="space-y-3">
        <div className="h-8 w-3/4 bg-gray-300 dark:bg-gray-700 rounded mx-auto md:mx-0 animate-pulse" />
        <div className="h-8 w-full bg-gray-300 dark:bg-gray-700 rounded animate-pulse" />
        <div className="h-8 w-2/3 bg-gray-300 dark:bg-gray-700 rounded mx-auto md:mx-0 animate-pulse" />
      </div>

      {/* Paragraph skeletons */}
      <div className="space-y-4">
        <div className="h-5 w-full bg-gray-300 dark:bg-gray-700 rounded animate-pulse" />
        <div className="h-5 w-11/12 bg-gray-300 dark:bg-gray-700 rounded animate-pulse" />
        <div className="h-5 w-10/12 bg-gray-300 dark:bg-gray-700 rounded animate-pulse" />
        <div className="h-5 w-9/12 bg-gray-300 dark:bg-gray-700 rounded animate-pulse" />
      </div>

      {/* Extras skeleton */}
      <div className="pt-2 space-y-4">
        <div className="flex items-center space-x-3">
          <div className="h-6 w-6 bg-gray-300 dark:bg-gray-700 rounded-full animate-pulse" />
          <div className="h-6 w-1/4 bg-gray-300 dark:bg-gray-700 rounded animate-pulse" />
        </div>
        <ul className="space-y-3 pl-2">
          {[...Array(3)].map((_, i) => (
            <li key={i} className="flex items-start space-x-3">
              <div className="h-5 w-5 bg-gray-300 dark:bg-gray-700 rounded-full animate-pulse mt-1" />
              <div className="h-5 w-full bg-gray-300 dark:bg-gray-700 rounded animate-pulse" />
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Form skeleton */}
    <div className="w-full md:w-[55%] lg:w-[52%] sticky top-6 z-10">
      <div className="rounded-xl shadow-lg p-5 sm:p-6 md:p-6 lg:p-7 bg-gray-100 dark:bg-gray-800 animate-pulse">
        <div className="space-y-5">
          <div className="h-8 w-1/2 bg-gray-300 dark:bg-gray-700 rounded mx-auto" />
          {[...Array(4)].map((_, i) => (
            <div key={i} className="space-y-2">
              <div className="h-4 w-1/3 bg-gray-300 dark:bg-gray-700 rounded" />
              <div className="h-10 w-full bg-gray-300 dark:bg-gray-700 rounded" />
            </div>
          ))}
          <div className="h-12 w-full bg-gray-300 dark:bg-gray-700 rounded" />
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default AboutCourseSkeleton