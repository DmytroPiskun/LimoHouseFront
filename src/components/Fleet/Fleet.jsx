import React, { useRef, useState, useEffect } from "react";
import useClasses from "../../utils/useClasses";
import FleetTitle from "./FleetTitle/FleetTitle";
import { styles } from "./styles";
import { CarCard } from "./CarCard/CarCard";
import useScrollOnDrag from "react-scroll-ondrag";
import { useMediaQuery } from "@mui/material";
import { theme } from "../../theme/theme";
import { Carousel, CarouselItem } from "../Carousel/Carousel";
import axios from "axios";

export default function Fleet() {
  const [cars, setCars] = useState([]);
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const ref = useRef();
  const { events } = useScrollOnDrag(ref);
  const classes = useClasses(styles);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/get-cars`)
      .then((e) => setCars(e.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className={classes.root}>
      <FleetTitle />
      {isDesktop ? (
        <div className={classes.fleetWrapper} ref={ref} {...events}>
          {cars.map((el, idx) => {
            return (
              <CarCard
                thumb={el.thumb}
                title={el.title}
                rate={el.price}
                passengers={el.passengers}
                pics={el.pictures}
                key={`car-card-number-${idx}`}
              />
            );
          })}
        </div>
      ) : (
        <>
          <div className={classes.fleetCarousel}>
            <Carousel>
              {cars.map((el, idx) => {
                return (
                  <CarouselItem key={`car-card-number-${idx}`}>
                    <CarCard
                      thumb={el.thumb}
                      title={el.title}
                      rate={el.price}
                      passengers={el.passengers}
                      pics={el.pictures}
                    />
                  </CarouselItem>
                );
              })}
            </Carousel>
          </div>
        </>
      )}
    </div>
  );
}
