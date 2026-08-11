import React from "react";
import { SafeImage } from "../../lib/SafeImage";

function Workshop() {
  const workshop = [
    {
      image: "./workshop/workshop1.webp",
      title: "ERP Implementation Workshop",
      description:
        "IT ACCURATE successfully completed a ERP workshop at LAD College",
      college: "LAD College, Nagpur",
      date: "March 2023",
      participants: "120+ students",
    },
    {
      image: "./workshop/workshop2.webp",
      title: "Data Analytics Intensive",
      description:
        "IT ACCURATE successfully completed a Data Analytics workshop at Pallotti College",
      college: "Pallotti College, Nagpur",
      date: "November 2022",
      participants: "85+ students",
    },
    {
      image: "./workshop/workshop3.webp",
      title: "Salesforce Certification Prep",
      description:
        "IT ACCURATE successfully completed a Salesforce workshop at NIT College",
      college: "NIT College, Nagpur",
      date: "February 2023",
      participants: "95+ students",
    },
    {
      image: "./workshop/workshop4.webp",
      title: "ERP Systems Training",
      description:
        "IT ACCURATE successfully completed a ERP workshop at GH College",
      college: "GH College, Nagpur",
      date: "January 2023",
      participants: "110+ students",
    },
    {
      image: "./workshop/workshop5.webp",
      title: "AI & Data Science Workshop",
      description:
        "IT ACCURATE successfully completed a Data Analytics and AI & ML workshop at GH Raisoni College",
      college: "GH Raisoni College, Nagpur",
      date: "April 2023",
      participants: "150+ students",
    },
    {
      image: "./workshop/workshop6.webp",
      title: "Advanced Tech Symposium",
      description:
        "IT ACCURATE successfully completed a workshop at G.H. Raisoni College",
      college: "GH Raisoni College, Nagpur",
      date: "May 2023",
      participants: "200+ students",
    },
  ];

  return (
    <div className="py-16 px-6 bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
            <span className="relative z-10 text-4xl md:text-5xl font-bold mb-4 dark:text-blue-300 text-blue-800">
              Our Workshop Successes
            </span>
          </h2>

          <p className="text-xl text-blue-600 dark:text-blue-200 max-w-2xl mx-auto">
            Transforming education through hands-on technical workshops at
            premier institutions
          </p>
        </div>

        {/* Workshop Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshop.map((workshop, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white dark:bg-slate-800 "
            >
              {/* card content */}
              <div className="flex flex-col justify-between h-full bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden group transition-all duration-300">
                {/* Workshop Image */}
                <div className="relative h-60 overflow-hidden">
                  <SafeImage
                    src={workshop.image}
                    alt={`${workshop.title} workshop`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
                    {workshop.date}
                  </div>
                </div>

                {/* Workshop Content */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div className="flex items-start mb-3">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg mr-3">
                      <SafeImage
                        src="/icons/open-book.svg"
                        alt="open book"
                        className="w-7 h-7"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                        {workshop.title}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">
                        {workshop.college}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 pl-2 border-l-2 border-indigo-400">
                    {workshop.description}
                  </p>

                  <div className="flex justify-between items-center mt-auto pt-4">
                    <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                      {workshop.participants}
                    </span>
                    {/* view photos button - photos not available... */}
                    {/* <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-all duration-300 group-hover:shadow-md flex items-center">
                      View Photos
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </button> */}
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 border-2 border-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        {/* <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 inline-flex items-center">
            Explore All Workshop Events
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default Workshop;
