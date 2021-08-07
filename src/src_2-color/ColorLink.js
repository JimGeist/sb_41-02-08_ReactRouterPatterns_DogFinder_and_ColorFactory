import React from "react"

import { NavLink } from "react-router-dom";
import "./ColorLink.css"

/**
 * ColorLink builds the link for the color passed in as props.
 * @param {*} color, deconstructed props, the name of the color to include in 
 * the NavLink.
 * @returns 
 */
const ColorLink = ({ color }) => {

    // builds a NavLink for the color

    return (
        <NavLink exact to={`/colors/${color}`}>
            {color}
        </NavLink>
    )

}

export default ColorLink;