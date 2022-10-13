import React from "react";
import useClasses from "../../utils/useClasses";
import FleetTitle from "./FleetTitle/FleetTitle";
import { styles } from "./styles";
import { Carousel, CarouselItem } from "../Carousel/Carousel";

export default function Fleet() {
  const classes = useClasses(styles);
  return (
    <div className={classes.root}>
      <FleetTitle />
      <div>
        <Carousel>
          <CarouselItem> 1 </CarouselItem>
          <CarouselItem> 2 </CarouselItem>
          <CarouselItem> 3 </CarouselItem>
        </Carousel>
      </div>
    </div>
  );
}
