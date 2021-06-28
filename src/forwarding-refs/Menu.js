import React from 'react';
import CustomButton from './CustomButton';

class Menu extends React.Component {
    buttonRef = React.createRef();

    buttonClickListener() {
        console.log('Inside Menu...');
        this.buttonRef.current.click();
    }

    render() {
        return (
            <div>
                <CustomButton ref={this.buttonRef} 
                    clickListener={this.buttonClickListener.bind(this)}>
                </CustomButton>
            </div>
        )
    }
}

export default Menu;