import React from "react";
import { Typography, useMediaQuery } from "@mui/material";
import { theme } from "../../theme/theme";
import mediaValue from "../../utils/mediaValue";
import { styles, MUIStyles } from "./styles";
import useClasses from "../../utils/useClasses";

import ReviewsMob from "./ReviewsMobile/ReviewsMob";
import ReviewsDesk from "./ReviewsDesktop/ReviewsDesk";

export default function OurReviews() {
  const classes = useClasses(styles);
  const isMobile = useMediaQuery(theme.breakpoints.up("xs"));
  const isTablet = useMediaQuery(theme.breakpoints.up("md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  const media = mediaValue(isMobile, isTablet, isDesktop);

  return (
    <>
      <div className={classes.title}>
        <Typography sx={MUIStyles.text}> Our Reviews</Typography>
      </div>
      <div className={classes.reviews}>
        {media === "mobile" && <ReviewsMob />}
        {media === "tablet" && <ReviewsMob />}
        {media === "desktop" && <ReviewsDesk />}
      </div>
    </>
  );
}
