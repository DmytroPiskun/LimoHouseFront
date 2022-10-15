import React from "react";
import { styles, MUIStyles } from "./styles";
import useClasses from "../../../utils/useClasses";
import { Typography } from "@mui/material";

export function CarCard({ thumb, title, rate }) {
  const classes = useClasses(styles);
  const preventDragHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className={classes.root}>
      <img
        onDragStart={preventDragHandler}
        className={classes.pic}
        src={thumb}
        alt=""
      />
      <Typography sx={[MUIStyles.text, MUIStyles.noselect]}>{title}</Typography>
      <Typography sx={[MUIStyles.text, MUIStyles.noselect]}>
        ${rate}/hr
      </Typography>
    </div>
  );
}
