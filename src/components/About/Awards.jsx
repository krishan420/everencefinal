import React from 'react'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { SafeImage } from '../../lib/SafeImage';

function Awards() {
    const awards = [
        {
            id: 1,
            image: './awards/award1.webp',
            title: "YCC Upsurge Award",
            description: "Recognized for outstanding growth and innovation in IT education",
            year: "2023"
        },
        {
            id: 2,
            image: './awards/award2.webp',
            title: "Best Data Science Delivery Partner",
            description: "Awarded for excellence in Data Science training programs",
            year: "2022"
        },
        {
            id: 6,
            image: './awards/award3.webp',
            title: "Pratibimb Award",
            description: "Honored for excellence in technical education",
            year: "2020"
        },
        {
            id: 3,
            image: './awards/award4.webp',
            title: "Best ACE Business Award",
            description: "Recognized for business excellence in IT training",
            year: "2020"
        },
        {
            id: 4,
            image: './awards/award5.webp',
            title: "Brand Academy Leadership Award",
            description: "Awarded for leadership in IT education sector",
            year: "2021"
        },
        {
            id: 5,
            image: './awards/award6.webp',
            title: "Great Indian Startup Award",
            description: "Honored as one of India's most promising startups",
            year: "2023"
        },
        {
            id: 7,
            image: './awards/award7.webp',
            title: "Global Startup Award",
            description: "International recognition for innovative education model",
            year: "2022"
        }
    ]

    return (
        <div className="py-16 px-4 sm:px-6 bg-gradient-to-tr from-blue-600 to-indigo-700 dark:from-blue-900 dark:to-indigo-800">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white dark:text-blue-100">
                        Our Prestigious Awards
                    </h2>
                    <p className="text-xl text-blue-200 dark:text-blue-300 max-w-2xl mx-auto">
                        Recognized excellence in IT education and training
                    </p>
                </div>

                {/* Awards Slider */}
                <div className="relative">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        pagination={{
                            clickable: true,
                            el: '.swiper-pagination',
                            type: 'bullets',
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            }
                        }}
                        className="px-2 py-8"
                    >
                        {awards.map((award) => (
                            <SwiperSlide key={award.id}>
                                <div className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 h-[400px] flex flex-col border border-gray-200 dark:border-gray-700">
                                    {/* Year Badge */}
                                    <div className="absolute top-4 right-4 bg-yellow-500 dark:bg-yellow-600 text-blue-900 dark:text-gray-900 font-bold px-3 py-1 text-sm rounded-md z-10">
                                        {award.year}
                                    </div>

                                    {/* Award Image - Adjust height here */}
                                    <div className="relative h-64 overflow-hidden bg-gray-100 dark:bg-gray-700 flex items-center justify-center p-4">
                                        <SafeImage
                                            src={award.image}
                                            alt={award.title}
                                            className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                                            loading="lazy"
                                        />
                                    </div>

                                    {/* Award Content - Fixed height for text area (optional) */}
                                    <div className="p-6 flex-grow flex flex-col">
                                        <h3 className="text-xl font-bold text-blue-900 dark:text-white mb-2">
                                            {award.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                                            {award.description}
                                        </p>
                                        <div className="flex items-center text-blue-600 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors">
                                            <span className="mr-2 font-medium">IT Accurate</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Navigation Buttons */}
                    <div className="swiper-button-prev !text-white !bg-blue-700 dark:!bg-gray-700 !rounded-full !w-12 !h-12 !opacity-90 hover:!opacity-100 after:!text-xl after:!font-bold"></div>
                    <div className="swiper-button-next !text-white !bg-blue-700 dark:!bg-gray-700 !rounded-full !w-12 !h-12 !opacity-90 hover:!opacity-100 after:!text-xl after:!font-bold"></div>

                    {/* Custom Pagination */}
                    <div className="swiper-pagination !relative !bottom-0 !mt-8"></div>
                </div>
            </div>
        </div>
    )
}

export default Awards