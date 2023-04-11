import Accordion from 'react-bootstrap/Accordion'
import Form from 'react-bootstrap/Form'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'
import React, { useState } from 'react'

export default function ExtraVarList() {
  const [extraVars, setExtraVars] = useState({ key: '', value: '' })

  const [selectExtraVars, setSelectExtraVars] = useState([])

  const handleOnChangeInputVar = event => {
    setExtraVars({ ...extraVars, [event.target.name]: event.target.value })
  }

  return (
    <Stack>
      <Stack style={{ width: 60 }} gap={2}>
        <span> Extra_vars: </span>
        {selectExtraVars.map((item, index) => (
          <Stack key={index} direction={'horizontal'} gap={4}>
            <span
              style={{ minWidth: 200 }}
            >{`${item.key} : ${item.value}`}</span>
            <Button
              onClick={() =>
                setSelectExtraVars(
                  selectExtraVars.filter(extra => extra.key !== item.key),
                )
              }
            >
              Remove
            </Button>
          </Stack>
        ))}
        <div style={{ mb: 2 }} />
      </Stack>
      <Accordion>
        <Accordion.Item eventKey={'1'}>
          <Accordion.Header>{'/extraVars'}</Accordion.Header>
          <Accordion.Body>
            <Stack gap={4}>
              <Stack
                direction={'horizontal'}
                gap={4}
                className={'justify-content-center'}
              >
                <Form.Control
                  name={'key'}
                  value={extraVars.key}
                  placeholder="Key"
                  aria-label="Key"
                  style={{ width: 200 }}
                  onChange={handleOnChangeInputVar}
                />
                <Form.Control
                  name={'value'}
                  value={extraVars.value}
                  placeholder="Value"
                  aria-label="Value"
                  style={{ width: 200 }}
                  onChange={handleOnChangeInputVar}
                />
                <Button
                  onClick={() => {
                    if (!extraVars.key || !extraVars.value) return
                    setSelectExtraVars([...selectExtraVars, extraVars])
                    setExtraVars({ key: '', value: '' })
                  }}
                >
                  Add
                </Button>
              </Stack>
            </Stack>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Stack>
  )
}
