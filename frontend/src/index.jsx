import React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import App from "./App";
import Auth from "./auth/Auth.jsx";
import SingleTicket from "./single/SingleTicket";
import AddTicket from "./crud/AddTicket.jsx";
import UpdateTicket from "./crud/UpdateTicket.jsx";
import Login from "./auth/Login.jsx";
import { logoutUser } from "./api/engineers.jsx";
import LandingPage from "./UI/LandingPage.jsx";
import Admin from "./admin/Admin.jsx";
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
      },
      {
        path: "/admin",
        element: <Admin />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/logout",
        action: logoutUser,
      },
    ],
  },
  {
    path: "/home",
    element: <LandingPage />,
  },
]);
// client
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
