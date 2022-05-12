import React, { useState } from "react";
import { styles, MUIStyles } from "./styles";
import useClasses from "../../../utils/useClasses";
import ReactCardFlip from "react-card-flip";
import { Card, CardContent, Typography } from "@mui/material";

export default function ServiceCard({
  image,
  seviceTitle,
  serviceDescription,
}) {
  const classes = useClasses(styles);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        {/* card's front */}
        <div onClick={handleFlip} className={classes.cardContainer}>
          <img className={classes.cardImage} src={image} alt={seviceTitle} />
        </div>
        {/* card's back */}
        <div onClick={handleFlip}>
          <Card sx={MUIStyles.card}>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {serviceDescription}
              </Typography>
            </CardContent>
          </Card>
        </div>
      </ReactCardFlip>
      <p className={classes.cardText}> {seviceTitle} </p>
    </div>
  );
}
