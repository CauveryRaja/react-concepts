import React, { useEffect, useReducer } from "react";

const reducer = (state, action) => {
    switch(action.type) {
        case 'entry': return 'Good to see you !';
        case 'progress': return 'You are in progress !!!';
        case 'exit': return 'Good bye !';
    }
}

function Message() {
    let [msg, dispatch] = useReducer(reducer, 'Hello');

    useEffect(() => dispatch({type: 'entry'}), []);

    useEffect(() => console.log('Updated...', msg), [msg]);

    return <p>
        {msg} Welcome to Reducer hook
        <button onClick={() => dispatch({type: 'progress'})}>In progress</button>
    </p>

}

export default Message;