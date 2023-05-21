import useData from './useData';

const Message = () => {
    const [ message, setMessage ] = useData();

    console.log('hello', message);

    return <p>
        <button onClick={() => setMessage('Message')}>Click here</button>
    </p>
};

export default Message;