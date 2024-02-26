import clsx from 'clsx';
const dataColumns = [
  {
    field: "id",
    headerName: "Ticket ID",
    headerClassName: "ticket--header",
    width: 70,
  },
  {
    field: "status",
    headerName: "Status",
    headerClassName: "ticket--header",
    width: 100
  },
  {
    field: "priority",
    headerName: "Priority",
    headerClassName: "ticket--header",
    width: 100,
    cellClassName: (params) => {
      if (params.value == null) {
        return '';
      }

      return clsx('priority', {
        high: params.value.includes("High"),
        medium: params.value.includes("Medium"),
        low: params.value.includes("Low"),
        other: params.value.includes("Other"),
      });
    },
  },
  {
    field: "age_days",
    headerName: "Age",
    headerClassName: "ticket--header",
    type: "number",
    width: 50
  },
  {
    field: "company",
    headerName: "Company",
    headerClassName: "ticket--header",
    width: 150
  },
  {
    field: "contact",
    headerName: "Main Contact",
    headerClassName: "ticket--header",
    width: 150
  },
  {
    field: "phone",
    headerName: "Phone",
    headerClassName: "ticket--header",
    width: 125
  },
  {
    field: "email",
    headerName: "Email",
    headerClassName: "ticket--header",
    width: 200
  },
  {
    field: "title",
    headerName: "Summary Description",
    headerClassName: "ticket--header",
    sortable: false,
    width: 400
  },
  {
    field: "engineer",
    headerName: "Assigned Engineer",
    headerClassName: "ticket--header",
    width: 150
  },
];

export default dataColumns;
