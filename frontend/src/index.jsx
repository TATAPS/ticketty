import React from 'react';
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';
import Auth from './auth/Auth.jsx';
import SingleTicket from './single/SingleTicket';
import AddTicket from './crud/AddTicket.jsx';
import UpdateTicket from './crud/UpdateTicket.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/addticket",
        element: <AddTicket />,
      },
      {
        path: "tickets/:ticketId/edit",
        element: <UpdateTicket />,
      },
      {
        path: "tickets/:ticketId",
        element: <SingleTicket />,
      }
    ],
  },
  {
    path: "/auth",
    element: <Auth />
  },
]);
// client
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
