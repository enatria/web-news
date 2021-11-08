import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';


const Search = () => {
    return ( 
        <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width:"100%", borderRadius:'30px', border:'0.2px solid grey' }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search News.."
        inputProps={{ 'aria-label': 'search the news' }}
      />
      <IconButton type="submit" sx={{ p: '8x' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
     );
}


export default Search;