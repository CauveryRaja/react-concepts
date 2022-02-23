import React, { useState, useEffect } from 'react';

const Home = () => {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState();
    console.log('Outside effects', count);

    useEffect(() => {
        console.log('Count updated ', count);
    }, [count])

    const clickListener = () => {
        console.log('Button clicked');
        setCount(count+1);
        setCount(count+2);
        setMessage('Hello World !');
        console.log('Button : After setting count', count);
    };

    useEffect(() => {
        console.log('Effect : Before setting');
        setCount(count+1);
        setCount(count+2);
        setMessage('Hello World !');
        console.log('Effect : After setting', count);
    }, []);

    return <>
        <button onClick={clickListener}>Step up</button>
        <p>Count: {count}</p>
    </>
};

export default Home;