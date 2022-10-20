import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  TextField as MaterialUiTextFiels,
} from "@mui/material";
import { Field } from "formik";
import { CheckboxWithLabel, TextField, Autocomplete } from "formik-mui";
import axios from "axios";
import { locations, creditCards } from "./autocompleteData";
import schema from "./validation";
import { FormikStepper } from "./FormikStepper";
import { Box } from "@mui/system";
import { MUIStyles, styles } from "./styles";
import useClasses from "../../utils/useClasses";

export default function ReservationForm() {
  const classes = useClasses(styles);
  const sleep = (time) => new Promise((acc) => setTimeout(acc, time));
  const [cars, setCars] = useState([]);
  const [isCard, setIsCard] = useState(false);
  const [isWithPet, setIsWithPet] = useState(false);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/get-cars`)
      .then((e) => setCars(e.data))
      .catch((e) => console.log(e));
  }, []);
  return (
    <div className={classes.root}>
      <Card sx={MUIStyles.wrapper}>
        <CardContent>
          <FormikStepper
            initialValues={{
              vehicle: { title: "Pick you vehicle" },
              numberOfHours: 0,
              withPet: false,
              weightOfPet: "",
              pickUpLocation: "",
              pickUpAddress: "",
              pickUpDate: "",
              destinationLocation: "",
              destinationAddress: "",
              pickUpTime: "",
              passengers: 0,
              luggage: 0,
              fullName: "",
              lastName: "",
              email: "",
              phone: "",
              creditCard: "",
              expDate: "",
              nameOnCard: "",
              cardNumber: "",
              cv2Code: "",
            }}
            onSubmit={async (values) => {
              await sleep(2000);
              console.log("values", values);
            }}
          >
            <div label="Choose Your Vehicle">
              <Box paddingBottom={2}>
                <Field
                  type="text"
                  name="vehicle"
                  component={Autocomplete}
                  options={cars}
                  label="Your Vehicle"
                  isOptionEqualToValue={(opt, val) => {
                    return opt.id === val.id;
                  }}
                  getOptionLabel={(option) => {
                    return option.title;
                  }}
                  renderInput={(params) => (
                    <MaterialUiTextFiels {...params} label="Your vehicle" />
                  )}
                />
              </Box>

              <Box paddingBottom={2}>
                <Field
                  name="numberOfHours"
                  type="number"
                  component={TextField}
                  label="No. of hours"
                />
              </Box>
              <Box paddingBottom={2}>
                <Field
                  name="withPet"
                  type="checkbox"
                  component={CheckboxWithLabel}
                  onChange={(e) => {
                    setIsWithPet(e.target.checked);
                  }}
                  checked={isWithPet}
                  Label={{ label: "Will you be travelling with a pet?" }}
                />
              </Box>
              <Box paddingBottom={2}>
                <Field
                  disabled={!isWithPet}
                  type="number"
                  name="weightOfPet"
                  component={TextField}
                  label="Weight of your pet"
                />
              </Box>
            </div>
            <div label="Trip Info">
              <Box paddingBottom={2}>
                <Field
                  name="pickUpLocation"
                  component={Autocomplete}
                  options={locations}
                  isOptionEqualToValue={(opt, val) => {
                    return opt.id === val.id;
                  }}
                  renderInput={(params) => (
                    <MaterialUiTextFiels
                      {...params}
                      label="Your pick up location"
                    />
                  )}
                  label="Pick up location"
                />
              </Box>
              <Box paddingBottom={2}>
                <Field
                  fullWidth
                  name="pickUpAddress"
                  component={TextField}
                  label="Pick up address OR flight details"
                />
                <Box paddingBottom={1} paddingTop={2}>
                  <Field type="date" name="pickUpDate" component={TextField} />
                </Box>
                <Box paddingBottom={1}>
                  <Field type="time" name="pickUpTime" component={TextField} />
                </Box>
              </Box>
              <Box paddingBottom={2}>
                <Field
                  name="destinationLocation"
                  component={Autocomplete}
                  options={locations}
                  isOptionEqualToValue={(opt, val) => {
                    return opt.id === val.id;
                  }}
                  renderInput={(params) => (
                    <MaterialUiTextFiels
                      {...params}
                      label="Your destination location"
                    />
                  )}
                  label="Destination location"
                />
              </Box>
              <Box paddingBottom={2}>
                <Field
                  fullWidth
                  name="destinationAddress"
                  component={TextField}
                  label="Destination address OR flight details"
                />
              </Box>
              <Box>
                <Field
                  type="number"
                  name="passengers"
                  component={TextField}
                  label="Passengers"
                />
              </Box>
              <Box paddingTop={2}>
                <Field
                  type="number"
                  name="luggage"
                  component={TextField}
                  label="Luggage"
                />
              </Box>
            </div>
            <div label="Customer Info">
              <Box paddingBottom={1}>
                <Field
                  fullWidth
                  name="firstName"
                  component={TextField}
                  label="First name"
                />
              </Box>
              <Box paddingBottom={2}>
                <Field
                  fullWidth
                  name="lastName"
                  component={TextField}
                  label="Last name"
                />
              </Box>
              <Box paddingBottom={2}>
                <Field
                  type="phone"
                  name="phone"
                  component={TextField}
                  label="phone number"
                />
              </Box>
            </div>
            <div label="Payment Info">
              <Box paddingBottom={2}>
                <Field
                  name="creditCard"
                  component={Autocomplete}
                  options={creditCards}
                  label="Payment Method"
                  isOptionEqualToValue={(opt, val) => {
                    return opt.id === val.id;
                  }}
                  getOptionLabel={(option) => {
                    return option;
                  }}
                  renderInput={(params) => (
                    <MaterialUiTextFiels {...params} label="Payment Method" />
                  )}
                  onInputChange={(_event, value) => {
                    if (value === "Cash") {
                      setIsCard(false);
                    } else if (value === null) {
                      setIsCard(false);
                    } else {
                      setIsCard(true);
                    }
                  }}
                />
              </Box>
              <>
                <Box paddingBottom={2}>
                  <Field
                    disabled={!isCard}
                    type="text"
                    name="nameOnCard"
                    component={TextField}
                    label="Name On Card"
                  />
                </Box>
                <Box paddingBottom={2}>
                  <Field
                    disabled={!isCard}
                    type="text"
                    name="cardNumber"
                    component={TextField}
                    label="Card Number"
                  />
                  <Field
                    disabled={!isCard}
                    name="expDate"
                    component={TextField}
                    label="Expire date"
                    type="text"
                  />
                </Box>
                <Box paddingBottom={2}>
                  <Field
                    disabled={!isCard}
                    type="text"
                    name="cv2Code"
                    component={TextField}
                    label="CV2"
                  />
                </Box>
              </>
            </div>
          </FormikStepper>
        </CardContent>
      </Card>
    </div>
  );
}
