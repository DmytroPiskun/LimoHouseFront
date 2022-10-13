import React from "react";
import { Button } from "@mui/material";

export default function AddCar() {
  const buttonStyles = {
    backgroundColor: "yellow",
    color: "black",
    border: "2px solid black",
    borderRadius: "12px",
  };
  const handleClick = (e) => {
    console.log("test");
  };
  return (
    <div>
      <Button variant="contained" style={buttonStyles} onClick={handleClick}>
        Add car
      </Button>
    </div>
  );
}
