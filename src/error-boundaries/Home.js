import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import Menu from './Menu'

class Home extends React.Component {
    render() {
        return (
            <ErrorBoundary>
                <div>Welcome to Home !</div>
                <Menu></Menu>
            </ErrorBoundary>
        )
    }
}

export default Home;