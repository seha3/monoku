import React, { useState, useEffect, useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
    button: {
      background: 'linear-gradient(45deg, #a16791 30%, #216e7e 90%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 48,
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    label: {
      textTransform: 'capitalize',
    },
    root: {
        justifyContent: 'flex-end'
    }
  });

function TodoForm(props) {
    const classes = useStyles();

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
        <div className={classes.root}>
            <form className="todo.form" onSubmit={handleSubmit}>
                <TextField 
                    type="text" 
                    style={{ margin: 8 }}
                    placeholder="Ej. Comprar material para trabajar" 
                    value={input}
                    name="text>" 
                    className="todo-input"
                    onChange={handleChange}
                    ref={inputRef}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true
                    }}
                />
                <br/>
                <button 
                    className={classes.button}
                    value={input}
                    onClick={handleChange}
                >
                    Añadir Tarea
                </button>
            </form>
        </div>
    )
}

export default TodoForm
