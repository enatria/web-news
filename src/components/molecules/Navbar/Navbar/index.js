import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Hidden from '@mui/material/Hidden';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '../../../atoms/Button';
import Link from '../../../atoms/Link';
import Drawer from "@mui/material/Drawer";
import Container from "@mui/material/Container";

import './index.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="app-bar">
        <Container>
        <Toolbar>
        <Hidden mdUp>
        <IconButton  size="large"
        
            edge="start"
            aria-label="menu"
            sx={{ mr: 2}} onClick={() => setOpen(true)}>
              <MenuIcon color="success" />
          </IconButton>
        </Hidden>
          <Typography variant="h6" component="div" sx className="brand">
            News
          </Typography>
          <Hidden smDown>
          <div className="nav-link">
            <Box sx={{
              display:'flex',
              justifyContent: 'space-around',
              flexDirection: 'row',
              alignItems: 'center'
            }}>
              <Box><Link href={'/'}>Indonesia</Link></Box>
              <Box><Link href={'/programming'}>Programming</Link></Box>
              <Box><Link href={'/covid'}>Covid-19</Link></Box>
            </Box>
          </div>
          <Button href={"/login"}>Login</Button>
          </Hidden>
          </Toolbar>
        </Container>
        
          <Drawer
        anchor="top"
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      >
        <div>
            <Box sx={{
              display:'flex',
              flexDirection: 'column',
              margin:8
            }}>
              <Box sx={{marginBottom:2}}><Link>Indonesia</Link></Box>
              <Box sx={{marginBottom:2}}><Link>Programming</Link></Box>
              <Box sx={{marginBottom:2}}><Link>Covid-19</Link></Box>
            <Button>Login</Button>
            </Box>
          </div>
      </Drawer>
      </AppBar>
    </Box>
  );
}