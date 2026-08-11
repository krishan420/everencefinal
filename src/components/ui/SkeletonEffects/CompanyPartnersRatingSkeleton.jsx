import React from 'react';

export default function CompanyPartnersRatingsSkeleton({ count = 6 }) {
    const skeletonItems = Array.from({ length: count });

    return (
        <section className="p-8 md:mt-[12vh] lg:py-[7vh] dark:bg-gray-800 bg-gray-100">
            <div className="container mx-auto px-4 mb-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-gray-800 mb-2">
                    Our Valued <span className='text-blue-600'>Partners</span>
                </h2>
                <p className="text-lg dark:text-gray-300 text-gray-600">
                    Collaborating with industry leaders to deliver excellence
                </p>
            </div>

            {/* Skeleton Marquee */}
            <div className="w-full overflow-hidden py-4">
                <div className="flex whitespace-nowrap animate-marquee">
                    {skeletonItems.map((_, index) => (
                        <div
                            key={`skeleton-${index}`}
                            className="inline-flex flex-col items-center mx-4 w-[180px] md:w-[200px] animate-pulse"
                        >
                            <div className="relative w-full h-32 md:h-36 px-14 dark:bg-gray-700 bg-white rounded-lg flex flex-col items-center justify-center">
                                {/* Glow placeholder */}
                                <div className="absolute w-20 h-20 rounded-full opacity-10 blur-xl pointer-events-none bg-blue-400 dark:bg-purple-500"></div>

                                {/* Image placeholder */}
                                <div className="h-14 md:h-20 w-20 bg-gray-300 dark:bg-gray-600 rounded-md mb-2"></div>

                                {/* Name placeholder */}
                                <div className="h-4 w-24 bg-gray-300 dark:bg-gray-600 rounded mb-1"></div>

                                {/* Rating placeholder */}
                                <div className="h-3 w-16 bg-gray-200 dark:bg-gray-500 rounded"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
