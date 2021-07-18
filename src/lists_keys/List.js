import React from 'react';

class List extends React.Component {
    constructor() {
        super();
        this.state = {
            list: [
                {label: 'Home'},
                {label: 'Products'},
                {label: 'Careers'},
                {label: 'Contact'},
            ]
        }
    }

    clickListener(index) {
        let items = [...this.state.list];
        items.splice(index);
        this.setState({
            list: items
        })
    }

    render() {
        return this.state.list.map((item, index) => {
           return <>
            <li>{item.label}</li>
            <button onClick={this.clickListener.bind(this, index)}>x</button>
           </>
        });
    }
}

export default List;