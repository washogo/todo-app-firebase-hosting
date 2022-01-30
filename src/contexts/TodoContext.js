import React, { createContext, useState } from 'react';

export const TodoContext = createContext()
const TodoContextProvider = (props) => {
  const [todos, setTodos] = useState([])

  const addTodo = text => {
    const newTodos = [...todos, {text, complete: false}]
    setTodos(newTodos)
    console.log(newTodos)
  }

  const removeTodo = index => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  const completeTodo = index => {
    const newTodos = [...todos]
    newTodos[index].complete = !newTodos[index].complete
    setTodos(newTodos)
    console.log(newTodos)
  }

  return (
    <TodoContextProvider value={{todos, addTodo, removeTodo, completeTodo}}>
      {props.children}
    </TodoContextProvider>
  )
}

export default TodoContextProvider;