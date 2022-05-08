import React from "react";
import { styles, MUIStyles } from "./styles";
import useClasses from "../../utils/useClasses";
import { Typography } from "@mui/material";
import logo from "../../images/logo412.svg";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import {
  textAnimationLeftToRight,
  textAnimationRightToLeft,
} from "./animations";

export default function Greeting() {
  const classes = useClasses(styles);
  return (
    <motion.div
      className={classes.root}
      initial="hidden"
      whileInView="vissible"
    >
      <motion.div className={classes.textBlock}>
        <Typography
          sx={MUIStyles.text}
          component={motion.p}
          custom={2}
          variants={textAnimationLeftToRight}
        >
          Make your holiday unforgettable
        </Typography>
        <Typography
          sx={MUIStyles.text}
          component={motion.p}
          custom={4}
          variants={textAnimationRightToLeft}
        >
          with
        </Typography>
        <Box classname={classes.imageBlock}>
          <motion.img
            className={classes.image}
            src={logo}
            alt="NJ Wedding Limo logo"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5 }}
          ></motion.img>
        </Box>
      </motion.div>
    </motion.div>
  );
}
