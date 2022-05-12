import React from "react";
import useClasses from "../../utils/useClasses";
import ServiceCard from "./ServiceCard/ServiceCard";
import ServicesTitle from "./ServiceTitle/ServicesTitle";
import { styles } from "./styles";
import { Grid } from "@mui/material";

import air_img from "../../images/services/air.svg";
import bizz_img from "../../images/services/bizz.svg";
import wedding_img from "../../images/services/wedding.svg";
import bus_img from "../../images/services/bus.svg";
import prom_img from "../../images/services/prom.svg";
import party_img from "../../images/services/party.svg";
import hourly_img from "../../images/services/time.svg";
import casino_img from "../../images/services/casino.svg";

import { air_service_desc } from "../../constants/servicesDesctiption";

export default function Services() {
  const xsGridSise = 12;
  const smGridSize = 6;
  const mdGridSize = 4;
  const lgGridSize = 3;
  const classes = useClasses(styles);
  return (
    <>
      <ServicesTitle />
      <div className={classes.root}>
        <Grid
          container
          spacing={0}
          direction=""
          alignItems="center"
          justifyContent="center"
        >
          <Grid
            className={classes.gridContainer}
            item
            justifyContent="center"
            xs={xsGridSise}
            sm={smGridSize}
            md={mdGridSize}
            lg={lgGridSize}
          >
            <ServiceCard
              seviceTitle={"Airport Limo Service"}
              image={air_img}
              serviceDescription={air_service_desc}
            />
          </Grid>
          <Grid
            className={classes.gridContainer}
            item
            justifyContent="center"
            xs={xsGridSise}
            sm={smGridSize}
            md={mdGridSize}
            lg={lgGridSize}
          >
            <ServiceCard
              seviceTitle={"Business Limo Service"}
              image={bizz_img}
              serviceDescription={"business service"}
            />
          </Grid>
          <Grid
            className={classes.gridContainer}
            item
            justifyContent="center"
            xs={xsGridSise}
            sm={smGridSize}
            md={mdGridSize}
            lg={lgGridSize}
          >
            <ServiceCard
              seviceTitle={"Wedding Limo Service"}
              image={wedding_img}
              serviceDescription={"wedding service"}
            />
          </Grid>
          <Grid
            className={classes.gridContainer}
            item
            justifyContent="center"
            xs={xsGridSise}
            sm={smGridSize}
            md={mdGridSize}
            lg={lgGridSize}
          >
            <ServiceCard
              seviceTitle={"Party Bus Service"}
              image={bus_img}
              serviceDescription={"bus service"}
            />
          </Grid>
          <Grid
            className={classes.gridContainer}
            item
            justifyContent="center"
            xs={xsGridSise}
            sm={smGridSize}
            md={mdGridSize}
            lg={lgGridSize}
          >
            <ServiceCard
              seviceTitle={"Prom Limo Service"}
              image={prom_img}
              serviceDescription={"prom service"}
            />
          </Grid>
          <Grid
            className={classes.gridContainer}
            item
            justifyContent="center"
            xs={xsGridSise}
            sm={smGridSize}
            md={mdGridSize}
            lg={lgGridSize}
          >
            <ServiceCard
              seviceTitle={"Party Limo Service"}
              image={party_img}
              serviceDescription={"party service"}
            />
          </Grid>
          <Grid
            className={classes.gridContainer}
            item
            justifyContent="center"
            xs={xsGridSise}
            sm={smGridSize}
            md={mdGridSize}
            lg={lgGridSize}
          >
            <ServiceCard
              seviceTitle={"Hourly Limo Service"}
              image={hourly_img}
              serviceDescription={"hourly service"}
            />
          </Grid>
          <Grid
            className={classes.gridContainer}
            item
            justifyContent="center"
            xs={xsGridSise}
            sm={smGridSize}
            md={mdGridSize}
            lg={lgGridSize}
          >
            <ServiceCard
              seviceTitle={"Casino Limo Service"}
              image={casino_img}
              serviceDescription={"casino service"}
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
