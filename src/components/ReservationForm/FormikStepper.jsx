import React from "react";
import { Formik, Form } from "formik";
import { Button, Step, StepLabel } from "@mui/material";
import { Stepper } from "@mui/material";
import { Box } from "@mui/system";

export function FormikStepper({ children, ...props }) {
  const childrenArray = React.Children.toArray(children);
  const [step, setStep] = React.useState(0);
  const currentChildren = childrenArray[step];
  return (
    <Formik
      {...props}
      validateOnChange={false}
      validateOnBlur={false}
      validationSchema={currentChildren.props.validationSchema}
      onSubmit={async (values, helpers) => {
        if (step === childrenArray.length - 1) {
          await props.onSubmit(values, helpers);
        } else {
          setStep((step) => step + 1);
        }
      }}
    >
      <Form autoComplete="off">
        <Box paddingBottom={2}>
          <Stepper alternativeLabel activeStep={step}>
            {childrenArray.map((child) => (
              <Step key={child.props.label}>
                <StepLabel>{child.props.label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>

        {currentChildren}
        <div>
          <Button
            onClick={() => setStep((step) => step - 1)}
            disabled={step < 1}
          >
            Back
          </Button>
          <Button type="submit">
            {step === childrenArray.length - 1 ? "Submit" : "Next"}
          </Button>
        </div>
      </Form>
    </Formik>
  );
}

export function FormikStep({ children, ...props }) {
  return <>{children}</>;
}
