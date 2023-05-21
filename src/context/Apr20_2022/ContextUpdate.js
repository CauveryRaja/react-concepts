import React, { useState, useContext, useEffect } from "react";

const Context = React.createContext();

const Provider = ({ children }) => {

    const [name, setName] = useState('Context app');

    function clearName() {
        setName(undefined);
    }

    function getName() {
        console.log('Get name', name);
        if(!name) {
            setName('hai');
        }
        return name;
    }
    
    return <Context.Provider value={{name, clearName, getName}}>{children}</Context.Provider>
};

const Comp = () => {
    let { clearName, getName } = useContext(Context);

    function update() {
        clearName();
        setTimeout(getName, 1000);
    }

    return <>
        <button onClick={getName}>Get</button>
        <button onClick={clearName}>Clear</button>
        <button onClick={update}>Update</button>
    </>
};

export default () => <Provider><Comp /></Provider>;