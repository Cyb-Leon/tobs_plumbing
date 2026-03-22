'use client'; // Required for interactivity [2, 5]
import { useState, useRef, useCallback } from 'react';

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  altText: string;
}

export default function BeforeAfterSlider({ beforeImage, afterImage, altText }: BeforeAfterProps) {
  const [sliderPosition, setSliderPosition] = useState(50); // Initial 50%
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.floor((x / rect.width) * 100);
    setSliderPosition(percent);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-2xl overflow-hidden select-none cursor-ew-resize"
      onMouseMove={(e) => handleMove(e.clientX)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
    >
      {/* After Image (Top) */}
      <img
        src={afterImage}
        alt={`${altText} After`}
        className="absolute top-0 left-0 h-full w-full object-cover"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      />
      {/* Before Image (Bottom) */}
      <img
        src={beforeImage}
        alt={`${altText} Before`}
        className="h-full w-fullobject-cover"
      />
      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white cursor-ew-resize"
        style={{ left: `calc(${sliderPosition}% - 1px)` }}
      >
        <div className="absolute top-1/2 -left-2 h-4 w-4 rounded-full bg-white shadow-lg" />
      </div>
    </div>
  );
}
