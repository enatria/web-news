import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Button from "../../atoms/Button";

import "./index.css";
import { Typography } from "@mui/material";

export default function CardNews({content}) {
  const days    = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const months  = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  const time  = new Date(content.publishedAt)
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
        image={content.urlToImage}
        alt="Paella dish"
      />
      <CardContent style={{height: 150, overflow: 'hidden'}}>
        <span>
          {`${day}, ${date} ${month} ${year}`} - {content.source.name}
        </span>
        <h3 >
          {content.title}
        </h3>
        <Typography
          sx={{ fontSize: 12, fontWeight: "fontWeightLight", color: "alt" }}
        >
          {content.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <BookmarkIcon />
        </IconButton>
        <Button>Read More</Button>
      </CardActions>
    </Card>
  );
}
