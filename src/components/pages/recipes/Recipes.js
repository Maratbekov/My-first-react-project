import React, {useState} from 'react';

const Recipes = () => {
    // hooks
    const [count, setCount] = useState(0)
    console.log(count)
    const incrementCount = ()=> {
        setCount(count + 1)
    }
    const decrementCount = ()=> {
        setCount( count - 1)
    }
    return (
        <div className="container">

            <h1 style={{
                fontSize: "40px",
                color: "red",
                textAlign: "center"
            }}>Recipes</h1>
            {/*<button onClick={()=> setCount( count + 1) }>increment</button>*/}
            <button onClick={incrementCount}>increment</button>
            <h2>{count}</h2>
            <button onClick={decrementCount}>decrement</button>
            
        </div>
    );
};

export default Recipes;