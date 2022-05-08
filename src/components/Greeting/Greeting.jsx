import React from "react";
import { Box } from "@mui/system";
import styles from "./styles";
import useClasses from "../../utils/useClasses";

export default function Greeting() {
  const classes = useClasses(styles);
  return <div className={classes.root} />;
}
