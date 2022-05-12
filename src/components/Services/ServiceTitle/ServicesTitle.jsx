import React from "react";
import { Typography } from "@mui/material";
import useClasses from "../../../utils/useClasses";
import { styles, MUIStyles } from "./styles";

export default function ServicesTitle() {
  const classes = useClasses(styles);
  return (
    <div className={classes.title}>
      <Typography sx={MUIStyles.titleText}>SERVICES</Typography>
    </div>
  );
}
