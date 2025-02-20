"use client";
import React, { useState, useEffect, useRef } from "react";
import DotMarkers from "./DotMarkers";
import { Direction } from "./types";
import { getNextSlideIndex } from "./utils";
import Arrow from "./Arrow";

interface SliderProps {
  children: React.ReactNode[];
}

const Slider: React.FC<SliderProps> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const touchStartXRef = useRef<number | null>(null);

  const moveSlide = (direction: Direction) => {
    const nextSlide = getNextSlideIndex(
      direction,
      currentIndex,
      children.length
    );
    setCurrentIndex(nextSlide);
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartXRef.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartXRef.current === null) {
      return;
    }
    const touchEndX = event.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartXRef.current;
    const threshold = 50;
    if (deltaX > threshold) {
      moveSlide(Direction.left);
    } else if (deltaX < -threshold) {
      moveSlide(Direction.right);
    }
    touchStartXRef.current = null;
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  return (
    <div className="relative overflow-hidden w-full px-4 max-w-lg mx-auto">
      <DotMarkers currentIndex={currentIndex}>{children}</DotMarkers>

      <div
        className="flex transition-transform duration-500"
        ref={sliderRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {React.Children.map(children, (child, index) => (
          <div className="w-full flex-shrink-0 px-4" key={index}>
            {child}
          </div>
        ))}
      </div>

      <Arrow direction={Direction.left} moveSlide={moveSlide} />
      <Arrow direction={Direction.right} moveSlide={moveSlide} />
    </div>
  );
};

export default Slider;
