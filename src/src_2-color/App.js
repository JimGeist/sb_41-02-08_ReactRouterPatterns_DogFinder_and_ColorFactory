import React, { useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ColorsList from "./ColorsList";
import NewColorForm from "./NewColorForm";
import Color from "./Color";

import './App.css';


function App() {

    document.title = "Color Factory";

    // const [myColors, setMyColors] = useState([
    //     { colorName: "red", colorRGB: "#F00" },
    //     { colorName: "green", colorRGB: "#0F0" },
    //     { colorName: "blue", colorRGB: "#00F" }]);

    const [myColors, setMyColors] = useState([]);

    const addNewColor = (newColorInfo) => {
        setMyColors(myColors => (
            ([newColorInfo, ...myColors])
        ))
    }

    // console.log("\n\nApp myColors in state:");
    // console.dir(myColors);
    // console.log("   App return is next");

    return (
        <div className="App">
            <h1>Welcome to the color factory.</h1>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/colors">
                        <ColorsList colors={myColors} />
                    </Route>
                    <Route exact path="/colors/new"><NewColorForm addColorFx={addNewColor} /></Route>
                    <Route exact path="/colors/:urlColor"><Color colors={myColors} /></Route>
                    <Redirect to="/colors" />
                </Switch>
            </BrowserRouter>

        </div>
    );
}


export default App;
