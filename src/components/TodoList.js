import React, { useState, useEffect } from 'react'
import TodoForm from './TodoForm'
import Task from './Task';
import axios from 'axios';

function TodoList() {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return 
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos)
        // console.log(todo, ...todos);
    };

    //API monoku
    useEffect(() => {
        fetch()
    }, [])

    const fetch = async () => {
        await axios.get('https://monoku-tasks.herokuapp.com/jtxfoXn2me1c7Tj7B8wn/all'
          ).then(res => {
              setTodos(res.data)
              console.log(res)
          }).catch(error => {
            console.log(error.response);
          });
    }

    return (
        <div>
            <TodoForm onSubmit={addTodo} />
            { todos.map((todo, index) => (
                <Task 
                    id={todo.id} 
                    isComplete={todo.checked} 
                    notes={todo.notes} 
                    text={todo.text} 
                    getTodo={fetch}
                />
            ))}
        </div>
    )
}

export default TodoList
