import React, { useEffect, useState } from 'react'
import Stack from 'react-bootstrap/Stack'
import './App.css'
import HostList from './components/HostList'
import PlaybookList from './components/PlaybookList'
import ExtraVarList from './components/ExtraVarList'
import { getList, postRun } from './configs/axios'
import { Button } from 'react-bootstrap'

function App() {
  const [hostList, setHostList] = useState([])
  const [playbookList, setPlaybookList] = useState([])
  const [hosts, setHosts] = useState([])
  const [playbook, setPlaybook] = useState('')
  const [extraVars, setExtraVars] = useState([])

  const fetchData = async () => {
    const [hostListData, playbookListData] = await Promise.all([
      getList('/host'),
      getList('/playbook'),
    ])
    setHostList(hostListData)
    setPlaybookList(playbookListData)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleRequest = () => {
    const requests = {
      limit_hosts: hosts.length > 0 ? hosts.join(',') : undefined,
      playbook: playbook || undefined,
      extra_vars:
        extraVars.length > 0
          ? `{${extraVars
              .map(item => `'${item.key}' : '${item.value}'`)
              .join(', ')}}`
          : undefined,
    }
    postRun(requests)
  }
  const isDisabledButton = !(hosts.length && playbook && extraVars.length)
  return (
    <div className="App">
      <Stack gap={4} style={{ marginBottom: '100px' }}>
        <HostList listData={hostList} onSetRequests={setHosts} />
        <PlaybookList listData={playbookList} onSetRequests={setPlaybook} />
        <ExtraVarList onSetRequests={setExtraVars} />
        <Button onClick={handleRequest} disabled={isDisabledButton}>
          Run
        </Button>
      </Stack>
    </div>
  )
}

export default App
