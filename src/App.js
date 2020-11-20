import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import './App.css'
import TodoList from './TodoList'

function App() {
  const query = gql`
    {
      todos {
        id
        text
        completed
      }
    }
  `

  return (
    <div className="App">
      <header className="App-header">
        <Query query={query}>
          {({ loading, error, data }) => (
            <>
              {loading && <div>Fetching...</div>}
              {error && <div>Error 😞</div>}
              {data && <TodoList todoList={data.todos} />}
            </>
          )}
        </Query>
      </header>
    </div>
  )
}

export default App
