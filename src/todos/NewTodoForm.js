import React, { useState } from 'react';
import './NewTodoForm.css';

const NewTodoForm = () => {
    const [inputValue, setInputValue] = useState('');

    return ( 
        <div className='new-todo-form'>
            {/* were adding a state, to keep track of our input value here */}
            <input 
            className='new-todo-input'
            type='text'
            placeholder='type your new todo here'
            value = {inputValue}
            onChange={ e => setInputValue(e.target.value)} />
            <button className='new-todo-button'>Create Todo</button>
        </div>
    );
}
export default NewTodoForm;