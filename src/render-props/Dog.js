import React from 'react';

class Dog extends React.Component {
    render() {
        return <p style={{position: 'absolute', top: this.props.y, left: this.props.x}}>
            Dog
        </p>
    }
}

export default Dog;