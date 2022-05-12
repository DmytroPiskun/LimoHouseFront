import React from "react";
import useClasses from "../../../utils/useClasses";
import { styles } from "./styles";

export default function ServiceModal({
  description,
  setDescription,
  setIsOpen,
}) {
  const classes = useClasses(styles);
  return (
    <>
      <div
        className={classes.darkBG}
        onClick={() => {
          setIsOpen(false);
          setDescription("");
        }}
      >
        <div className={classes.centered}>
          <div className={classes.modal}>
            <div>{description}</div>
          </div>
        </div>
      </div>
    </>
  );
}
