import React, { useState } from "react";
import { Typography } from "@mui/material";
import reviewList from "../../../constants/reviews";
import LetteredAvatar from "react-lettered-avatar";
import useClasses from "../../../utils/useClasses";
import { MUIStyles, styles } from "./styles";
import SliderButton from "./SliderButton";

export default function ReviewsDesk() {
  const classes = useClasses(styles);
  const [slideIndex, setSlideIndex] = useState(1);

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
    <div className={classes.root}>
      <div className={classes.sliderContainer}>
        <div className={classes.reviewContainer}>
          {reviewList.map((el, idx) => (
            <div
              className={
                slideIndex === idx + 1
                  ? classes.reviewBoxAnim
                  : classes.reviewBox
              }
              key={`${el.id}.div${idx}`}
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
        </div>

        <SliderButton moveSlide={nextSlide} direction={"next"} />
        <SliderButton moveSlide={prevSlide} direction={"prev"} />
      </div>
      <div>
        <p> gallery </p>
      </div>
    </div>
  );
}
