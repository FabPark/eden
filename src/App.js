import React, { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEditTodo = (id, updatedTodo) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, ...updatedTodo };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div>
      <h1>Todo App</h1>
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        onDeleteTodo={handleDeleteTodo}
        onEditTodo={handleEditTodo}
      />
    </div>
  );
}

function TodoForm({ onAddTodo }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = { id: Date.now(), title };
    onAddTodo(newTodo);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

function TodoList({ todos, onDeleteTodo, onEditTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.title}
          <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
          <button onClick={() => onEditTodo(todo.id, { title: 'New Title' })}>
            Edit
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoApp;