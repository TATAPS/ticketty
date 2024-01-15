import React from 'react';
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Login from './auth/Login';
import SingleTicket from './single/SingleTicket';
import AddTicket from './crud/AddTicket.jsx';
import UpdateTicket from './crud/UpdateTicket.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "tickets/:ticketId",
    element: <SingleTicket />,
  },
  {
    path: "tickets/:ticketId/edit",
    element: <UpdateTicket />,
  },
  {
    path: "addticket",
    element: <AddTicket />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
