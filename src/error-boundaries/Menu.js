import React from 'react';

class Menu extends React.Component {
    render() {
        if(5)
            throw new Error('Custom Menu Error');
        return <div>Menu component</div>;
    }
}

export default Menu;