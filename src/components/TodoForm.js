import React, { useState, useEffect, useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import axios from 'axios';

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
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        flexWrap: 'wrap',
        margin: 'auto',
        marginTop: 30,
        width: 305,
        height: 350,
        backgroundColor: 'white',
      },
      h2: {
        display: 'flex',
        marginBottom: 10,
        width: 280,
        marginLeft: 25
      },
      text: {
          marginLeft: 25,
      }
  });

function TodoForm(props) {
    const classes = useStyles();

    const [input, setInput] = useState(props.edit ? props.edit.value : '')

    const inputRef = useRef(null)

    //Modal 
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    } 
    
    const body = (
        <div className={classes.modal}>
            <div>
                <h2 className={classes.h2}>{input}</h2>
                <hr />
            </div>
            <div className={classes.text}>
                <p>Título</p>
                <p>Subtítulo</p>
                <p>Texto en bold</p>
                <p>Texto en cursiva</p>
                <p>Texto por defecto</p>
            </div>
          
        </div>
      ); // --> aquí termina Modal

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
    //     let requestRegister = {
    //             "text": input,
    //             "notes": "tarea nueva Sil"
    //   }

    //     const fetch = async () => {
    //         let res = await axios.post('https://monoku-tasks.herokuapp.com/jtxfoXn2me1c7Tj7B8wn/add/', requestRegister
    //             // `${config["url-funnel"]}/v1/landing/` + idFunnel + `/prescore`, rqstService
    //           ).then(res => {
    //             console.log(res)
    //           }).catch(error => {
    //             console.log(error.response);
    //           });
    //         // const { data } = await axios.get('https://monoku-tasks.herokuapp.com/jtxfoXn2me1c7Tj7B8wn/all')
    //         // .then{console.log(data)}
    //         // setList(data)
    //     } 
    //     fetch()
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');
    };

    //API monoku
    useEffect(() => {
        const fetch = async () => {
            let res = await axios.get('https://monoku-tasks.herokuapp.com/jtxfoXn2me1c7Tj7B8wn/all'
                // `${config["url-funnel"]}/v1/landing/` + idFunnel + `/prescore`, rqstService
              ).then(res => {
                console.log(res)
              }).catch(error => {
                console.log(error.response);
              });
            // const { data } = await axios.get('https://monoku-tasks.herokuapp.com/jtxfoXn2me1c7Tj7B8wn/all')
            // .then{console.log(data)}
            // setList(data)
        }
        fetch()
    }, [])


    // return (
    //     list.map(
    //         //renderizado de tus componentes todo
    //     )
    // )


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
                        onClick={handleOpen}
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
            <Modal
                open={open}
                onClose={handleClose}
            >
                {body}
            </Modal>
        </div>
    )
}

export default TodoForm
