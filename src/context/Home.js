import React, { Component } from 'react';
import Header from './Header';

class Home extends Component {
    render() {
        return (
            <>
                <div greeting={this.props.greeting}>Inside Home</div>
                <Header greeting={this.props.greeting}></Header>
            </>
        )
    }
}

export default Home;