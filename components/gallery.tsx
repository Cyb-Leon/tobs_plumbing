"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import BeforeAfterSlider from "./BeforeAfterSlider";

const galleryImages = [
  { src: "/images/gallery-1.jpg", alt: "Bathroom renovation project" },
  { src: "/images/gallery-2.jpg", alt: "Paving installation" },
  { src: "/images/hero-plumbing.jpg", alt: "Water tank system" },
  { src: "/images/gallery-4.jpg", alt: "Tile flooring project" },
  { src: "/images/service-plumbing.JPEG", alt: "Plumbing installation" },
  { src: "/images/service-borehole.jpg", alt: "Borehole drilling" },
];

const galleryOpps = [
  { src: "/images/gallery-10.jpg", alt: "Bathroom renovation project" },
  { src: "/images/service-paving.jpg", alt: "Paving installation" },
  { src: "/images/service-tank.jpg", alt: "Water tank system" },
  { src: "/images/service-tiling.jpg", alt: "Tile flooring project" },
  { src: "/images/gallery-plumbAfter.JPEG", alt: "Plumbing installation" },
  { src: "/images/service-borehole.jpg", alt: "Borehole drilling" },
];

export function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        selectedIndex === 0 ? galleryImages.length - 1 : selectedIndex - 1,
      );
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        selectedIndex === galleryImages.length - 1 ? 0 : selectedIndex + 1,
      );
    }
  };

  return (
    <section id="gallery" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-xs tracking-[0.3em] text-secondary mb-4 uppercase font-semibold">
              Our Work
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Recent
              <br />
              <span className="font-serif italic text-primary">projects</span>
            </h2>
          </div>
        </div>

        {/* Horizontal Scrolling Gallery */}
        <div className="relative -mx-4 md:mx-0">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 px-4 md:px-0 scrollbar-hide">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => openLightbox(index)}
                className="flex-shrink-0 w-[80vw] md:w-[45vw] lg:w-[30vw] aspect-[4/3] relative group snap-start rounded-lg overflow-hidden"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/20 transition-colors duration-300" />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs text-white font-mono bg-secondary px-2 py-1 rounded">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xs text-white bg-black/50 px-2 py-1 rounded">
                    {image.alt}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Scroll hint for mobile */}
        <p className="text-xs text-foreground/60 text-center mt-4 md:hidden">
          Swipe to explore
        </p>
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-primary transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5 text-foreground hover:text-white" />
          </button>

          <button
            onClick={goToPrevious}
            className="absolute left-4 md:left-8 w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-secondary transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 text-foreground hover:text-white" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 md:right-8 w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-secondary transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 text-foreground hover:text-white" />
          </button>

          <div className="relative w-full max-w-5xl h-[70vh] mx-4">
            {/* <Image
              src={galleryImages[selectedIndex].src}
              alt={galleryImages[selectedIndex].alt}
              fill
              className="object-contain"
            /> */}
            <BeforeAfterSlider
              beforeImage={galleryImages[selectedIndex].src}
              afterImage={galleryOpps[selectedIndex].src}
              altText="Project Name"
            />
          </div>

          <div className="absolute bottom-8 left-0 right-0 text-center">
            <span className="text-sm text-white">
              {String(selectedIndex + 1).padStart(2, "0")} /{" "}
              {String(galleryImages.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      )}
    </section>
  );
}
