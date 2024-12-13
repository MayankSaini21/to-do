'use client'

import React, { useState } from 'react'
import styles from './TodoList.module.css'

interface Todo {
  id: number
  text: string
  completed: boolean
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [newTodo, setNewTodo] = useState('')

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault()
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }])
      setNewTodo('')
    }
  }

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className={styles.todoList}>
      <h1 className={styles.title}>My Todo List</h1>
      <form onSubmit={addTodo} className={styles.inputGroup}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo..."
          className={styles.input}
        />
        <button type="submit" className={styles.addButton}>Add</button>
      </form>
      <ul className={styles.todoItems}>
        {todos.map(todo => (
          <li key={todo.id} className={styles.todoItem}>
            <label className={styles.todoLabel}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className={styles.checkbox}
              />
              <span className={todo.completed ? styles.completed : ''}>{todo.text}</span>
            </label>
            <button onClick={() => deleteTodo(todo.id)} className={styles.deleteButton}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

