import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Search from '../../atoms/Search';
import './index.css';

const Hero = () => {
    return (
        <Box component="div">
            <Container>
                <Box className="hero" component="div">
                    <Box component="div" className="typography-group">
                        <h1>
                        A good place to read <br /> updated news 
                        </h1>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </Box>
                    <div style={{width:800}}>
                    <Search/>
                    </div>
                </Box>
            </Container>
        </Box>
     );
}
 
export default Hero;