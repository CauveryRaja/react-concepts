import { useEffect } from 'react';
import useData from './useData';

const Sample = () => {
    const [ message, setMessage ] = useData();

    console.log('Sample', message);

    useEffect(() => console.log('inside sample effect', message), [message]);

    return <p>Hello, ths is Sample component - {message}
    
    <button onClick={() => setMessage('Sample')}>Click here</button></p>
};

export default Sample;