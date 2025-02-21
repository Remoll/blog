"use client";
import React, { useState, useEffect, useRef } from "react";
import DotMarkers from "./DotMarkers";
import { Direction } from "./types";
import {
  getNextSlideIndex,
  getSlideTransformXProperty,
  resetSlidePosition,
  resetSlideTransformXProperty,
} from "./utils";
import Arrow from "./Arrow";
import { thresholdInPx } from "./consts";

interface SliderProps {
  children: React.ReactNode[];
}

const Slider: React.FC<SliderProps> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [touchStartPositionX, setTouchStartPositionX] = useState(0);
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
    setTouchStartPositionX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !sliderRef.current || typeof currentIndex !== "number") {
      return;
    }
    const touchCurrentPositionX = e.touches[0].clientX;
    sliderRef.current.style.transform = getSlideTransformXProperty(
      currentIndex,
      touchStartPositionX,
      touchCurrentPositionX
    );
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setIsDragging(false);
    const touchFinalPositionX = e.changedTouches[0].clientX;
    const deltaX = touchFinalPositionX - touchStartPositionX;
    const isMovePastThreshold = Math.abs(deltaX) > thresholdInPx;

    if (isMovePastThreshold) {
      const moveDirection = deltaX > 0 ? Direction.left : Direction.right;
      moveSlide(moveDirection);
    } else {
      resetSlidePosition(currentIndex, sliderRef);
    }
  };

  useEffect(() => {
    resetSlideTransformXProperty(currentIndex, sliderRef);
  }, [currentIndex]);

  return (
    <div className="relative overflow-hidden w-full px-4 max-w-lg mx-auto">
      <DotMarkers currentIndex={currentIndex}>{children}</DotMarkers>

      <div
        className="flex transition-transform pt-5"
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
