import React, { Component } from 'react';
import Home from './Home';
import GreetingContext from './GreetingContext';
import ThemeContext from './ThemeContext';

class Dashboard extends Component {

    render() {
        return (
            <>
                <GreetingContext.Provider value="Hello, Raja">
                    <ThemeContext.Provider value="dark">
                        <div>Inside Dashboard</div>
                        <Home greeting="Hello, Ram"></Home>
                    </ThemeContext.Provider>
                </GreetingContext.Provider>
            </>
        )
    }
}

export default Dashboard;