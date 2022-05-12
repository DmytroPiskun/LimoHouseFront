import React from "react";
import Services from "../components/Services/Services";
import Greeting from "../components/Greeting/Greeting";
import OurReviews from "../components/OurReviews/OurReviews";

export default function Homepage() {
  return (
    <>
      <Greeting />
      <Services />
      <OurReviews />
    </>
  );
}
