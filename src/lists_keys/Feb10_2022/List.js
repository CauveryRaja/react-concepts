import React, { useState } from 'react';

const List = () => {
    const [todos, setTodos] = useState([{
        id: 'todo-0',
        title: 'Todo 0'
    }, 
    {
        id: 'todo-1',
        title: 'Todo 1'
    }, 
    {
        id: 'todo-2',
        title: 'Todo 2'
    },
    {
        id: 'todo-3',
        title: 'Todo 3'
    }]);

    console.log('rerendering...', todos);

    const removeItem = (index) => {
        let arr = todos;
        arr.splice(index, 1);
        setTodos(arr);
    };

    return <ul>
        {
            todos.map((elm, index) => {
                return <li key={elm.id}>
                    {elm.title}
                    <button onClick={() => removeItem(index)}>X</button>
                </li>
            })
        }
    </ul>
};

export default List;