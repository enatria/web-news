import React, { useEffect, useState } from 'react'
import { CardNews } from '../../molecules';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import axios from 'axios';

export const endpoints = {
  EVERYTHING: 'everything',
  HEADLINES: 'top-headlines'
}

const ListNews = ({endpoint, country, query}) => {
  const API_KEY   = '287523f3d2a8490fba3d719d94fb4536'
  const URL       = `https://newsapi.org/v2/${endpoint}?apiKey=${API_KEY}${country ? '&country='+country : '' }${query ? '&q='+query : '' }`

  const [data, setData] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    
    let isMounted = true
    setLoading(true)

    axios.get(URL)
      .then(res => {
        if (isMounted) {
          setData(res.data.articles)
          setError(false)
        }
      })
      .catch(error => {
        if (isMounted) {
          setError(error)
          setData([])
        }
      })
      .finally(() => setLoading(false))

    return () => (
      isMounted = false
    )
  }, [URL])

  return (
    <Box style={{margin: 50}}>
      <Container>
        {loading ?
        <h1>Loading</h1>
        : error ?
        <h1>{error}</h1>
        : <Grid container >
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
        </Grid>}
      </Container>
    </Box>
  );
}

ListNews.defaultProps = {
  endpoint: endpoints.EVERYTHING
}

export default ListNews;