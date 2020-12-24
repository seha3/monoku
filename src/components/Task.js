//extraer funcionalidad que compone a una tarea (hacer una tarea)
// checkedbox, input(texto), borrar tarea, editar tarea
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { RiCloseCircleLine } from 'react-icons/ri'
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import { green } from '@material-ui/core/colors';
import axios from 'axios';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles({
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

const GreenCheckbox = withStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

function Task({isComplete, id, text, notes, getTodo, input}) {
    const classes = useStyles();

    const [checked, setChecked] = useState(isComplete);

    const removeTodo = async () => {
        //hacer la petición
        await axios.delete(`https://monoku-tasks.herokuapp.com/jtxfoXn2me1c7Tj7B8wn/${id}/delete`
        ).then(res => {
            getTodo()
        }).catch(error => {
            alert('no se puede eliminar la tarea')
        })
    }

    const fetch = async (check) => {
        await axios.put(`https://monoku-tasks.herokuapp.com/jtxfoXn2me1c7Tj7B8wn/${id}/update`, { "checked": check }
          ).then(res => {
              setChecked(check)
        }).catch(error => {
            console.log(error.response);
          });
    } 

    const handleCheck = (event) => {
        fetch(event.target.checked)
    }

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

    return (
        <div 
            className={checked ? 'todo-row complete' : 'todo-row'} 
            key={id}
        >
            <FormControlLabel
                control={<GreenCheckbox/>} 
                checked={checked} 
                onChange={handleCheck}
                name="checked"
            />
            <div key={id} onClick={() => handleOpen()}>
                {text}
            </div>
            <div className="icons">
                <RiCloseCircleLine 
                    onClick={() => removeTodo()}
                    className='delete-icon'
                />
            </div>
            <Modal
                open={open}
                onClose={handleClose}
            >
                {body}
            </Modal>
        </div>
    )
}

export default Task