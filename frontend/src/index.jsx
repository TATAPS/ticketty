import React from 'react';
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Login from './auth/Login';
import SingleTicket from './single/SingleTicket';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [


    ],
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
    element: <div>Edit Ticket</div>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
