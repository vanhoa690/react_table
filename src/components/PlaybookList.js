import Accordion from 'react-bootstrap/Accordion'
import Form from 'react-bootstrap/Form'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'
import React, { useState } from 'react'


export default function PlaybookList() {
  const [selectedPlaybook, setSelectedPlaybook] = useState('')

  const onAddSelectedPlaybook = (id, isChecked) => {
    isChecked ? setSelectedPlaybook('') : setSelectedPlaybook(id)
  }

  // const listData = [
  //   {
  //     id: '/playbook/1',
  //     label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  //   },
  //   {
  //     id: '/playbook/2',
  //     label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  //   },
  //   {
  //     id: '/playbook/3',
  //     label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  //   },
  //   {
  //     id: '/playbook/4',
  //     label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  //   },
  // ]
  return (
    <Stack>
      <Stack style={{ height: 60 }} direction={'horizontal'} gap={2}>
        <span> Selected Playbook: </span>
        {selectedPlaybook && <Button>{selectedPlaybook}</Button>}
      </Stack>
      <Accordion>
        <Accordion.Item eventKey={'1'}>
          <Accordion.Header>{'playbook'}</Accordion.Header>
          <Accordion.Body>
            {listData.map((item, index) => (
              <Form.Check
                key={index}
                type={'checkbox'}
                value={item.id}
                checked={item.id === selectedPlaybook}
                onChange={() =>
                  onAddSelectedPlaybook(item.id, item.id === selectedPlaybook)
                }
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
