import React from 'react'
import { CardNews } from '../../molecules';


import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';


const ListNews = () => {
    return (
    <Box style={{margin: 50}}>
        <Container>
        <Grid container >
        <Grid item xs md={6} lg={4}>
          <CardNews/>
        </Grid>
        <Grid item xs md={6} lg={4}>
          <CardNews/>
        </Grid>
        <Grid item xs md={6} lg={4}>
          <CardNews/>
        </Grid>
        <Grid item xs md={6} lg={4}>
          <CardNews/>
        </Grid>
      </Grid>
      </Container>
    </Box>
     );
}

 
export default ListNews;