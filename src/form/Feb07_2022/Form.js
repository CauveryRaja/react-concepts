import React, { useState } from "react";

const Form = () => {
    let [state, setState] = useState({
        name: 'hey'
    });

    function changeListener(event) {
        let obj = state;
        obj[event.target.name] = event.target.value;
        console.log(obj);
        setState(obj);
    }

    return <form>
        <input type="text" name="name" value={state.name} />
        <input type="number" name="age" value={state.age} onChange={changeListener}/>
    </form>
};

export default Form;