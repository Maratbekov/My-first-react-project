import React, {useState} from "react";
import {Link} from "react-router-dom";


const ClothCard = ({item})=> {
    const [open, setOpen] = useState(false)
    return (
        <div className="col-4" key={item.id}>
            <Link to={`/support/${item.id}`}>
                <img src={item.image} alt=""/>
            </Link>
            <p style={{
                // textAlign: "center"
            }}>{item.title}</p>
            <button onClick={() => {
                setOpen(!open)
            }
            }>заказать
            </button>
            <input style={{
                display: open ? "block" : "none"
            }} type="text" className="cloth-input"/>
        </div>
    )
}

export default ClothCard;