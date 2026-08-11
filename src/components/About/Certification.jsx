import React from 'react'
import { Carousel } from '../ui/Carousel'

function Certification() {

  const certificates = [
    {
      id: 1,
      src: "./cert/cert8.webp",
      alt: "SAP Certification",
      title: "SAP Certification"
    },
    {
      id: 2,
      src: "./cert/cert10.webp",
      alt: "AWS Accreditation",
      title: "AWS Accreditation"
    },
    {
      id: 3,
      src: "./cert/cert4.webp",
      alt: "Data Science Certification",
      title: "Data Science Certification"
    },
    {
      id: 4,
      src: "./cert/cert6.webp",
      alt: "Python Institute",
      title: "Python Institute"
    },
    {
      id: 5,
      src: "./cert/cert5.webp",
      alt: "Salesforce Certified",
      title: "Salesforce Certified"
    },
    {
      id: 6,
      src: "./cert/cert9.webp",
      alt: "Full Stack Developer",
      title: "Full Stack Developer"
    }
  ]

  return (
    <div className="py-20 px-6 bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-800 dark:text-blue-300 relative inline-block">
            <span className="relative z-10">
              Our Certifications
            </span>
          </h2>
          <p className="text-xl text-blue-600 dark:text-blue-200 max-w-2xl mx-auto">
            Globally recognized accreditations that validate our training quality
          </p>
        </div>

        {/* Certificates */}
        <div className="relative overflow-hidden w-full h-full pb-20 -mt-12">
          <Carousel slides={certificates} />
        </div>

        {/* View More Button (optional) */}
        {/* <div className="text-center mt-12">
      <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        View All Certifications
      </button>
    </div> */}
      </div>
    </div>
  )
}

export default Certification