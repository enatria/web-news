import React from 'react'
import { Link as RouteLink } from 'react-router-dom'
import MuiLink from '@mui/material/Link'

function Link(props) {
    return (
        <RouteLink style={{textDecoration: 'none'}} to={props.href}>
            <MuiLink underline="hover">
                {props.children}
            </MuiLink>
        </RouteLink>
    )
}

export default Link
