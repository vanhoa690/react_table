import Accordion from 'react-bootstrap/Accordion'
import Form from 'react-bootstrap/Form'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'
import React, { useState } from 'react'

export default function HostList({ listData, onSetRequests }) {
  const [selectedHosts, setSelectedHosts] = useState([])

  const onAddSelectedHosts = e => {
    const id = e.target.value
    const isChecked = e.target.checked
    const hasRecord = selectedHosts.some(rel => rel === id)
    if (hasRecord && !isChecked) {
      const host = selectedHosts.filter(rel => rel !== id)
      setSelectedHosts(host)
      onSetRequests(host)
    }
    if (!hasRecord && isChecked) {
      setSelectedHosts(selectedHosts.concat(id))
      onSetRequests(selectedHosts.concat(id))
    }
  }

  return (
    <Stack>
      <Stack
        style={{ height: 'fit-content', flexWrap: 'wrap' }}
        direction={'horizontal'}
        gap={2}
        className={'mb-2'}
      >
        <span> Selected Hosts: </span>
        {selectedHosts.map((item, index) => (
          <Button key={index}>{item}</Button>
        ))}
      </Stack>
      <Accordion>
        <Accordion.Item eventKey={'1'}>
          <Accordion.Header>{'limit_hosts'}</Accordion.Header>
          <Accordion.Body>
            <Stack gap={2}>
              {listData.map((item, index) => (
                <Form.Check
                  key={index}
                  value={item.name}
                  type={'checkbox'}
                  onChange={onAddSelectedHosts}
                  label={item.name}
                  id={item.id}
                  style={{ maxWidth: 'max-content' }}
                />
              ))}
            </Stack>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Stack>
  )
}
