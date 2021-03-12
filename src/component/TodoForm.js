import React, { useState, useEffect, useRef, } from 'react'

function TodoForm(props) {
    const [input, SetInput] = useState('')


    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        SetInput(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        })

        SetInput('');
    };
    return(
        <form className='todo-form' onSubmit={handleSubmit} onChange={handleChange}>
            <input type='text' placeholder="Add a todo" value={input}
            name="text" className="todo-input" ref={inputRef}/>
            <button className="todo-button">Add todo</button>
        </form>
    )
} 

export default TodoForm