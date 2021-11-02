import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Button from '../../atoms/Button';

import './index.css'


export default function CardNews({content}) {
  const days    = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const months  = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  const time  = new Date(content.publishedAt)
  const day   = days[time.getDay()]
  const date  = time.getDate()+1
  const month = months[time.getMonth()]
  const year  = time.getFullYear()

  return (
    <Card className="card" style={{margin: 5, minHeight: 450}}>
      <CardMedia
        component="img"
        height="194"
        image={content.urlToImage}
        alt="Paella dish"
      />
      <CardContent style={{height: 150, overflow: 'hidden'}}>
        <span>
          {`${day}, ${date} ${month} ${year}`}
        </span>
        <h3 >
          {content.title}
        </h3>
        <p>
          {content.description}
        </p>
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