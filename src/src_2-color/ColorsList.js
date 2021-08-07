import React from "react"
import { NavLink } from "react-router-dom";
import Colors from "./Colors";

import "./ColorsList.css"

const ColorsList = ({ colors }) => {

    // List the colors that are in colors or provide a link to add a color.
    return (
        <>
            {
                colors.length > 0
                    ? <Colors colors={colors} />
                    : <h3>Begin by <NavLink exact to={`/colors/new`}>adding a color</NavLink>.</h3>
            }
        </>
    )

}

export default ColorsList;