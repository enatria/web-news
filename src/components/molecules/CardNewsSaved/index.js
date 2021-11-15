import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

// import {useHistory} from 'react-router-dom'; 

import { Typography } from "@mui/material";

export default function CardNewsSaved({content}) {
  const days    = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const months  = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  const time  = new Date(content.date)
  const day   = days[time.getDay()]
  const date  = time.getDate()+1
  const month = months[time.getMonth()]
  const year  = time.getFullYear()


  return (
    <Card
      className="card"
      sx={{ m: 3, mb: 6, minHeight: 450, fontFamily: "Montserrat" }}
    >
      <CardMedia
        component="img"
        height="194"
        image={content.image}
        alt={content.title}
      />
      <CardContent style={{height: 150, overflow: 'hidden'}}>
        <Typography variant="span">
          {`${day}, ${date} ${month} ${year}`} - {content.source}
        </Typography>
        <Typography variant="h5" sx={{fontWeight:'fontWeightSemiBold'}}>
          {content.title}
        </Typography>
        <Typography
          sx={{ fontSize: 12, fontWeight: "fontWeightLight", color: "alt" }}
        >
          {content.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
