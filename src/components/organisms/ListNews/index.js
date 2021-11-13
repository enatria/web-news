import React from 'react'
import { CardNews } from '../../molecules';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Loader from "react-loader-spinner";
import useFetch from '../../../hooks/useFetch'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    marginTop:'40',
    textAlign:'center',
  },
});

export const endpoints = {
  EVERYTHING: 'everything',
  HEADLINES: 'top-headlines'
}

const ListNews = ({ endpoint, country, query, gridNoBreakPoint }) => {
  const classes = useStyles();
  const API_KEY   = '287523f3d2a8490fba3d719d94fb4536'
  const URL       = `https://newsapi.org/v2/${endpoint}?apiKey=${API_KEY}${country ? '&country='+country : '' }${query ? '&q='+query : '' }`

  const {loading, error, data} = useFetch(URL)

  return (
    <Box >
      <Container>
        {loading ?
          <Box className={classes.root} component="div" mt={5}>
            <Loader
              type="Puff"
              color="#333333"
              height={50}
              width={60}
              timeout={3000} //3 secs
            />
          </Box>
          
        : error ?
        <h1>{error}</h1>
        : <Grid container >
          {data?.map((item, key) => {
            if (gridNoBreakPoint) {
              return (
                <Grid item xs md={6} lg={4} key={key}>
                  <CardNews content={item}/>
                </Grid>
              )
            } else {
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
            }
          })}
        </Grid>}
      </Container>
    </Box>
  );
}

ListNews.defaultProps = {
  endpoint: endpoints.HEADLINES,
  gridNoBreakPoint: false
}

export default ListNews;