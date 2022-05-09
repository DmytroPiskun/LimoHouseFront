import React from "react";
import useClasses from "../../utils/useClasses";
import ServicesTitle from "./ServiceTitle/ServicesTitle";
import { styles } from "./styles";

export default function Services() {
  const classes = useClasses(styles);
  return (
    <>
      <ServicesTitle />
      <div className={classes.root}> cards</div>
    </>
  );
}
