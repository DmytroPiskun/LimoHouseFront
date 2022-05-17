import { Typography } from "@mui/material";
import React, { useState } from "react";
import reviewList from "../../../constants/reviews";
import LetteredAvatar from "react-lettered-avatar";
import { styles, MUIStyles } from "./styles";
import useClasses from "../../../utils/useClasses";
import SliderButton from "./SliderButton";

export default function ReviewsMob() {
  const [slideIndex, setSlideIndex] = useState(1);
  const classes = useClasses(styles);

  const nextSlide = () => {
    if (slideIndex !== reviewList.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === reviewList.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(reviewList.length);
    }
  };

  return (
    <div className={classes.sliderContainer}>
      {reviewList.map((el, idx) => (
        <div
          key={`${el.id}.div${idx}`}
          className={
            slideIndex === idx + 1 ? classes.reviewBoxAnim : classes.reviewBox
          }
        >
          <LetteredAvatar
            key={`${el.id}.avatar${idx}`}
            name={el.name}
            backgroundColor="rgba(236,106,0,255)"
          />
          <Typography sx={MUIStyles.reviewer} key={`${el.id}.title${idx}`}>
            {el.name}
          </Typography>
          <div className={classes.reviewTextBlock}>
            <Typography sx={MUIStyles.reviewText} key={`${el.id}`}>
              {el.text}
            </Typography>
          </div>
        </div>
      ))}
      <SliderButton moveSlide={nextSlide} direction={"next"} />
      <SliderButton moveSlide={prevSlide} direction={"prev"} />
    </div>
  );
}
