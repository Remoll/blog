"use client";
import React, { useState, useEffect, useRef } from "react";
import DotMarkers from "./DotMarkers";
import { Direction } from "./types";
import { getNextSlideIndex } from "./utils";
import Arrow from "./Arrow";

interface SliderProps {
  children: React.ReactNode[];
}

const Slider = ({ children }: SliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const moveSlide = (direction: Direction) => {
    const nextSlide = getNextSlideIndex(
      direction,
      currentIndex,
      children.length
    );
    setCurrentIndex(nextSlide);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  return (
    <div className="relative overflow-hidden w-full px-4 max-w-lg mx-auto">
      <DotMarkers currentIndex={currentIndex}>{children}</DotMarkers>

      <div className="flex transition-transform duration-500" ref={sliderRef}>
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
