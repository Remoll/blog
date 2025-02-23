import { describe, it, expect, vi } from "vitest";
import {
  getNextSlideIndex,
  resetSlideTransformXProperty,
  getSlideTransformXProperty,
  resetSlidePosition,
} from "./utils";
import { Direction, SliderRef } from "./types";

describe("utils", () => {
  describe("getNextSlideIndex", () => {
    it("should return the next slide index when direction is right", () => {
      expect(getNextSlideIndex(Direction.right, 0, 5)).toBe(1);
      expect(getNextSlideIndex(Direction.right, 4, 5)).toBe(0);
    });

    it("should return the previous slide index when direction is left", () => {
      expect(getNextSlideIndex(Direction.left, 0, 5)).toBe(4);
      expect(getNextSlideIndex(Direction.left, 4, 5)).toBe(3);
    });
  });

  describe("resetSlideTransformXProperty", () => {
    it("should set the transform property of the sliderRef", () => {
      const sliderRef = { current: { style: { transform: "" } } };
      resetSlideTransformXProperty(2, sliderRef as SliderRef);
      expect(sliderRef.current.style.transform).toBe("translateX(-200%)");
    });

    it("should not set the transform property if sliderRef is null", () => {
      const sliderRef = { current: null };
      resetSlideTransformXProperty(2, sliderRef as SliderRef);
      expect(sliderRef.current).toBeNull();
    });

    it("should not set the transform property if currentIndex is undefined", () => {
      const sliderRef = { current: { style: { transform: "" } } };
      resetSlideTransformXProperty(undefined, sliderRef as SliderRef);
      expect(sliderRef.current.style.transform).toBe("");
    });
  });

  describe("getSlideTransformXProperty", () => {
    it("should return the correct transform property", () => {
      const result = getSlideTransformXProperty(2, 100, 150);
      expect(result).toBe("translateX(calc(-200% + 50px))");
    });
  });

  describe("resetSlidePosition", () => {
    it("should set the transition and transform properties of the sliderRef", () => {
      const sliderRef = {
        current: { style: { transition: "", transform: "" } },
      };
      vi.useFakeTimers();
      resetSlidePosition(2, sliderRef as SliderRef);
      expect(sliderRef.current.style.transition).toBe(
        "transform 0.3s ease-out"
      );
      expect(sliderRef.current.style.transform).toBe("translateX(-200%)");
      vi.runAllTimers();
      expect(sliderRef.current.style.transition).toBe("");
      vi.useRealTimers();
    });

    it("should not set the transition and transform properties if sliderRef is null", () => {
      const sliderRef = { current: null };
      vi.useFakeTimers();
      resetSlidePosition(2, sliderRef as SliderRef);
      expect(sliderRef.current).toBeNull();
      vi.runAllTimers();
      vi.useRealTimers();
    });
  });
});
