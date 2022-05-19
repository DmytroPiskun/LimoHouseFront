import React from "react";
import leftArrow from "../../../images/leftArrow.svg";
import rightArrow from "../../../images/rightArrow.svg";
import useClasses from "../../../utils/useClasses";
import { styles } from "./styles";
import clsx from "clsx";

export default function SliderButton({ direction, moveSlide }) {
  const classes = useClasses(styles);
  return (
    <button
      onClick={moveSlide}
      className={clsx(
        classes.slideButton,
        direction === "next" ? classes.nextSlide : classes.prevSlide
      )}
    >
      <img
        alt={"slider button"}
        src={direction === "next" ? rightArrow : leftArrow}
      />
    </button>
  );
}
