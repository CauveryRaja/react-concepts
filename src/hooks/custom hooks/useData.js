import { useState, useEffect } from "react"

const useData = () => {
    const [message, setMessage] = useState('default');

    useEffect(() => {
        console.log('message in hooks', message);
    }, [message]);

    return [
        message,
        setMessage
    ]
}

export default useData;