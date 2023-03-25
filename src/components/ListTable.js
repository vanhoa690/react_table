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
            <td>{column.id}</td>
            <td>{column.firstName}</td>
            <td>{column.lastName}</td>
            <td>{column.userName}</td>
            <td>Detail</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
