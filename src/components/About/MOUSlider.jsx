import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { SafeImage } from '../../lib/SafeImage';

const MOUSlider = () => {
    const mouData = [
        {
            id: 1,
            image: './mou/mou1.webp',
            title: "CONFERENCE MEETING VNIT, NAGPUR",
        },
        {
            id: 2,
            image: './mou/mou2.webp',
            title: "HR CONCLAVE ORGANISED BY TULSIRAMJI GAIKWAD PATIL COLLEGE OF ENGINEERING & TECHNOLOGY NAGPUR",
        },
        {
            id: 3,
            image: './mou/mou3.webp',
            title: "MOU AT AMBEDKAR COLLEGE",
        },
        {
            id: 4,
            image: './mou/mou4.webp',
            title: "MOU AT PRIYADARSHANI COLLEGE HINGNA",
        },
        {
            id: 5,
            image: './mou/mou5.webp',
            title: "MOU AT GH RAISONI COLLEGE, NAGPUR",
        },
    ];

    return (
        <div className="py-16 px-4 sm:px-6 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-800 dark:text-blue-300">
                        Our Memorandums of Understanding
                    </h2>
                    <p className="text-lg text-blue-600 dark:text-blue-200 max-w-2xl mx-auto">
                        Strategic collaborations with premier institutions
                    </p>
                </div>

                {/* Slider Container */}
                <div className="relative">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation={{
                            nextEl: '.mou-swiper-button-next',
                            prevEl: '.mou-swiper-button-prev',
                        }}
                        pagination={{
                            clickable: true,
                            el: '.mou-swiper-pagination',
                            type: 'bullets',
                            bulletClass: 'swiper-pagination-bullet',
                            bulletActiveClass: 'swiper-pagination-bullet-active',
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            }
                        }}
                        className="!pb-16" // Increased padding to accommodate pagination
                    >
                        {mouData.map((mou) => (
                            <SwiperSlide key={mou.id}>
                                <div className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 h-[420px] flex flex-col border border-gray-200 dark:border-gray-700">
                                    {/* Image Container with fixed height */}
                                    <div className="relative h-64 overflow-hidden bg-gray-100 dark:bg-gray-700">
                                        <SafeImage
                                            src={mou.image}
                                            alt={`MOU ${mou.id}`}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>

                                    {/* Text Content with fixed height */}
                                    <div className="p-6 h-[156px] flex flex-col justify-center items-center">
                                        <p className="text-gray-800 dark:text-gray-200 text-base font-medium line-clamp-3">
                                            {mou.title}
                                        </p>
                                        {/* view details buton */}
                                        {/* <div className="flex items-center text-blue-600 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors mt-3">
                                            <span className="mr-2 font-medium">View Details</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </div> */}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    
                    {/* Custom Navigation Buttons */}
                    <div className="mou-swiper-button-prev absolute top-1/2 -left-4 z-10 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-lg cursor-pointer hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M12.707 15.707a1 1 0 01-1.414 0L6.586 11l4.707-4.707a1 1 0 111.414 1.414L9.414 11l3.293 3.293a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                    </div>
                    
                    <div className="mou-swiper-button-next absolute top-1/2 -right-4 z-10 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-lg cursor-pointer hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M7.293 4.293a1 1 0 011.414 0L13.414 9l-4.707 4.707a1 1 0 01-1.414-1.414L10.586 9 7.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </div>
                    
                    {/* Custom Pagination */}
                    <div className="mou-swiper-pagination flex justify-center mt-0 space-x-2 !relative" />
                </div>
            </div>
        </div>
    );
};

export default MOUSlider;