import './TicketsTable.css'
import { DataGrid } from '@mui/x-data-grid';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

TimeAgo.addDefaultLocale(en)
const timeAgo = new TimeAgo('en-US')
const time = timeAgo.format(Date.now() - 60 * 1000)
const columns = [
  { field: 'id', headerName: 'Ticket ID', width: 70 },
  { field: 'age', headerName: 'Age', type: 'number', width: 130 },
  { field: 'companyName', headerName: 'Company', width: 130 },
  { field: 'mainContact', headerName: 'Main Contact', width: 130 },
  { field: 'notes', headerName: 'Notes', sortable: false, width: 130 },
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  // },
];

const rows = [
  { id: 1, companyName: 'Snow', mainContact: 'Jon', age: time },
  { id: 2, companyName: 'Lannister', mainContact: 'Cersei', age: time },
  { id: 3, companyName: 'Lannister', mainContact: 'Jaime', age: time },
  { id: 4, companyName: 'Stark', mainContact: 'Arya', age: time },
  { id: 5, companyName: 'Targaryen', mainContact: 'Daenerys', age: time },
  { id: 6, companyName: 'Melisandre', firstName: null, age: time },
  { id: 7, companyName: 'Clifford', mainContact: 'Ferrara', age: time },
  { id: 8, companyName: 'Frances', mainContact: 'Rossini', age: time },
  { id: 9, companyName: 'Roxie', mainContact: 'Harvey', age: time },
];

export default function TicketsTable() {
  return (
    <div style={{ height: "100%", width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  )
}
