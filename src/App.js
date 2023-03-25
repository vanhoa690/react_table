import './App.css'
import { ListTable } from './components/ListTable'

function App() {
  const headers = ['Id', 'First Name', 'First Name', 'Username', 'Action']
  const columns = [
    {
      id: 1,
      firstName: 'A',
      lastName: 'B',
      userName: 'C',
    },
    {
      id: 1,
      firstName: 'A',
      lastName: 'B',
      userName: 'C',
    },
    {
      id: 1,
      firstName: 'A',
      lastName: 'B',
      userName: 'C',
    },
  ]
  return (
    <div className="App">
      <ListTable headers={headers} columns={columns} />
    </div>
  )
}

export default App
