import React, { useState } from "react";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative">
      <div className="relative flex h-96 items-center justify-center">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`absolute h-full w-full ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            } transition-opacity duration-500 ease-in-out`}
          />
        ))}
        <div className="absolute z-10 text-2xl font-bold text-white">
          {images[currentIndex].text}
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 transform bg-black bg-opacity-50 p-2 text-white hover:bg-opacity-75"
        >
          &lt;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 transform bg-black bg-opacity-50 p-2 text-white hover:bg-opacity-75"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
