import React from "react";
import Services from "../components/Services/Services";
import Greeting from "../components/Greeting/Greeting";
import Fleet from "../components/Fleet/Fleet";
import AboutUs from "../components/AboutUs/AboutUs";
import CallToAction from "../components/CallToAction/CallToAction";

export default function Homepage() {
  return (
    <>
      <Greeting />
      <Services />
      <AboutUs />
      <Fleet />
      <CallToAction />
    </>
  );
}
