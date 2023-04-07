import Accordion from 'react-bootstrap/Accordion'
import Form from 'react-bootstrap/Form'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'
import React, { useState } from 'react'

export default function ExtraVarList() {
  const [extraVars, setExtraVars] = useState([{ key: '', value: '' }])

  const listData = [
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
  return (
    <Stack>
      <Stack style={{ width: 60 }} gap={2}>
        <span> Extra_vars: </span>
        <Button className={'mb-2'}>Add</Button>
      </Stack>
      <Accordion>
        <Accordion.Item eventKey={'1'}>
          <Accordion.Header>{'/inventory'}</Accordion.Header>
          <Accordion.Body>
            <Stack
              direction={'horizontal'}
              gap={4}
              className={'justify-content-center'}
            >
              <Form.Control
                placeholder="Key"
                aria-label="Key"
                style={{ width: 200 }}
              />
              <Form.Control
                placeholder="Value"
                aria-label="Value"
                style={{ width: 200 }}
              />
            </Stack>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Stack>
  )
}
