import React from "react";
import { Typography, Divider } from "@mui/material";
import useClasses from "../../../utils/useClasses";
import { styles, MUIStyles } from "./styles";

export default function ServicesTitle() {
  const classes = useClasses(styles);
  return (
    <div className={classes.title}>
      <Divider>
        <Typography sx={MUIStyles.titleText}>services</Typography>
      </Divider>
    </div>
  );
}
