import React from "react";
import useClasses from "../../../utils/useClasses";
import { styles, MUIStyles } from "./styles";
import { Typography } from "@mui/material";

export default function AboutUsTitle() {
  const classes = useClasses(styles);
  return (
    <div className={classes.title}>
      <Typography sx={MUIStyles.titleText}>ABOUT US</Typography>
    </div>
  );
}
