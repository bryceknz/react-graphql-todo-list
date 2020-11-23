import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import './App.css'
import TodoList from './TodoList'

function App() {
  const query = gql`
    query {
      todos {
        id
        text
        completed
      }
    }
  `

  return (
    <div className="App">
      <Query query={query}>
        {({ loading, error, data }) => (
          <>
            {loading && <div>Fetching...</div>}
            {error && <div>Error 😞</div>}
            {data && <TodoList todoList={data.todos} />}
          </>
        )}
      </Query>
    </div>
  )
}

export default App
