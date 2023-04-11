import Accordion from 'react-bootstrap/Accordion'
import Form from 'react-bootstrap/Form'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'
import React, { useState } from 'react'

export default function InventoryList({ listData }) {
  const [selectedInventories, setSelectedInventories] = useState([])

  const onAddSelectedInventories = e => {
    const id = e.target.value
    const isChecked = e.target.checked
    const hasRecord = selectedInventories.some(rel => rel === id)
    if (hasRecord && !isChecked) {
      setSelectedInventories(selectedInventories.filter(rel => rel !== id))
    }
    if (!hasRecord && isChecked) {
      setSelectedInventories(selectedInventories.concat(id))
    }
  }

  return (
    <Stack>
      <Stack style={{ height: 60 }} direction={'horizontal'} gap={2}>
        <span> Selected Inventory: </span>
        {selectedInventories.map((item, index) => (
          <Button key={index}>{item}</Button>
        ))}
      </Stack>
      <Accordion>
        <Accordion.Item eventKey={'1'}>
          <Accordion.Header>{'/inventory'}</Accordion.Header>
          <Accordion.Body>
            {listData.map((item, index) => (
              <Form.Check
                key={index}
                value={item.id}
                type={'checkbox'}
                onChange={onAddSelectedInventories}
                label={item.label}
                id={item.id}
                style={{ maxWidth: 'max-content' }}
              />
            ))}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Stack>
  )
}
