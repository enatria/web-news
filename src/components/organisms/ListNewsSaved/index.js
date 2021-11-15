import React from 'react'
import { CardNewsSaved } from '../../molecules';

import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles({
//   root: {
//     width: '100%',
//     marginTop:'40',
//     textAlign:'center',
//   },
// });



const ListNewsSaved = () => {
  const news = useSelector((state) => state.news)
  console.log(news);

  return (
    <Box >
      <Container>
        <Grid container >
          {news?.map((item) => (
            <Grid item xs md={6} lg={4}>
              <CardNewsSaved content={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default ListNewsSaved;