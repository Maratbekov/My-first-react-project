import React, {useState} from 'react';

const Sign = () => {
    const [second,setSecond] = useState(0)
    const [count,setCount] = useState(0)
    let t = 0
    const startTaimer = ()=> {
       let id = setInterval(()=>{
            t++
            setSecond(t)
        },1000)

        setTimeout( ()=> {
            clearInterval(id)
        },10000)
    }
    return (
        <div>
            <h1 style={{
                fontSize: "40px",
                color: "red",
                textAlign: "center"
            }}>Sign</h1>

            <button onClick={startTaimer}>start : {second}</button>

        </div>
    );
};

export default Sign;