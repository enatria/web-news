import React from 'react'
import { CardNews } from '../../molecules';
import useFetch from '../../../hooks/useFetch';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

const URL = 'https://newsapi.org/v2/top-headlines?country=id&apiKey=287523f3d2a8490fba3d719d94fb4536'
const ListNews = () => {

  const {loading, error, data} = useFetch(URL);

  if(loading) return 'Loading....';
    if (error) return 'something went wrong';


  return (
    <Box style={{margin: 50}}>
      <Container>
        <Grid container >
          {data.map((item, key) => {
            if (key === 0) {
              return (
                <Grid item xs={8} key={key}>
                  <CardNews content={item}/>
                </Grid>
              )
            }
            else if (key === 1) {
              return (
                <Grid item xs={4} key={key}>
                  <CardNews content={item}/>
                </Grid> 
              )
            } else {
              return (
                <Grid item xs md={6} lg={4} key={key}>
                  <CardNews content={item}/>
                </Grid>
              )
            }
          })}
          {/* <Grid item xs={8}>
            <CardNews/>
          </Grid>
          <Grid item xs={4}>
            <CardNews/>
          </Grid>
          <Grid item xs md={6} lg={4}>
            <CardNews/>
          </Grid>
          <Grid item xs md={6} lg={4}>
            <CardNews/>
          </Grid> */}
        </Grid>
      </Container>
    </Box>
  );
}


export default ListNews;