"use client";

import React from "react";

export default function Events() {

  // Album Data
  const albums = [
    {
      title: "Cybersecurity Awareness Programme",
      cover: "/courseImages/events1.jpeg",
      images: [
        "/courseImages/events1.jpeg",
        "/courseImages/events2.jpeg",
        "/courseImages/events3.jpeg",
        "/courseImages/events4.jpeg",
        "/courseImages/events5.jpeg",
        "/courseImages/events6.jpeg",
        "/courseImages/events7.jpeg",
      ],
    },

    {
      title: "Cyber Hygiene Awareness Training",
      cover: "/courseImages/ch1.jpeg",
      images: [
        "/courseImages/ch1.jpeg",
        "/courseImages/ch2.jpeg",
        "/courseImages/ch3.jpeg",
        "/courseImages/ch4.jpeg",
        "/courseImages/ch5.jpeg",
      ],
    },
  ];

  // Lightbox State
  const [selectedAlbum, setSelectedAlbum] = React.useState(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  // Open Album
  const openAlbum = (album) => {
    setSelectedAlbum(album);
    setCurrentIndex(0);
  };

  // Next Image
  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === selectedAlbum.images.length - 1 ? 0 : prev + 1
    );
  };

  // Previous Image
  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? selectedAlbum.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="bg-[#f7f7f7] text-[#4b5563] min-h-screen">

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">

        <img
          src="/courseImages/events7.jpeg"
          alt="Events Banner"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />

        <div className="relative z-10 text-center px-6 max-w-4xl">

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-[#4b5563]">
            EVENTS
          </h1>

        </div>
      </section>

      {/* Event Content */}
      <section className="py-10 px-6 md:px-12 lg:px-20 bg-[#f7f7f7]">

        <div className="max-w-6xl mx-auto">

          <div className="inline-block px-5 py-2 rounded-full border border-[#ff6b00] text-[#ff6b00] text-sm font-medium mb-6">
            Featured Event
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#4b5563]">
            Cybersecurity Hygiene Awareness Programme
          </h2>

          <p className="text-gray-600 text-lg leading-8 mb-8">
            We successfully conducted a Cybersecurity Hygiene Awareness
            Programme for business owners of CA firms and law firms.
          </p>

          <h3 className="text-[#000] text-lg leading-8 mb-2">
            The session covered key modules including:
          </h3>

          {/* Pointer List */}
          <ul className="text-lg text-[#4b5563] leading-10 mb-10 list-disc pl-6">

            <li>Cyber Crime</li>
            <li>Digital Forensics</li>
            <li>Cyber Security</li>

          </ul>

        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-5 px-6 md:px-12 lg:px-20 pb-20 bg-[#f7f7f7]">

        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-14">

            <p className="uppercase tracking-[0.3em] text-sm text-[#ff6b00] mb-4 font-semibold">
              Moments From The Event
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#4b5563]">
              Event Albums
            </h2>

          </div>

          {/* Album Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-0 justify-center">

            {albums.map((album, index) => (
              <div
                key={index}
                className="group cursor-pointer flex justify-center"
                onClick={() => openAlbum(album)}
              >

                {/* Album Cover */}
                <div className="relative overflow-hidden rounded-3xl bg-white shadow-lg w-full max-w-[500px]">

                  <img
                    src={album.cover}
                    alt={album.title}
                    className="w-full h-[350px] object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Album Info */}
                  <div className="absolute bottom-0 left-0 w-full p-5 text-center">

                    <h3 className="text-white text-2xl font-semibold">
                      {album.title}
                    </h3>

                    <p className="text-gray-200 text-sm mt-1">
                      {album.images.length} Photos
                    </p>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Album Lightbox */}
      {selectedAlbum && (

        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6">

          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white text-5xl hover:text-[#ff6b00] transition"
            onClick={() => setSelectedAlbum(null)}
          >
            ×
          </button>

          {/* Previous Button */}
          <button
            onClick={prevImage}
            className="absolute left-4 md:left-10 text-white text-5xl hover:text-[#ff6b00]"
          >
            ❮
          </button>

          {/* Image Container */}
          <div className="max-w-6xl w-full text-center">

            <img
              src={selectedAlbum.images[currentIndex]}
              alt=""
              className="w-full max-h-[80vh] object-contain rounded-3xl shadow-2xl"
            />

            {/* Album Title */}
            <h3 className="text-white text-2xl font-semibold mt-6">
              {selectedAlbum.title}
            </h3>

            {/* Counter */}
            <p className="text-gray-300 mt-2 text-lg">
              {currentIndex + 1} / {selectedAlbum.images.length}
            </p>

          </div>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-4 md:right-10 text-white text-5xl hover:text-[#ff6b00]"
          >
            ❯
          </button>

        </div>
      )}
    </div>
  );
}