import React from 'react';

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: 0
        };
        this.changeValue = this.changeValue.bind(this);
    }

    changeValue(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    btnClick(event) {
        event.preventDefault();
    }
    
    render() {
        return <form>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={this.state.name} onChange={this.changeValue}/>
            </div>
            <div>
                <label htmlFor="age">Age</label>
                <input type="number" name="age" value={this.state.age} onChange={this.changeValue}/>
            </div>
            <button onClick={this.submitForm}>Submit</button>
        </form>
    }
}

export default Form;