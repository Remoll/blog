import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Direction } from "./types";

interface ArrowProps {
  direction: Direction;
  moveSlide: (direction: Direction) => void;
}

const Arrow = ({ direction, moveSlide }: ArrowProps) => {
  const isDirectionRight = direction === Direction.right;
  const locationClass = isDirectionRight ? "right-0" : "left-0";
  const ArrowIcon = isDirectionRight ? IoIosArrowForward : IoIosArrowBack;

  return (
    <button
      onClick={() => moveSlide(direction)}
      className={`absolute top-1/2 transform -translate-y-1/2 ${locationClass}`}
    >
      <ArrowIcon size="2rem" />
    </button>
  );
};

export default Arrow;
