import React, { useState, useEffect } from 'react'
import './App.css'
import { ListTable } from './components/ListTable'
import { ListTabs } from './components/ListTabs'
import { getList } from './configs/axios'

const listMock1 = {
  headers: ['Id', 'First Name', 'Last Name', 'Username', 'Action'],
  columns: [
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
  ],
}
const listMock2 = {
  headers: ['Id2', 'First Name2', 'Last Name2', 'Username2', 'Action2'],
  columns: [
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
  ],
}
function App() {
  const tabs = ['tab 1', 'tab 2']
  const [activeTab, setActiveTab] = useState('tab 1')
  const [listData, setListData] = useState()

  useEffect(() => {
    const list1 = getList('url 1')
    const list2 = getList('url 2')
    if (activeTab === 'tab 1') {
      setListData(listMock1 || list1)
      return
    }
    setListData(listMock2 || list2)
  }, [activeTab])

  return (
    <div className="App">
      <ListTabs
        tabs={tabs}
        activeTab={activeTab}
        onSetActiveTab={setActiveTab}
      />
      {listData && (
        <ListTable listData={listData} />
      )}
    </div>
  )
}

export default App
