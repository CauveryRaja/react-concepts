import React from 'react';

class Cat extends React.Component {
    render() {
        return <p style={{position: 'absolute', top: this.props.y, left: this.props.x}}>
            Cat
        </p>
    }
}

export default Cat;