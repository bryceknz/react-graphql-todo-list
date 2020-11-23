import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

import './TodoListItem.css'

function TodoListItem({ id, text, completed }) {
  const mutation = gql`
    mutation {
      toggleComplete(id: ${id}) {
        completed
      }
    }
  `

  return (
    <Mutation mutation={mutation}>
      {(toggleComplete) => (
        <li className={completed ? 'completed' : ''} onClick={() => toggleComplete(id)}>
          {text}
        </li>
      )}
    </Mutation>
  )
}

export default TodoListItem
