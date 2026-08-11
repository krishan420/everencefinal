import React, { useEffect, useState, useCallback } from 'react';
import { client } from '../../lib/client';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaSpinner } from 'react-icons/fa';
import { SafeImage } from '../../lib/SafeImage';

const Slider = () => {
    const [isSliderLoading, setIsSliderLoading] = useState(true);
    const [sliderSlides, setSliderSlides] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
 
    // Clean up slide data
    const cleanUpSlides = useCallback((rawData) => {
        const cleanSlides = rawData.map((slide) => {
            const { sys, fields } = slide;
            const { id } = sys;
            const slideImg = fields.img?.fields?.file?.url || '';
            const formattedSlideImg = slideImg.startsWith('http') ? slideImg : `https:${slideImg}`;
            return { id, slideImg: formattedSlideImg };
        });
        setSliderSlides(cleanSlides);
    }, []);

    // Fetch slides from Contentful
    const getSlides = useCallback(async () => {
        setIsSliderLoading(true);
        try {
            const response = await client.getEntries({ content_type: 'slider' });
            cleanUpSlides(response.items);
        } catch (error) {
            console.error('Error fetching slides:', error);
        } finally {
            setIsSliderLoading(false);
        }
    }, [cleanUpSlides]);

    useEffect(() => {
        getSlides();
    }, [getSlides]);

    // Navigate to the next slide
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderSlides.length);
    };

    // Navigate to the previous slide
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + sliderSlides.length) % sliderSlides.length);
    };

    // Auto-advance slides
    useEffect(() => {
        if (sliderSlides.length > 1) {
            const interval = setInterval(() => {
                nextSlide();
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [sliderSlides.length, currentIndex]);

    return (
        <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
                Our <span className="text-purple-600 dark:text-purple-400">Upcoming Batches</span>
            </h2>
            
            {isSliderLoading ? (
                <div className="flex justify-center items-center h-64">
                    <FaSpinner className="animate-spin text-4xl text-purple-600 dark:text-purple-400" />
                </div>
            ) : (
                <div className="relative overflow-hidden rounded-xl shadow-xl bg-white dark:bg-gray-800">
                    <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] w-full">
                        <div
                            className="flex h-full transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {sliderSlides.map((slide, index) => (
                                <div
                                    key={slide.id}
                                    className={`flex-shrink-0 w-full h-full transition-all duration-500 ${
                                        index === currentIndex ? 'opacity-100 scale-100' : 'opacity-50 scale-90'
                                    }`}
                                >
                                    <SafeImage 
                                        src={slide.slideImg} 
                                        alt={`Slide ${slide.id}`} 
                                        className="w-full h-full object-contain object-center"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                        
                        {/* Navigation buttons */}
                        {sliderSlides.length > 1 && (
                            <>
                                <button 
                                    onClick={prevSlide}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300 z-10"
                                    aria-label="Previous slide"
                                >
                                    <FiChevronLeft className="w-6 h-6" />
                                </button>
                                <button 
                                    onClick={nextSlide}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300 z-10"
                                    aria-label="Next slide"
                                >
                                    <FiChevronRight className="w-6 h-6" />
                                </button>
                            </>
                        )}
                        
                        {/* Indicators */}
                        {sliderSlides.length > 1 && (
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                                {sliderSlides.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`w-3 h-3 rounded-full transition-all ${
                                            index === currentIndex 
                                                ? 'bg-purple-600 dark:bg-purple-400 w-6' 
                                                : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                                        }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Slider;