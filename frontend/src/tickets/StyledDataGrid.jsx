// import * as React from 'react';
// import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
// import { useDemoData } from '@mui/x-data-grid-generator';
import { darken, lighten, styled } from '@mui/material/styles';

const getBackgroundColor = (color, mode) =>
  mode === 'dark' ? darken(color, 0.7) : lighten(color, 0.7);

const getHoverBackgroundColor = (color, mode) =>
  mode === 'dark' ? darken(color, 0.6) : lighten(color, 0.6);

const getSelectedBackgroundColor = (color, mode) =>
  mode === 'dark' ? darken(color, 0.5) : lighten(color, 0.5);

const getSelectedHoverBackgroundColor = (color, mode) =>
  mode === 'dark' ? darken(color, 0.4) : lighten(color, 0.4);

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  /**** HEADER  *****/
  '& .MuiDataGrid-menuIcon': {
    width: '20%',
  },
  '& .MuiButtonBase-root': {
    backgroundColor: 'var(--color-transparent)',
    color: 'var(--color-dark)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '0',
  },
  '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
    borderRight: `1px solid ${theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'
      }`,
  },
  '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
    borderBottom: `1px solid ${theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'
      }`,
  },
  '& .MuiDataGrid-columnHeaderDraggableContainer': {
    // backgroundColor: 'red',
    color: 'var(--color-dark)',
    resize: 'horizontal',
  },
  '& .MuiDataGrid-columnSeparator': {
    // backgroundColor: 'blue',
    color: 'var(--color-dark)',
    resize: 'horizontal',
    cursor: 'col-resize'

  },
  '& .MuiDataGrid-root:last-child': {
    order: "-1",
    // flexDirection: "row",
    flexDirection: "column-reverse"
  },

  /**** PRIORITY CELL  *****/

  '& .priority.high': {
    // color: 'var(--color-dark)',
  },
  '& .priority.high .MuiDataGrid-cellContent': {
    backgroundColor: 'var(--color-danger)',
    color: 'var(--color-white)',
    border: '.5px solid red',
    borderRadius: '8px',
    padding: '5px',
    width: '8rem'
  },
  '& .priority.medium': {
    // backgroundColor: 'var(--color-primary)',
    color: 'var(--color-dark)',
  },
  '& .priority.medium .MuiDataGrid-cellContent': {
    backgroundColor: 'var(--color-primary)',
    color: 'var(--color-white)',
    border: '.5px solid var(--color-primary)',
    borderRadius: '8px',
    padding: '5px',
    width: '8rem'
  },
  '& .priority.low': {
    // color: 'var(--color-dark)',
  },
  '& .priority.low .MuiDataGrid-cellContent': {
    backgroundColor: 'var(--color-success)',
    color: 'var(--color-white)',
    border: '.5px solid var(--color-success)',
    borderRadius: '8px',
    padding: '5px',
    width: '8rem'
  },
  '& .priority.other': {
    // backgroundColor: 'var(--color-warning)',
    color: 'var(--color-dark)',
  },
  '& .priority.other .MuiDataGrid-cellContent': {
    backgroundColor: 'var(--color-warning)',
    color: 'var(--color-dark)',
    border: '.5px solid var(--color-warning)',
    borderRadius: '8px',
    padding: '5px',
    width: '8rem'
  },
  /****** ENTIRE ROWS ******/
  '& .status--Open': {
    backgroundColor: getBackgroundColor(theme.palette.info.main, theme.palette.mode),
    '&:hover': {
      backgroundColor: getHoverBackgroundColor(
        theme.palette.info.main,
        theme.palette.mode,
      ),
    },
    '&.Mui-selected': {
      backgroundColor: getSelectedBackgroundColor(
        theme.palette.info.main,
        theme.palette.mode,
      ),
      '&:hover': {
        backgroundColor: getSelectedHoverBackgroundColor(
          theme.palette.info.main,
          theme.palette.mode,
        ),
      },
    },
  },
  '& .status--Assigned': {
    backgroundColor: getBackgroundColor(theme.palette.info.main, theme.palette.mode),
    '&:hover': {
      backgroundColor: getHoverBackgroundColor(
        theme.palette.info.main,
        theme.palette.mode,
      ),
    },
    '&.Mui-selected': {
      backgroundColor: getSelectedBackgroundColor(
        theme.palette.info.main,
        theme.palette.mode,
      ),
      '&:hover': {
        backgroundColor: getSelectedHoverBackgroundColor(
          theme.palette.info.main,
          theme.palette.mode,
        ),
      },
    },
  },
  '& .status--Working': {
    backgroundColor: getBackgroundColor(
      theme.palette.success.main,
      theme.palette.mode,
    ),
    '&:hover': {
      backgroundColor: getHoverBackgroundColor(
        theme.palette.success.main,
        theme.palette.mode,
      ),
    },
    '&.Mui-selected': {
      backgroundColor: getSelectedBackgroundColor(
        theme.palette.success.main,
        theme.palette.mode,
      ),
      '&:hover': {
        backgroundColor: getSelectedHoverBackgroundColor(
          theme.palette.success.main,
          theme.palette.mode,
        ),
      },
    },
  },
  '& .status--Pending': {
    backgroundColor: getBackgroundColor(
      theme.palette.warning.main,
      theme.palette.mode,
    ),
    '&:hover': {
      backgroundColor: getHoverBackgroundColor(
        theme.palette.warning.main,
        theme.palette.mode,
      ),
    },
    '&.Mui-selected': {
      backgroundColor: getSelectedBackgroundColor(
        theme.palette.warning.main,
        theme.palette.mode,
      ),
      '&:hover': {
        backgroundColor: getSelectedHoverBackgroundColor(
          theme.palette.warning.main,
          theme.palette.mode,
        ),
      },
    },
  },
  '& .status--Closed': {
    backgroundColor: getBackgroundColor(
      theme.palette.error.main,
      theme.palette.mode,
    ),
    '&:hover': {
      backgroundColor: getHoverBackgroundColor(
        theme.palette.error.main,
        theme.palette.mode,
      ),
    },
    '&.Mui-selected': {
      backgroundColor: getSelectedBackgroundColor(
        theme.palette.error.main,
        theme.palette.mode,
      ),
      '&:hover': {
        backgroundColor: getSelectedHoverBackgroundColor(
          theme.palette.error.main,
          theme.palette.mode,
        ),
      },
    },
  },
}));
export default StyledDataGrid;
