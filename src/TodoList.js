import React from 'react'

import TodoListItem from './TodoListItem'

function TodoList({ todoList }) {
  return (
    <ol>
      {todoList.map((item) => (
        <TodoListItem key={item.id} {...item}></TodoListItem>
      ))}
    </ol>
  )
}

export default TodoList
