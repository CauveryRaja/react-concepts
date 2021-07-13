import React from 'react';
import ReactDOM from 'react-dom';

class Modal extends React.Component {
    render() {
        let modalDOM = document.getElementById('modal');
        return ReactDOM.createPortal(<div>Inside Modal...</div>, modalDOM);
    }
}

export default Modal;