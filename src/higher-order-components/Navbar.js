import React from 'react';
import userHOC from './userHOC';

class Navbar extends React.Component {
    render() {
        return <>
            <div>Hello, {this.props.name}</div>
        </>
    }
}

export default userHOC(Navbar);