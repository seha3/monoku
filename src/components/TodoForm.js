import React, { useState, useEffect, useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles';
// import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles({
    button: {
      background: 'linear-gradient(45deg, #a16791 30%, #216e7e 90%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 48,
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      marginLeft: 180
    },
    label: {
      textTransform: 'capitalize',
    },
    root: {
        justifyContent: 'center'
    },
    input: {
        width: 305,
        height: 70,
        padding: "12px 20px",
        margin: "0 auto",
        display: "inline-block",
        border: "none",
        borderRadius: "0.2rem",
        boxSizing: "border-box",
        borderColor: '#a16791',
        color: '#216e7e'
    }
  });

function TodoForm(props) {
    const classes = useStyles();

    const [input, setInput] = useState(props.edit ? props.edit.value : '')

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
            <form onSubmit={handleSubmit}>
                {props.edit ? (
                    <>
                    <input 
                        type="text" 
                        style={{ margin: 8 }}
                        placeholder="Edita tu tarea" 
                        value={input}
                        onChange={handleChange}
                        ref={inputRef}
                        className={classes.input}
                    />
                    <br/>
                    <br/>
                    <button 
                        className={classes.button}
                        value={input}
                        onClick={handleChange}
                    >
                        Editar Tarea
                    </button>
                    </>
                    ) : (
                    <>
                    <input 
                        type="text" 
                        style={{ margin: 8 }}
                        placeholder="Ej. Comprar material para trabajar" 
                        value={input}
                        onChange={handleChange}
                        ref={inputRef}
                        className={classes.input}
                    />
                    <br/>
                    <br/>
                    <button 
                        className={classes.button}
                        value={input}
                        onClick={handleChange}
                    >
                        Añadir Tarea
                    </button>
                    </>
                    )
                }
                
            </form>
        </div>
    )
}

export default TodoForm
