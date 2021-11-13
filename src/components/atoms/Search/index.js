import React, {useState} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import {useHistory} from 'react-router-dom'


const Search = () => {
  const [valueSearch, setValueSearch] = useState("")
  const history = useHistory()

  function onChange(e) {
    setValueSearch(e.target.value)
    e.preventDefault();
  }
    return ( 
        <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width:"100%", borderRadius:'30px', border:'0.2px solid grey' }}
      
      >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search News.."
        inputProps={{ 'aria-label': 'search the news' }}
        value={valueSearch}
        onChange = {onChange}
      />
      <IconButton type="submit" sx={{ p: '8x' }} aria-label="search" onClick={(e) => {history.push(`/${valueSearch}`); e.preventDefault()} }>
        <SearchIcon />
      </IconButton>
    </Paper>
    );
}


export default Search;