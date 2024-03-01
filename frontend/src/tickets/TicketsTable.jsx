import "./TicketsTable.css";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GridToolbar } from "@mui/x-data-grid";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import StyledDataGrid from "./StyledDataGrid";
import { Box } from "@mui/material";
import dataColumns from "./dataColumns";

export default function TicketsTable({ tickets }) {
  const [filterModel, setFilterModel] = useState({
    items: [],
    quickFilterExcludeHiddenColumns: true,
  });
  const [columnVisibilityModel, setColumnVisibilityModel] = useState({});
  const navigate = useNavigate();


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
      <Box
        sx={{
          height: '100%',
          width: '100%',
          '& .ticket--header': {
            color: 'var(--color-dark)',
          },
        }}
      >
        <StyledDataGrid
          columns={dataColumns}
          rows={tickets}
          // disableColumnFilter
          // disableDensitySelector
          checkboxSelection="true"
          pageSizeOptions={[5, 10, 25, 100]}
          slots={{ toolbar: GridToolbar }}
          filterModel={filterModel}
          onFilterModelChange={(newModel) => setFilterModel(newModel)}
          slotProps={{ toolbar: { showQuickFilter: true } }}
          columnVisibilityModel={columnVisibilityModel}
          onColumnVisibilityModelChange={(newModel) => setColumnVisibilityModel(newModel)}
          onRowClick={handleRowClick}
          // draggable="true"
          getRowClassName={(params) => `status--${params.row.status}`}
          resizable

        />
      </Box>
    </>
  );
}
