import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';

function Dashboard({ count }) {
    return <p>Count: {count}</p>;
}

function Header() {
    console.log('Rendering Header...');
    return <p>Static header</p>;
}
Header = React.memo(Header);

function Home () {
    let [count, setCount] = useState(0);

    console.log('Rerendering...', count);

    useEffect(() => {
        setInterval(() => setCount(count++), 2000);
    }, []);

    return <h2>Welcome to check Rerendering !
        <Header />
        <Dashboard count={count}/>
    </h2>
};

export default Home;