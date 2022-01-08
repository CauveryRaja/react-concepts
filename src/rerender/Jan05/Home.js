import React, { useState } from 'react';

const Home = () => {
    let [count, setCount] = useState(0);
    let message = 'Count is ' + count;

    const clickListener = () => {
        setCount((previousCount) => {
            console.log('Updating count ', previousCount);
            return count+1;
        });
    };

    return <div>
        {console.log('Inside div')}
        <p>
            {console.log('Inside para')}
            {message}
        </p>
        <button onClick={clickListener}>
            {console.log('Inside button')}
            Increment
        </button>
    </div>
};

export default Home;