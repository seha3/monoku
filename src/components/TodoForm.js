import React, { useState, useEffect, useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


function TodoForm(props) {
    const [input, setInput] = useState('')

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');
    };


    return (
        <div>
            <form className="todo.form" onSubmit={handleSubmit}>
                <TextField 
                    type="text" 
                    style={{ margin: 15 }}
                    placeholder="Ej. Comprar material para trabajar" 
                    value={input}
                    name="text>" 
                    className="todo-input"
                    onChange={handleChange}
                    ref={inputRef}
                />
                <br/>
                <button className="todo-button">Añadir Tarea</button>
            </form>
        </div>
    )
}

export default TodoForm
