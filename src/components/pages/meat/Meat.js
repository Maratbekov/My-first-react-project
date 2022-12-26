import React, {useState} from 'react';
import "./Meat.css"

const Meat = () => {
    const shapes = ["square",
        "circle",
        "trapezoid",
        "rectangle",
        "parallelogram",
        "triangle-up",
        "triangle-down",
        "triangle-left",
        "triangle-right",]
    const [shape, setShape] = useState("square")
    const getRondomShape = ()=> {
       const rondomIdx= Math.floor(Math.random() * shapes.length)
        setShape(shapes[rondomIdx])
    }
    return (
        <div className="container">
            <h1 style={{
                fontSize: "40px",
                color: "red",
                textAlign: "center"
            }}>Meat</h1>


            <button onClick={getRondomShape}>{shape}</button>
            <div style={{
                margin: "50px 0"
            }} className={shape}>

            </div>

        </div>
    );
};

export default Meat;