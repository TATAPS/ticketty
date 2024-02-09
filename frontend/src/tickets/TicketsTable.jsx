import "./TicketsTable.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

export default function TicketsTable({ tickets }) {
  const [filterModel, setFilterModel] = useState({
    items: [],
    quickFilterExcludeHiddenColumns: true,
  });
  const [columnVisibilityModel, setColumnVisibilityModel] = useState({});
  const navigate = useNavigate();

  const columns = [
    {
      field: "id",
      headerName: "Ticket ID",
      width: 70,
    },
    { field: "status", headerName: "Status", width: 100 },
    { field: "priority", headerName: "Priority", width: 100 },
    { field: "age_days", headerName: "Age", type: "number", width: 50 },
    { field: "company", headerName: "Company", width: 150 },
    { field: "contact", headerName: "Main Contact", width: 150 },
    { field: "phone", headerName: "Phone", width: 125 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "title", headerName: "Summary Description", sortable: false, width: 400 },
    { field: "engineer", headerName: "Assigned Engineer", width: 150 },
  ];

  const handleRowClick = (params, event) => {
    if (event.type === "click") {
      navigate(`/tickets/${params.id}`);
    }
  };

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
      <div style={{ height: "100%", width: "96%" }}>
        <DataGrid
          columns={columns}
          rows={tickets}
          disableColumnFilter
          disableDensitySelector
          pageSizeOptions={[5, 10, 25, 100]}
          slots={{ toolbar: GridToolbar }}
          filterModel={filterModel}
          onFilterModelChange={(newModel) => setFilterModel(newModel)}
          slotProps={{ toolbar: { showQuickFilter: true } }}
          columnVisibilityModel={columnVisibilityModel}
          onColumnVisibilityModelChange={(newModel) => setColumnVisibilityModel(newModel)}
          onRowClick={handleRowClick}
        />
      </div>
    </>
  );
}
