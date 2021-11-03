import React from 'react'
import { color } from '../_global-conf'
import { Link as RouteLink } from 'react-router-dom'
import MuiButton from '@mui/material/Button'
import PropTypes from 'prop-types'

export const buttonVariant = {
    DEFAULT: 'contained',
    OUTLINED: 'outlined'
}


function Button(props) {
    return (
        <RouteLink style={{textDecoration: 'none'}} to={props.href}>
            <MuiButton variant={props.variant} style={{backgroundColor: color.PRIMARY}}>
                {props.children}
            </MuiButton>
        </RouteLink>
    )
}

Button.defaultProps = {
    variant: buttonVariant.DEFAULT
}

Button.propTypes = {
    href: PropTypes.string,
    variant: PropTypes.string
}

export default Button
