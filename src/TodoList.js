import { useState } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

import TodoListItem from './TodoListItem'

function TodoList({ todoList }) {
  const [newTodo, setNewTodo] = useState('')

  const addTodoMutation = gql`
    mutation($text: String!) {
      addTodo(text: $text) {
        id
        text
        completed
      }
    }
  `

  return (
    <>
      <ol>
        {todoList.map((item) => (
          <TodoListItem key={item.id} {...item}></TodoListItem>
        ))}
      </ol>
      <Mutation mutation={addTodoMutation}>
        {(addTodo) => (
          <div>
            <input
              type="text"
              placeholder="New todo item"
              value={newTodo}
              onChange={(event) => setNewTodo(event.target.value)}
            />
            <button onClick={() => addTodo({ variables: { text: newTodo } })}>
              Add
            </button>
          </div>
        )}
      </Mutation>
    </>
  )
}

export default TodoList
