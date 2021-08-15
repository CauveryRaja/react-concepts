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
        });
    }

    clickListener2(index) {
        let items = [...this.state.list];
        items.splice(index);
        // items.pop();
        // items[index].label = 'updated...';
        this.setState({
            list: items
        });
    }

    render() {
        // return this.state.list.map((item, index) => {
        //    return <>
        //     <li>{item.label}</li>
        //     <button onClick={this.clickListener.bind(this, index)}>x</button>
        //    </>
        // });
        return <ul>
            <li>{this.state.list[0].label}</li>
            <li>{this.state.list[1].label}</li>
            <li>{this.state.list[2].label}</li>
            <li>{this.state.list[3].label}</li>
            <button onClick={this.clickListener2.bind(this, 2)}>x</button>
        </ul>
    }
}

export default List;