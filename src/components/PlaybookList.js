import Accordion from 'react-bootstrap/Accordion'
import Form from 'react-bootstrap/Form'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'
import React, { useState } from 'react'

export default function PlaybookList({ listData, onSetRequests }) {
  const [selectedPlaybook, setSelectedPlaybook] = useState('')

  const onAddSelectedPlaybook = (id, isChecked) => {
    if (isChecked) {
      setSelectedPlaybook('')
      onSetRequests('')
      return
    }
    setSelectedPlaybook(id)
    onSetRequests(id)
  }

  return (
    <Stack>
      <Stack
        style={{ height: 'fit-content', flexWrap: 'wrap' }}
        direction={'horizontal'}
        gap={2}
        className={'mb-2'}
      >
        <span> Selected Playbook: </span>
        {selectedPlaybook && <Button>{selectedPlaybook}</Button>}
      </Stack>
      <Accordion>
        <Accordion.Item eventKey={'1'}>
          <Accordion.Header>{'playbook'}</Accordion.Header>
          <Accordion.Body>
            <Stack gap={2}>
              {listData.map((item, index) => (
                <Form.Check
                  key={index}
                  type={'checkbox'}
                  value={item.name}
                  checked={item.name === selectedPlaybook}
                  onChange={() =>
                    onAddSelectedPlaybook(
                      item.name,
                      item.name === selectedPlaybook,
                    )
                  }
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
