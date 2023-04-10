import React from 'react'
import Stack from 'react-bootstrap/Stack'
import './App.css'
import HostList from './components/HostList'
import PlaybookList from './components/PlaybookList'
import ExtraVarList from './components/ExtraVarList'

function App() {
  return (
    <div className="App">
      <Stack gap={4}>
        <HostList />
        <PlaybookList />
        <ExtraVarList />
      </Stack>
    </div>
  )
}

export default App
