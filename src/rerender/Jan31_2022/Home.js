import React from "react";

const Home = () => {
    let count = 0;

    // console.log('rerendering...', count);

    const increment = () => {
        console.log('count', count);
        count++;
        // Home();
    }

    return <>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
    </>
}

export default Home;