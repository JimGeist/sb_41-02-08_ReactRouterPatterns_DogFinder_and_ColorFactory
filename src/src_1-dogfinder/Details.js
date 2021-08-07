import React from "react"
import { v4 as uuid } from 'uuid';

import "./Details.css"

const Details = ({ name, age, facts, image }) => {

    return (
        <div>
            <div className="Details-div">
                <img className="Dogs-img"
                    src={image}
                    alt={name}
                />
            </div>
            <div className="Details-div">
                <h1>Introducing {name}!</h1>
                <h2>{name} is {age} years old.</h2>
                <h2>{name}-bits:</h2>
                {
                    facts.map(fact => (<h3 key={uuid()}>{fact}</h3>))
                }

            </div>
        </div>
    )

}

export default Details;