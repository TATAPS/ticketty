import './TicketsTable.css'
import { useState } from 'react';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import { Link } from 'react-router-dom';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';


export default function TicketsTable() {

  const [filterModel, setFilterModel] = useState({
    items: [],
    quickFilterExcludeHiddenColumns: true,
    // quickFilterValues: ['1'],
  });

  const [columnVisibilityModel, setColumnVisibilityModel] = useState({});


  TimeAgo.addDefaultLocale(en)
  const timeAgo = new TimeAgo('en-US')
  const time = timeAgo.format(Date.now() - 60 * 1000)
  const columns = [
    {
      field: 'id',
      renderCell: (ticketId) => <Link to={`/tickets/${ticketId.id}`}>{ticketId.id}</Link>,
      headerName: 'Ticket ID', width: 70
    },
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


  return (
    <>
      <FormControlLabel
        checked={columnVisibilityModel.id !== false}
        onChange={(event) =>
          setColumnVisibilityModel(() => ({ id: event.target.checked }))
        }
        control={<Switch color="primary" size="small" />}
        label="Show ID column"
      />
      <FormControlLabel
        checked={filterModel.quickFilterExcludeHiddenColumns}
        onChange={(event) =>
          setFilterModel((model) => ({
            ...model,
            quickFilterExcludeHiddenColumns: event.target.checked,
          }))
        }
        control={<Switch color="primary" size="small" />}
        label="Exclude hidden columns"
      />
      <div style={{ height: "100%", width: '100%' }}>
        <DataGrid
          columns={columns}
          rows={rows}
          disableColumnFilter
          disableDensitySelector
          slots={{ toolbar: GridToolbar }}
          filterModel={filterModel}
          onFilterModelChange={(newModel) => setFilterModel(newModel)}
          slotProps={{ toolbar: { showQuickFilter: true } }}
          columnVisibilityModel={columnVisibilityModel}
          onColumnVisibilityModelChange={(newModel) =>
            setColumnVisibilityModel(newModel)
          }
        />
      </div>
    </>
  )
}




