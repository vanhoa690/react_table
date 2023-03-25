import React, { useState } from 'react'
import './App.css'
import { ListTable } from './components/ListTable'
import { ListTabs } from './components/ListTabs'

function App() {
  const tabs = ['tab 1', 'tab 2']
  const [activeTab, setActiveTab] = useState('tab 1')
  const headers = ['Id', 'First Name', 'Last Name', 'Username', 'Action']
  const columns = [
    {
      id: 1,
      firstName: 'A',
      lastName: 'B',
      userName: 'C',
    },
    {
      id: 2,
      firstName: 'A',
      lastName: 'B',
      userName: 'C',
    },
    {
      id: 3,
      firstName: 'A',
      lastName: 'B',
      userName: 'C',
    },
  ]
  const headers2 = ['Id2', 'First Name2', 'Last Name2', 'Username2', 'Action2']
  const columns2 = [
    {
      id: 1,
      firstName: 'A2',
      lastName: 'B2',
      userName: 'C2',
    },
    {
      id: 2,
      firstName: 'A',
      lastName: 'B',
      userName: 'C',
    },
    {
      id: 3,
      firstName: 'A',
      lastName: 'B',
      userName: 'C',
    },
  ]

  return (
    <div className="App">
      <ListTabs
        tabs={tabs}
        activeTab={activeTab}
        onSetActiveTab={setActiveTab}
      />
      <ListTable
        headers={activeTab === 'tab 1' ? headers : headers2}
        columns={activeTab === 'tab 1' ? columns : columns2}
      />
    </div>
  )
}

export default App
