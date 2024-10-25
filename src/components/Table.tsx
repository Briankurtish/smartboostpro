// Styles Imports
import tableStyles from '@core/styles/table.module.css'
const Table = ({
  columns,
  renderRow,
  data
}: {
  columns: { header: string; accessor: string; className?: string }[]
  renderRow: (item: any) => React.ReactNode
  data: any[]
}) => {
  return (
    <table className={tableStyles.table}>
      <thead>
        <tr>
          {columns.map(col => (
            <th key={col.accessor}>{col.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>{data.map(item => renderRow(item))}</tbody>
    </table>
  )
}

export default Table
