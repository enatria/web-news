import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Search from '../../atoms/Search';
import './index.css';

const Hero = () => {
    return (
        <Box component="div">
            <Container>
                <Box className="hero" component="div">
                    <Box component="div" className="typography-group">
                        <Typography variant="h1" component="h1" sx={{fontSize:55, fontWeight:600}}>
                        A good place to read <br /> updated news 
                        </Typography>
                        <Typography  component="p">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        </Typography>
                    </Box>
                    <Search/>
                </Box>
            </Container>
        </Box>
     );
}
 
export default Hero;