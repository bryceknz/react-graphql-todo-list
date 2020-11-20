import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import './App.css'

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
              {data &&
                data.todos.map((todo) => <p key={todo.id}>{todo.text}</p>)}
            </>
          )}
        </Query>
      </header>
    </div>
  )
}

export default App
