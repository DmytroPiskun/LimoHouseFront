import React from "react";
import { styles, MUIStyles } from "./styles";
import useClasses from "../../utils/useClasses";
import { Button, Typography } from "@mui/material";
import call from "../../images/call.svg";
import location from "../../images/location.svg";

export default function CallToAction() {
  const classes = useClasses(styles);
  return (
    <div className={classes.root}>
      <div className={classes.contactUs}>
        <Button
          sx={[
            MUIStyles.buttonStyles,
            { color: "white", backgroundColor: "#4d0000" },
          ]}
        >
          Reserve
        </Button>
        <Typography sx={MUIStyles.text}>Contact us </Typography>
        <Typography sx={MUIStyles.text}>
          <img className={classes.icon} src={call} alt="call icon" />
          {process.env.REACT_APP_PHONE_NUMBER}
        </Typography>
        <Typography sx={MUIStyles.text}>
          <img className={classes.icon} src={location} alt="location icon" />
          {process.env.REACT_APP_STREET}
        </Typography>
        <Typography sx={MUIStyles.text}>
          {process.env.REACT_APP_CITY}
        </Typography>
      </div>
    </div>
  );
}
