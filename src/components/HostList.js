import Accordion from 'react-bootstrap/Accordion'
import Form from 'react-bootstrap/Form'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'
import React, { useState } from 'react'

export default function HostList({ listData, onSetRequests }) {
  const [selectedInventories, setSelectedInventories] = useState([])

  const onAddSelectedInventories = e => {
    const id = e.target.value
    const isChecked = e.target.checked
    const hasRecord = selectedInventories.some(rel => rel === id)
    if (hasRecord && !isChecked) {
      const host = selectedInventories.filter(rel => rel !== id)
      setSelectedInventories(host)
      onSetRequests(host)
    }
    if (!hasRecord && isChecked) {
      setSelectedInventories(selectedInventories.concat(id))
      onSetRequests(selectedInventories.concat(id))
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
        <span> Selected Inventory: </span>
        {selectedInventories.map((item, index) => (
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
                  onChange={onAddSelectedInventories}
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
