import React from 'react'

import './TodoListItem.css'

function TodoListItem({ text, completed }) {
  return <li className={completed && 'completed'}>{text}</li>
}

export default TodoListItem
