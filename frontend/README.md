# Ticketty

## Overview

This is a Ticket Management Application developed using ReactJS for the frontend and MySQL for the backend. The application is designed to efficiently manage and track various tickets, allowing users to have a centralized platform for issue resolution.
test branch update

## What's Included?

### 1. Dashboard

The dashboard provides a comprehensive view of the ticket list along with their respective status. Users can quickly assess the current status of tickets and prioritize their actions accordingly.

### 2. Single Ticket View

In the Single Ticket View, users can perform various operations related to individual tickets:

**_Assign Engineer_**: Users can assign specific engineers to handle particular tickets. This helps in streamlining the workflow and ensuring that each ticket receives appropriate attention.

**_Manage Tickets_**: Users can manage the details of each ticket, making updates or modifications as needed. This includes changing the status, updating descriptions, and attaching relevant information.

**_Work on Ticket Issues_**: The application facilitates collaboration by allowing engineers to work on the identified issues within a ticket. This feature enhances efficiency and coordination among team members.

## Database SQL Schema

The application relies on a MySQL database to store and manage ticket-related information. Below is a simplified representation of the database schema:

```sql
Table follows {
  following_user_id integer
  followed_user_id integer
  created_at timestamp
}

Table users {
  id integer [primary key]
  username varchar
  role varchar
  created_at timestamp
}

Table posts {
  id integer [primary key]
  title varchar
  body text [note: 'Content of the post']
  user_id integer
  status varchar
  created_at timestamp
}

Ref: posts.user_id > users.id // many-to-one

Ref: users.id < follows.following_user_id

Ref: users.id < follows.followed_user_id
```

This schema includes tables for Tickets, Engineers, and Assignments, establishing relationships between tickets and assigned engineers.

## Getting Started

To set up and run the application, follow these general steps:

- Clone the repository to your local machine.
- Install the necessary dependencies for both the frontend and backend.
- Configure the MySQL database connection settings.
- Run the application, ensuring the frontend and backend are connected.
- For detailed instructions and specific requirements, refer to the documentation provided with the application.

## Github actions

![Auto Assign](https://github.com/TATAPS/demo-repository/actions/workflows/auto-assign.yml/badge.svg)

![Proof HTML](https://github.com/TATAPS/demo-repository/actions/workflows/proof-html.yml/badge.svg)

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Support and Feedback

If you encounter any issues or have suggestions for improvement, please feel free to reach out to our support team. We value your feedback and are committed to enhancing the functionality and user experience of **_Ticketty_**
