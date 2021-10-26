import React from 'react'
import { Link as RouteLink } from 'react-router-dom'
import MuiLink from '@mui/material/Link'

function Link(props) {
    return (
        <RouteLink style={{textDecoration: 'none', color:'black'}} to={props.href}>
            <MuiLink underline="none">
                {props.children}
            </MuiLink>
        </RouteLink>
    )
}

export default Link
