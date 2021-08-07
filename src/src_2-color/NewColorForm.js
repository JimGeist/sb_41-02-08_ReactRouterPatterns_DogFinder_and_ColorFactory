import React, { useState } from "react"
import { useHistory, NavLink } from "react-router-dom";
import "./NewColorForm.css";

const NewColorForm = ({ addColorFx }) => {

    const INITIAL_VALUE = {
        colorName: "",
        colorRGB: "#000000"
    }

    const history = useHistory();

    const [formData, setFormData] = useState(INITIAL_VALUE)

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(formData => (
            { ...formData, [name]: value }
        ))
    };

    const handleClick = (event) => {
        event.preventDefault();

        addColorFx(formData);
        history.push("/colors");
    }

    return (
        <form onSubmit={handleClick}>
            <input name="colorName" id="colorName" type="text" className="NewColorForm-Input"
                value={formData.colorName} placeholder="Name your color" required onChange={handleChange} />
            <input name="colorRGB" id="colorRGB" type="color" className="NewColorForm-Input"
                value={formData.colorRGB} onChange={handleChange} />
            <button >Add</button>
            <NavLink exact to={`/colors`}>
                Back
            </NavLink>
        </form>
    )

}

export default NewColorForm;