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
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const moveSlide = (direction: Direction) => {
    const nextSlide = getNextSlideIndex(
      direction,
      currentIndex,
      children.length
    );
    setCurrentIndex(nextSlide);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setDragStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const deltaX = currentX - dragStartX;
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(calc(-${
        currentIndex * 100
      }% + ${deltaX * 5}px))`;
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setIsDragging(false);
    const threshold = 50;
    const currentX = e.changedTouches[0].clientX;
    const deltaX = currentX - dragStartX;

    if (Math.abs(deltaX) > threshold) {
      if (deltaX > 0) {
        moveSlide(Direction.left);
      } else {
        moveSlide(Direction.right);
      }
    } else {
      if (sliderRef.current) {
        sliderRef.current.style.transition = "transform 0.3s ease-out";
        sliderRef.current.style.transform = `translateX(-${
          currentIndex * 100
        }%)`;
      }
      setTimeout(() => {
        if (sliderRef.current) {
          sliderRef.current.style.transition = "";
        }
      }, 100);
    }
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
        onTouchMove={handleTouchMove}
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
