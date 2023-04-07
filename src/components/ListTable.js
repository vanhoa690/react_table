import Table from 'react-bootstrap/Table'

export const ListTable = ({ listData }) => {
  const { headers, columns } = listData
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
            <td>
              <a href={'#'}>Detail</a>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
