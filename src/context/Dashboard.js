import React, { Component } from 'react';
import Home from './Home';
import GreetingContext from './GreetingContext';
import ThemeContext from './ThemeContext';

class Dashboard extends Component {
    state = {
        theme: 'dark',
        updateTheme: () => {
            if(this.state.theme === 'light')
                this.setState({theme: 'dark'});
            else 
                this.setState({theme: 'light'}); 
        }
    };

    render() {
        return (
            <>
                <GreetingContext.Provider value="Hello, Raja">
                    <ThemeContext.Provider value={this.state}>
                        <div>Inside Dashboard</div>
                        <Home greeting="Hello, Ram"></Home>
                    </ThemeContext.Provider>
                </GreetingContext.Provider>
            </>
        )
    }
}

export default Dashboard;