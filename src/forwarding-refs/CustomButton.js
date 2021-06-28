import React from 'react';

// For forwarding refs in Class components, need to proxy props 
// through an Intermediate component
// class CustomButton extends React.Component {
//     render() {
//         return (
//             <button
//         )
//     }
// }

const CustomButton = React.forwardRef((props, ref) => {
    const clickListener = () => {
        console.log('clicked...', ref);
        props.clickListener();
    }

    return (
        <button onClick={clickListener} ref={ref}>Click Me !</button>
    )
});

export default CustomButton;