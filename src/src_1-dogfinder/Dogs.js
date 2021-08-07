import React from "react"
import { v4 as uuid } from 'uuid';
import { NavLink } from "react-router-dom";
import "./Dogs.css"

const Dogs = ({ dogs }) => {

    return (
        <>
            {
                dogs.map(dog => {
                    return (
                        <NavLink key={uuid()} exact to={`/dogs/${dog.name}`}>
                            <div className="Dogs-div">
                                <h1>{dog.name}</h1>
                                <img className="Dogs-img"
                                    src={dog.src}
                                    alt={dog.name}
                                />
                            </div>
                        </NavLink>
                    )
                })
            }
        </>
    )

}

export default Dogs;