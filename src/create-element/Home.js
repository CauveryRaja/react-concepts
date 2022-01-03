import React from "react"

const Child = ({ msg }) => React.createElement('div', {}, msg + ', This is child component');

const Home = () => React.createElement(Child, { msg: 'Hello' }, null);

export default Home;