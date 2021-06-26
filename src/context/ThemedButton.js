import React from 'react';
import GreetingContext from './GreetingContext';
import ThemeContext from './ThemeContext';

class ThemedButton extends React.Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {
                    ({theme, updateTheme}) => (
                        <GreetingContext.Consumer>
                            {
                                greeting => (
                                    <>
                                        <div>Inside Themed Button</div>
                                        <button onClick={updateTheme}>Toggle theme</button>
                                        <p>{`${theme} themed button displaying
                                         ${greeting}`}</p>
                                    </>
                                )
                            }
                        </GreetingContext.Consumer>
                    )
                }

            </ThemeContext.Consumer>
        )
    }
}

export default ThemedButton;