import React from 'react';

const FormComponent = () => {

    const changeListener = (event) => {
        console.log(event);
    };

    return <form>
        <label>Full name</label>
        <input type="text" value="5" name="full-name" onChange={changeListener}/>
    </form>
};

export default FormComponent;