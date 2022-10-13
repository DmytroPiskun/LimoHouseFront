import React from "react";
import useClasses from "../../utils/useClasses";
import FleetTitle from "./FleetTitle/FleetTitle";
import { styles } from "./styles";
import { Carousel, CarouselItem } from "../Carousel/Carousel";
import AddCar from "./AddCar";

export default function Fleet() {
  const classes = useClasses(styles);
  const getAccessToken = () => {
    const result = window.localStorage.getItem("token");
    console.log(result);
    if (!result) {
      return null;
    }
    return result;
  };
  const token = getAccessToken();
  return (
    <div className={classes.root}>
      <FleetTitle />
      {token && (
        <div
          style={{ display: "flex", justifyContent: "center", margin: "2px" }}
        >
          <AddCar />
        </div>
      )}
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
