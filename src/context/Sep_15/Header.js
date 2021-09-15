import React from "react";
import UserContext from "./UserContext";

class Header extends React.Component {
    render() {
        return <>
            <p>Hello, {this.context.username}</p>
        </>
    }
};

Header.contextType = UserContext;

export default Header;