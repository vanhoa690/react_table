import React, { useEffect, useState } from 'react'
import Stack from 'react-bootstrap/Stack'
import './App.css'
import InventoryList from './components/InventoryList'
import PlaybookList from './components/PlaybookList'
import ExtraVarList from './components/ExtraVarList'
import { getList } from './configs/axios'

function App() {
  const [listData, setListData] = useState()
  useEffect(() => {
    const list1 = getList('/playbook')
    setListData(list1)
  }, [])
  console.log({ listData })
  const inventoryListData = [
    {
      id: '/inventory/1',
      label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id: '/inventory/2',
      label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id: '/inventory/3',
      label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id: '/inventory/4',
      label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
  ]

  const playbookListData = [
    {
      id: '/playbook/1',
      label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id: '/playbook/2',
      label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id: '/playbook/3',
      label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id: '/playbook/4',
      label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
  ]
  return (
    <div className="App">
      <Stack gap={4}>
        <InventoryList listData={inventoryListData} />
        <PlaybookList listData={playbookListData} />
        <ExtraVarList />
      </Stack>
    </div>
  )
}

export default App
