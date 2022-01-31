import React, { useState, useContext, useEffect } from "react";

const Context = React.createContext();

const Provider = ({ children }) => {
    // let state = {
    //     name: 'Context app',
    //     email: 'context@gmail.com'
    // };

    const [name, setName] = useState('Context app');
    const [email, setEmail] = useState('context@gmail.com');

    useEffect(() => {
        setTimeout(() =>setName('Context app updated'), 10000);
    }, []);
    
    console.log('rendering Provider');
    return <Context.Provider value={{name, email}}>{children}</Context.Provider>
};

const About = () => {
    let { name } = useContext(Context);

    console.log('rendering About');

    return <p>Name: {name}</p>
}

const Contact = () => {
    let { email } = useContext(Context);

    console.log('rendering Contact');

    return <p>Email: {email}</p>
}

const Message = () => {
    console.log('rendering Message');

    return <p>Message: Hello World</p>
}

const Home = () => {

    console.log('rendering Home');

    return <Provider>
        <About />
        <Contact />
        <Message />
    </Provider>
}

export default Home;