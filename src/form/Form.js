import React from 'react';

class Form extends React.Component {
    constructor() {
        super();
        // this.state = 'hello';
        this.state = ['hello'];
    }

    btnClick(event) {
        // this.setState('hai');
        this.setState(['hai']);
        event.preventDefault();
    }
    
    render() {
        return <form>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="name"/>
            </div>
            <div>
                <label htmlFor="age">Age</label>
                <input type="text" name="age"/>
            </div>
            <button onClick={this.btnClick}>Set state</button>
        </form>
    }
}

export default Form;