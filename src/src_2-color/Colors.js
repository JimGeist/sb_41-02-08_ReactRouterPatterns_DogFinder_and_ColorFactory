import React from "react"
import { v4 as uuid } from 'uuid';
import { NavLink } from "react-router-dom";


import ColorLink from "./ColorLink";

import "./Colors.css"

/**
 * Colors builds the list of colors. Each color in the list has a clickable link
 * @param {*} colors, the deconstructed list of colors maintained by useState. 
 * @returns a div with a header and the colors list.
 */
const Colors = ({ colors }) => {

    return (
        <dir className="Colors-divMain">
            <h3><NavLink exact to={`/colors/new`}>Add another color</NavLink>.</h3>
            <ul className="Colors-ul">
                {
                    colors.map(color => (
                        <li key={uuid()}><ColorLink color={color.colorName} /></li>
                    ))
                }
            </ul>
        </dir>
    )

}

export default Colors;