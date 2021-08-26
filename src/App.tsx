import React, { useState } from 'react';
import { TodoList } from './components/TodoList';
import { AddTodoForm } from './components/AddTodoForm'

import './App.css';

const intialTodos: Todo[] = [
  {
    text: 'Walk the dog',
    completed: false
  },
  {
    text: 'Write app',
    completed: true
  }
  
]

function App() {
  const [todos, setTodos] = useState(intialTodos);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo
    })

    setTodos(newTodos);
  }

  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, completed: false }
    setTodos([...todos, newTodo])

  }


  
  return (
    <ul>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
      
    </ul>
  );
}

export default App;
