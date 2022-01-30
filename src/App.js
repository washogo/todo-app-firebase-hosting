import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoContextProvider from './contexts/TodoContext';

function App() {
  return (
    <div className="App">
      <Container>
        <h1 className="mt-4">Todo　リスト</h1>
        <TodoContextProvider>
          <TodoForm />
          <TodoList />
        </TodoContextProvider>
      </Container>
    </div>
  );
}

export default App;
