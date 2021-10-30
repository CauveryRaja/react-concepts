import React, { useState, useEffect } from 'react';

const Home = () => {
    let [msg, setMsg] = useState();
    let [count, setCount] = useState();

    useEffect(() => {
        console.log('inside effect of count', count);
    }, [count]);

    useEffect(() => {
        console.log('inside effect of msg', msg);
    }, [msg]);

    return <p>Rerendering !</p>
};

export default Home;