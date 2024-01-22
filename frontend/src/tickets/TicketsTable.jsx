import './TicketsTable.css'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';


export default function TicketsTable({ tickets }) {
  const [filterModel, setFilterModel] = useState({
    items: [],
    quickFilterExcludeHiddenColumns: true,
  });
  const [columnVisibilityModel, setColumnVisibilityModel] = useState({});
  const navigate = useNavigate()

  const columns = [
    {
      field: 'id', headerName: 'Ticket ID', width: 70
    },
    { field: 'age_days', headerName: 'Age', type: 'number', width: 130 },
    { field: 'company', headerName: 'Company', width: 150 },
    { field: 'contact', headerName: 'Main Contact', width: 150 },
    { field: 'title', headerName: 'Titles', sortable: false, width: 500 },
  ];

  const handleRowClick = (params, event) => {
    if (event.type === "click") {
      navigate(`/tickets/${params.id}`)
    }
  }

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
          rows={tickets}
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
          onRowClick={handleRowClick}
        />


      </div>
    </>
  )
}




