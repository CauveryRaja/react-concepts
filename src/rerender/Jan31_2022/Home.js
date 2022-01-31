import React from "react";

const Home = () => {
    let count = 0;

    const increment = () => {
        console.log('count', count);
        count++;
    }

    return <>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
    </>
}

export default Home;