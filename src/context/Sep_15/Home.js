import React from "react";
import Dashboard from "./Dashboard";
import UserContext from "./UserContext";

class Home extends React.Component {

    constructor() {
        super();
        this.username = 'sri';
    }

    render() {
        return <UserContext.Provider value={{username: 'raja'}}>
            <Dashboard></Dashboard>
        </UserContext.Provider>
    }
}

export default Home;