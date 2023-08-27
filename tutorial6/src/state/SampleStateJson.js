import { useState } from "react";
import ReactDOM from "react-dom/client";

function CarJson() {
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
    });

    // sample class for update state
    const updateColor = () => {
        setCar(previousState => {
            return { ...previousState, color: "blue" }
        });
    }

    return (
        <>
            <h1>My {car.brand} with json state</h1>
            <p>
                It is a {car.color} {car.model} from {car.year}.
            </p>
            <button
                type="button"
                onClick={updateColor}  //sample update state json with spesific key
            >Blue</button>
        </>
    )
}

export default CarJson