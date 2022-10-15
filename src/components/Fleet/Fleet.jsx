import React, { useRef } from "react";
import useClasses from "../../utils/useClasses";
import FleetTitle from "./FleetTitle/FleetTitle";
import { styles } from "./styles";
import AddCar from "./AddCar";
import { CarCard } from "./CarCard/CarCard";
import test from "../../images/testCar.png";
import useScrollOnDrag from "react-scroll-ondrag";
import { useMediaQuery } from "@mui/material";
import { theme } from "../../theme/theme";
import { Carousel, CarouselItem } from "../Carousel/Carousel";

export default function Fleet() {
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const ref = useRef();
  const { events } = useScrollOnDrag(ref);
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
      {isDesktop ? (
        <div className={classes.fleetWrapper} ref={ref} {...events}>
          <CarCard thumb={test} title={"LUX SEDAN LINCOLN MKT"} rate={1} />
          <CarCard thumb={test} title={"LUX SEDAN LINCOLN MKT"} rate={2} />
          <CarCard thumb={test} title={"LUX SEDAN LINCOLN MKT"} rate={3} />
          <CarCard thumb={test} title={"LUX SEDAN LINCOLN MKT"} rate={4} />
          <CarCard thumb={test} title={"LUX SEDAN LINCOLN MKT"} rate={5} />
          <CarCard thumb={test} title={"LUX SEDAN LINCOLN MKT"} rate={6} />
          <CarCard thumb={test} title={"LUX SEDAN LINCOLN MKT"} rate={7} />
          <CarCard thumb={test} title={"LUX SEDAN LINCOLN MKT"} rate={8} />
          <CarCard thumb={test} title={"LUX SEDAN LINCOLN MKT"} rate={9} />
          <CarCard thumb={test} title={"LUX SEDAN LINCOLN MKT"} rate={10} />
          <CarCard thumb={test} title={"LUX SEDAN LINCOLN MKT"} rate={11} />
        </div>
      ) : (
        <>
          <div className={classes.fleetCarousel}>
            <Carousel>
              <CarouselItem>
                <CarCard
                  thumb={test}
                  title={"LUX SEDAN LINCOLN MKT"}
                  rate={1}
                />
              </CarouselItem>
              <CarouselItem>
                <CarCard
                  thumb={test}
                  title={"LUX SEDAN LINCOLN MKT"}
                  rate={7}
                />
              </CarouselItem>
            </Carousel>
          </div>
        </>
      )}
    </div>
  );
}
