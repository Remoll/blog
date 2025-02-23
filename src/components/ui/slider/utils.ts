import { slideResetPositionClasses } from "./consts";
import { Direction, SliderRef } from "./types";

const getNextSlideIndex = (
  direction: Direction,
  currentSlideIndex: number,
  slidesNumber: number
): number => {
  const firstSlideIndex = 0;
  const lastSlideIndex = slidesNumber - 1;
  const transitionValue = 1;

  switch (direction) {
    case Direction.right: {
      return currentSlideIndex === lastSlideIndex
        ? firstSlideIndex
        : currentSlideIndex + transitionValue;
    }
    case Direction.left: {
      return currentSlideIndex === firstSlideIndex
        ? lastSlideIndex
        : currentSlideIndex - transitionValue;
    }
  }
};

const getTranslateXProperty = (translateValue: string | number) =>
  `translateX(${translateValue})`;

const resetSlideTransformXProperty = (
  currentIndex: number | undefined,
  sliderRef: SliderRef
) => {
  if (!sliderRef?.current || currentIndex === undefined) {
    return;
  }

  const translateValue = `-${currentIndex * 100}%`;

  sliderRef.current.style.transform = getTranslateXProperty(translateValue);
};

const getSlideTransformXProperty = (
  currentIndex: number,
  touchStartPositionX: number,
  touchCurrentPositionX: number
): string => {
  const deltaX = touchCurrentPositionX - touchStartPositionX;
  const translateValue = `calc(-${currentIndex * 100}% + ${deltaX}px)`;
  return getTranslateXProperty(translateValue);
};

const resetSlidePosition = (
  currentIndex: number | undefined,
  sliderRef: SliderRef
) => {
  if (sliderRef.current) {
    sliderRef.current.style.transition = slideResetPositionClasses;
    resetSlideTransformXProperty(currentIndex, sliderRef);
  }
  setTimeout(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transition = "";
    }
  }, 100);
};

export {
  getNextSlideIndex,
  resetSlideTransformXProperty,
  getSlideTransformXProperty,
  resetSlidePosition,
};
