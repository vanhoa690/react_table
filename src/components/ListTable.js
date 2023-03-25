import Table from 'react-bootstrap/Table'

export const ListTable = ({ headers, columns }) => {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {columns.map((column, index) => (
          <tr key={index}>
            {Object.values(column).map((item, idx) => (
              <td key={idx}>{item}</td>
            ))}
            <td>Detail</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
