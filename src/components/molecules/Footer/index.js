import { Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <>
      <div
        style={{ textAlign: "center", backgroundColor: "#C4C4C4", padding: 20 }}
      >
        <Typography sx={{ fontSize: 15, fontWeight: "fontWeightBold" }}>
          &copy;Copyright Enatria.
        </Typography>
      </div>
    </>
  );
};

export default Footer;
