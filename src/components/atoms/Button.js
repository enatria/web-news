<<<<<<< HEAD
import React from "react";
// import { color } from '../_global-conf'
import { Link as RouteLink } from "react-router-dom";
import MuiButton from "@mui/material/Button";
import PropTypes from "prop-types";
=======
import React from 'react'
import { color } from '../_global-conf'
import { Link as RouteLink } from 'react-router-dom'
import MuiButton from '@mui/material/Button'
import PropTypes from 'prop-types'
>>>>>>> b8cd445e350bce1a92b8a9b9719e1092655f67af

export const buttonVariant = {
  DEFAULT: "contained",
  OUTLINED: "outlined",
};

function Button(props) {
<<<<<<< HEAD
  console.log(process.env.REACT_APP_COLOR_PRIMARY);
  return (
    <RouteLink style={{ textDecoration: "none" }} to={props.href}>
      <MuiButton color="secondary" variant={props.variant}>
        {props.children}
      </MuiButton>
    </RouteLink>
  );
=======
    return (
        <RouteLink style={{textDecoration: 'none'}} to={props.href}>
            <MuiButton variant={props.variant} style={{backgroundColor: color.PRIMARY}}>
                {props.children}
            </MuiButton>
        </RouteLink>
    )
>>>>>>> b8cd445e350bce1a92b8a9b9719e1092655f67af
}

Button.defaultProps = {
  variant: buttonVariant.DEFAULT,
};

Button.propTypes = {
  href: PropTypes.string,
  variant: PropTypes.string,
};

export default Button;
