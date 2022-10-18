import React, { useEffect, useState } from "react";
import { styles } from "./styles";
import useClasses from "../../utils/useClasses";
import axios from "axios";

import Step1 from "./formSteps/Step1";
import Step2 from "./formSteps/Step2";
import Step3 from "./formSteps/Step3";
import Step4 from "./formSteps/Step4";
import Step5 from "./formSteps/Step5";

export default function ReservationForm() {
  const classes = useClasses(styles);
  const [cars, setCars] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/get-cars`)
      .then((e) => setCars(e.data))
      .catch((e) => console.log(e));
  }, []);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    pickUpLocation: "",
    destinationLocation: "",
    pickUpAddress: "",
    destinationAddress: "",
    postcode: "",
    comments: "",
    pickUpTime: "",
    pickUpDate: "",
    passengerCount: "",
    timeFormat: "", // time format here means AM or PM
    vehicle: "",
    hours: "",
    withPet: "",
    petWeight: "",
    customerName: "",
    customerLastname: "",
    customerEmail: "",
    customerPhone: "",
    paymentMethod: "",
    nameOnCard: "",
    cardNumber: "",
    expDate: "",
    CV2: "",
  });
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const next = () => {
    setCurrentStep(currentStep + 1);
  };
  const back = () => {
    setCurrentStep(currentStep - 1);
  };
  switch (currentStep) {
    case 1:
      return (
        <Step1
          data={formData}
          handleChange={handleChange}
          next={next}
          cars={cars}
        />
      );
    case 2:
      return (
        <Step2
          data={formData}
          handleChange={handleChange}
          next={next}
          back={back}
        />
      );
    case 3:
      return (
        <Step3
          data={formData}
          handleChange={handleChange}
          next={next}
          back={back}
        />
      );
    case 4:
      return (
        <Step4
          data={formData}
          handleChange={handleChange}
          next={next}
          back={back}
        />
      );
    default:
      return <Step5 data={formData} back={back} />;
  }
}
