import React from 'react'
import { Link as RouteLink } from 'react-router-dom'
import MuiLink from '@mui/material/Link'

function Link(props) {
    return (
        <RouteLink style={{textDecoration: 'none', fontSize:18}} to={props.href}>
            <MuiLink underline="none" sx={{ color:'white'}}>
                {props.children}
            </MuiLink>
        </RouteLink>
    )
}

export default Link
