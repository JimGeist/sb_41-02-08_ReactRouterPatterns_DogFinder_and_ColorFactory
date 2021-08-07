import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Dogs from "./Dogs";
import DogDetails from "./DogDetails";

import imgWhiskey from "./static/whiskey.jpg";
import imgDuke from "./static/duke.jpg";
import imgPerry from "./static/perry.jpg";
import imgTubby from "./static/tubby.jpg";

import './App.css';


function App(props) {

    document.title = "Dog Finder";

    return (
        <div className="App">

            <BrowserRouter>
                <Switch>
                    <Route exact path="/dogs">
                        <Dogs dogs={props.dogs} />
                    </Route>
                    <Route exact path="/dogs/:dogName"><DogDetails dogs={props.dogs} /></Route>
                    <Redirect to="/dogs" />
                </Switch>
            </BrowserRouter>

        </div>
    );
}


App.defaultProps = {
    dogs: [
        {
            name: "Whiskey",
            age: 5,
            src: imgWhiskey,
            facts: [
                "Whiskey loves eating popcorn.",
                "Whiskey is a terrible guard dog.",
                "Whiskey wants to cuddle with you!"
            ]
        },
        {
            name: "Duke",
            age: 3,
            src: imgDuke,
            facts: [
                "Duke believes that ball is life.",
                "Duke likes snow.",
                "Duke enjoys pawing other dogs."
            ]
        },
        {
            name: "Perry",
            age: 4,
            src: imgPerry,
            facts: [
                "Perry loves all humans.",
                "Perry demolishes all snacks.",
                "Perry hates the rain."
            ]
        },
        {
            name: "Tubby",
            age: 4,
            src: imgTubby,
            facts: [
                "Tubby is really stupid.",
                "Tubby does not like walks.",
                "Angelina used to hate Tubby, but claims not to anymore."
            ]
        }
    ]
}

export default App;
