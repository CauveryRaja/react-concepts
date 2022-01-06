import React, { useState, memo, useCallback } from 'react';

const Parent = () => {
    const [count, setCount] = useState(0);

    console.log('rendering parent ', count);

    // Useful only when child is memoized using React.memo
    const fun = useCallback(() => {
        console.log('hello, this is func');
    }, []);

    return <>
        <div>
            <p>
                Hey, this is parent count: {count}
            </p>
            <button onClick={() => setCount(count+1)}>Increment</button>
        </div>
        <Child fun={fun} />
    </>
};

const Child = ({ count, fun }) => {

    console.log('rendering child ', count, fun);
    
    return <div>
        <p>Hey, this is child count: {count}</p>
    </div>
};

export default Parent;