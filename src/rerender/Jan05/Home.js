import React, { useState } from 'react';

const Home = () => {
    let [count, setCount] = useState(0);
    let message = 'Count is ' + count;

    return <>
        <p>{message}</p>
        <button onClick={() => setCount(count+1)}>Increment</button>
    </>
};

export default Home;