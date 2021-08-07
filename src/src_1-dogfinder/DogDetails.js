import React from "react"
import { NavLink, useParams } from "react-router-dom";
import Details from "./Details"
import "./DogDetails.css"

const DogDetails = ({ dogs }) => {

    const { dogName } = useParams();

    // find the dog in dogs whos name matches dogName.
    const dog = dogs.filter((dog) => {
        return dog.name === dogName;
    })

    return (
        <>
            {dog.length > 0
                ? <Details
                    name={dogName}
                    age={dog[0].age}
                    facts={dog[0].facts}
                    image={dog[0].src} />
                : <h2>We are sorry, we could not locate the details for {dogName}</h2>
            }
            <div className="DogDetails-div-clear">
                <nav className="DogDetails-nav">
                    <NavLink exact to="/dogs">
                        Back
                    </NavLink>
                </nav>
            </div>
        </>
    )

}

export default DogDetails;