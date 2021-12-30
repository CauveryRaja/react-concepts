/* If a child component is rendered conditionally, 
will it rerender/remount when condition changes */

import React, { useEffect, useState } from "react";

const Child = () => {

    useEffect(() => {
        console.log('rendering child component');
    }, []);

    return <>
        This is child component !
    </>
}

const Home = () => {
    let [flag, setFlag] = useState(false);
    return <>
        { flag && <Child></Child> }
        <button onClick={() => setFlag(!flag)}>Toggle</button>
    </>
}

export default Home;