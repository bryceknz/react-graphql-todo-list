import React from 'react'

function TodoList({ todoList }) {
  return (
    <ul>
      {todoList.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  )
}

export default TodoList
