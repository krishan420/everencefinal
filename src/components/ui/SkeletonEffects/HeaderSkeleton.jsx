import React from "react";

export const HeaderSkeleton = () => {
  return (
    <header className="fixed top-0 z-50 w-full dark:bg-gray-800 bg-gray-100 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo Skeleton */}
          <div className="flex items-center">
            <div className="h-12 w-32 rounded-md dark:bg-gray-700 bg-gray-300 animate-pulse"></div>
          </div>

          {/* Desktop Navigation Skeleton - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-6">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex items-center space-x-1">
                <div className="h-5 w-5 rounded-full dark:bg-gray-700 bg-gray-300 animate-pulse"></div>
                <div className="h-4 w-16 rounded-md dark:bg-gray-700 bg-gray-300 animate-pulse"></div>
              </div>
            ))}
          </div>
          {/* Search Bar Skeleton */}
          <div className="flex">
            <div className="relative ml-4 w-48">
              <div className="h-8 rounded-md dark:bg-gray-700 bg-gray-300 animate-pulse"></div>
            </div>

            {/* Theme Toggle Skeleton */}
            <div className="ml-4 h-8 w-8 rounded-full dark:bg-gray-700 bg-gray-300 animate-pulse"></div>
          </div>



          {/* Mobile Skeleton Header */}
          <div className="md:hidden flex justify-between items-center px-4 py-3">
            {/* Logo Skeleton */}
            <div className="h-8 w-8 rounded-full bg-gray-300 dark:bg-gray-700 animate-pulse" />

            {/* Right controls skeleton */}
            <div className="flex items-center space-x-4">
              {/* Theme toggle skeleton */}
              <div className="h-6 w-6 rounded-full bg-gray-300 dark:bg-gray-700 animate-pulse" />

              {/* Mobile menu button skeleton */}
              <div className="h-6 w-6 bg-gray-300 dark:bg-gray-700 animate-pulse rounded" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
