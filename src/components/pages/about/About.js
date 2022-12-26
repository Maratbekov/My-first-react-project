import React, {useState} from 'react';
import app from "../../../App";

const About = ({text}) => {
    // console.log(props)
    const [open, setOpen] = useState(false)
    // console.log(open)
    return (
        <div className="container">
            <h1 style={{
                fontSize: "40px",
                color: "red",
                textAlign: "center"
            }}>About</h1>
            {/*<h2>{props.text}</h2>*/}
            <h1>{text}</h1>
             <button onClick={()=> {
                 // setOpen(open ? false : true)
                 setOpen(!open)
             }}>{open ? "close modal" : "open modal"}</button>
            <div style={{
                width: "300px",
                display: open ? "block" : "none",
                border: "1px dashed grey",
                padding: "10px",
                margin: "30px"
            }} className="modal">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid doloremque eum fuga laborum, nisi,
                quam qui quibusdam quos repellendus repudiandae tempore voluptas! A aliquam animi consequatur corporis
                debitis dolore doloribus eum exercitationem impedit iste itaque magnam minima molestiae nemo nisi
                nostrum quasi quibusdam quo, sint voluptates. Dolores quis, quos!
                <button
                    onClick={()=>{
                        setOpen(false)
                    }}
                >&times;</button>
            </div>
        </div>
    );
};

export default About;