import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

const NewsTitle = ({id, fromSearch}) => {
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
            <Typography color="main" variant="h2" fontWeight="fontWeightBold">
              {fromSearch ? 
              <>search for "{id}"</>
              : 
              <><span style={{textTransform:'capitalize'}}>{id} </span>News</>
              }
            </Typography>
            <hr></hr>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default NewsTitle;
