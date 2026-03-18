import React, { useState, useEffect, useRef } from "react";

export default function PosterSlider() {
  const posters = [
    "https://images.unsplash.com/photo-1744016701751-10092fa91b04?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1743755920852-217f088d6f87?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1743940806654-a5f5e3ed3e16?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1743755920813-f7680c6c9928?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1743755920868-ae3d80bda5a3?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1744015104265-0b691c5a106b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1744015104332-df7eaaae854b?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ]; // Updated with valid image URLs

  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    if (posters.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % posters.length);
      }, 3000); // Change slide every 3 seconds

      return () => clearInterval(interval); // Cleanup on unmount
    }
  }, [posters.length]);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  if (!posters || posters.length === 0) {
    return <div>No posters available</div>;
  }

  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg shadow-lg border border-gray-700">
      <div
        ref={sliderRef}
        className="flex transition-transform duration-1000 ease-in-out"
      >
        {posters.map((poster, index) => (
          <img className="w-full object-contain" 
            key={index}
            src={poster}
            alt={`Poster ${index + 1}`}
            
          />
        ))}
      </div>
    </div>
  );
}
