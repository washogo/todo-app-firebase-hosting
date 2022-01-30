import React, { useState, useContext } from 'react';
import { Form, InputGroup, Input, Button } from 'reactstrap';
import { TodoContext } from '../contexts/TodoContext';

function TodoForm() {
  const { addTodo } = useContext(TodoContext)
  const [value, setValue] = useState('')
  const handleSubmit = e => {
    e.preventDefault();
    addTodo(value)
    setValue('')
  }
  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup>
        <Input type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          />
        <Button type="submit" color="primary">追加</Button>
      </InputGroup>
    </Form>
  )
}

export default TodoForm;
