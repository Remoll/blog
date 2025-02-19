import { Direction } from "./types";

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

export { getNextSlideIndex };
