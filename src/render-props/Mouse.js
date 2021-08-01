import React from 'react';
import Cat from './Cat';

class Mouse extends React.Component {
    constructor() {
        super();
        this.state = {
            x: 0,
            y: 0
        };
        this.mouseMove = this.mouseMove.bind(this)
    }

    mouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }

    render() {
        return <>
            <div style={{width: '500px', height: '500px', border: '1px solid black'}}
            onMouseMove={this.mouseMove}>
                <Cat x={this.state.x} y={this.state.y}></Cat>
            </div>
            <p>{`x: ${this.state.x}, y: ${this.state.y}`}</p>
        </>
    }
}

export default Mouse;