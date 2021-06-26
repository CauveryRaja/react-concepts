import React, { Component } from 'react';
import GreetingContext from './GreetingContext';

class UserButton extends Component {
    render() {
        return (
            <>
                <div>Inside UserButton</div>
                <p>Greeting passed as prop through all Intermediate levels  : 
                    {this.props.greeting}
                </p>
                <p>Greeting fetched through Context  :
                    {this.context}
                </p>
            </>
        )
    }
}

UserButton.contextType = GreetingContext;

export default UserButton;