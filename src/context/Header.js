import React, { Component } from 'react';
import UserButton from './UserButton';
import ThemedButton from './ThemedButton';

class Header extends Component {
    render() {
        return (
            <>
                <div greeting={this.props.greeting}>Inside Header</div>
                <UserButton greeting={this.props.greeting}></UserButton>
                <ThemedButton></ThemedButton>
            </>
        )
    }
}

export default Header;