import React, { useState, useEffect } from "react";

function Message ({ name, greeting}) {
    let [count, setCount]  = useState(0);
    let text;

    useEffect(() => {
        console.log('Side effect...');
        text = 'Updated';
        // setCount(Math.random());
        // return function() {
        //     console.log('Effect cleanup...');
        // }
    });

    return (
        <>
            <div>{greeting}, {name} - Welcome to Hooks !</div>
            <p>Count: {count}</p>
            <p>Text: {text}</p>
            <button onClick={() => setCount(++count)}>Step up</button>
        </>
    )
}

export default Message;