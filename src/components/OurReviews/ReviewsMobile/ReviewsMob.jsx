import { Typography } from "@mui/material";
import React from "react";
import reviewList from "../../../constants/reviews";
import LetteredAvatar from "react-lettered-avatar";
import { styles, MUIStyles } from "./styles";
import useClasses from "../../../utils/useClasses";

export default function ReviewsMob() {
  const classes = useClasses(styles);
  return (
    <div>
      {reviewList.map((el, idx) => (
        <div key={`${el.id}.div${idx}`} className={classes.reviewBox}>
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
  );
}
