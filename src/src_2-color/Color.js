import React from "react"
import { NavLink, useParams, useHistory } from "react-router-dom";

import { colorExists } from "./helpers/helpers";

import "./Color.css"

const Color = ({ colors }) => {

    const { urlColor } = useParams();
    const history = useHistory();

    const results = colorExists(colors, urlColor)

    // when urlColor was found in colors, return a div with the color for the background.
    //  otherwise, go back to /colors.
    return (
        <>
            {
                results.success
                    ? <>
                        <div className="Color-div" style={{ backgroundColor: results.colorRGB }}>
                            <h1 className="Color-h1">{urlColor}</h1>
                            <NavLink className="Color-h1" exact to={`/colors`}>
                                Back
                            </NavLink>
                        </div>
                    </>
                    : history.push("/colors")

            }


        </>
    )

}

export default Color;