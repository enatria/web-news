import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Search from "../../atoms/Search";
import { Typography } from "@mui/material";

const Hero = () => {
  return (
    <Box component="div">
      <Container>
        <Box
          component="div"
          sx={{
            mt: 12,
            alignItems: "center",
            flexDirection: "column",
            display: "flex",
          }}
        >
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Typography color="main" variant="h1" fontWeight="fontWeightBold">
              A good place to read <br /> updated news
            </Typography>
            <Typography color="alt" fontWeight="fontWeightLight">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>
          </Box>

          <div style={{ width: 800 }}>
            <Search />
          </div>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
