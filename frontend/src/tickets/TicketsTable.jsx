import './TicketsTable.css'
import { useState } from 'react';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import { Link } from 'react-router-dom';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';


export default function TicketsTable({ tickets }) {
  const [filterModel, setFilterModel] = useState({
    items: [],
    quickFilterExcludeHiddenColumns: true,
    // quickFilterValues: ['1'],
  });
  const [columnVisibilityModel, setColumnVisibilityModel] = useState({});

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
  ];

  const rows = tickets


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




