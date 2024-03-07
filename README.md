# Ticketty

## Overview

This is a Ticket Management Application developed using ReactJS for the frontend and MySQL for the backend. The application is designed to efficiently manage and track various tickets, allowing users to have a centralized platform for issue resolution.
test branch update

## What's Included?

### 1. Authentication

User-friendly login

<img src="/images/login-1.gif" alt="login-1" width="600"/>
<img src="/images/login-2.gif" alt="login-2" width="600"/>

Secured authentication by saving session-cookies when logging in and destroy it when logging out

<img src="/images/cookie-session-1.png" alt="cookie-session-1" width="300"/>
<img src="/images/cookie-session-2.png" alt="cookie-session-1" width="300"/>

### 2. Dashboard

The dashboard provides a comprehensive view of the ticket list along with their respective status. Users can quickly assess the current status of tickets and prioritize their actions accordingly.

[✅] **ROWS**: Sort rows based on user's preferences

[✅] **COLUMNS**: Filter, Hide/Unhide, Adjust Column Density

[✅] **SEARCH**: Search for specific data inside the table

<img src="/images/dashboard-1.gif" alt="dashboard-1" width="600"/>

### 3. Single Ticket View

In the Single Ticket View, users can perform various operations related to individual tickets:

[] **_Assign Engineer_**: Users can assign specific engineers to handle particular tickets. This helps in streamlining the workflow and ensuring that each ticket receives appropriate attention.

[✅] **_Manage Tickets_**: Users can manage the details of each ticket, making updates or modifications as needed. This includes changing the status, updating descriptions, and attaching relevant information.

[✅] **_Work on Ticket Issues_**: The application facilitates collaboration by allowing engineers to work on the identified issues within a ticket. This feature enhances efficiency and coordination among team members.

## Getting Started

To set up and run the application, follow these general steps:

1. Clone the repository to your local machine.
2. Install the necessary dependencies for both the frontend and backend.
3. Configure the MySQL database connection settings.
4. In the root folder, create a local `cert` folder includes

`cert.pem`

```cmd
-----BEGIN CERTIFICATE-----
INSERT YOUR CERT KEY HERE
-----END CERTIFICATE-----
```

`key.pem`

```cmd
-----BEGIN RSA PRIVATE KEY-----
INSERT YOUR RSA PRIVATE KEY HERE
-----END RSA PRIVATE KEY-----

```

1. Run the application, ensuring the frontend and backend are connected.

**NPM**

Navigate to `backend` folder

```cmd
npm install
npm start
```

Open another terminal, navgate to `frontend` folder

```cmd
npm install
npm run dev
```

## SQL Database Schema

The application relies on a MySQL database to store and manage ticket-related information. Below is a simplified representation of the database schema:

<img src="/images/ticketty-dbschema.png" alt="Ticketty SQL Schema" width="600"/>

**_Ticketty SQL Schema_**

```sql
TABLE sessions (
    session_id VARCHAR(128) COLLATE utf8mb4_bin NOT NULL,
    expires INT(11) UNSIGNED NOT NULL,
    data MEDIUMTEXT COLLATE utf8mb4_bin,
    PRIMARY KEY (session_id)
);

TABLE persons (
	uuid BINARY(16) DEFAULT (UUID_TO_BIN(UUID(),1)),
    given_name VARCHAR(50) NOT NULL,
    family_name VARCHAR(80) NOT NULL,
    email VARCHAR(254) NOT NULL UNIQUE,
    phone BIGINT UNSIGNED NOT NULL,
    active BOOLEAN DEFAULT FALSE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (uuid)
);

TABLE engineers (
	id INT NOT NULL AUTO_INCREMENT,
	person_uuid BINARY(16) NOT NULL,
    username VARCHAR(254),
    password VARCHAR(60),
    salt VARCHAR(32),
    -- DEFAULT (UUID_TO_BIN(UUID(),1)),
    role ENUM("Dispatch", "Engineer", "Manager"),
    active BOOLEAN DEFAULT FALSE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (person_uuid)
		REFERENCES persons (uuid) ON DELETE RESTRICT ON UPDATE CASCADE
);

TABLE companies (
	ein_tin VARCHAR(15) NOT NULL,
    name VARCHAR(250) NOT NULL,
    active BOOLEAN DEFAULT FALSE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (ein_tin)
);


TABLE company_contacts (
	company_id VARCHAR(15) NOT NULL,
	person_uuid BINARY(16) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT PK_contacts_companies PRIMARY KEY
    (
         company_id,
         person_uuid
	),
	 FOREIGN KEY (company_id) REFERENCES companies (ein_tin) ON DELETE RESTRICT ON UPDATE CASCADE,
     FOREIGN KEY (person_uuid) REFERENCES persons (uuid) ON DELETE RESTRICT ON UPDATE CASCADE
);

TABLE priorities (
	id INT NOT NULL AUTO_INCREMENT,
    priority ENUM("P1 High", "P2 Medium", "P3 Low", "P4 Other"),
    PRIMARY KEY(id)
);

TABLE statuses (
    id INT NOT NULL AUTO_INCREMENT,
    status ENUM("Open", "Closed", "Pending", "Assigned", "Working"),
    PRIMARY KEY(id)
);

TABLE tickets (
    id INT NOT NULL AUTO_INCREMENT,
    priority ENUM("P1 High", "P2 Medium", "P3 Low", "P4 Other") DEFAULT "P3 Low",
    company_id VARCHAR(15) NOT NULL,
    owner_id BINARY(16),
    engineer_id INT NOT NULL DEFAULT 1,
    title VARCHAR(150),
    status ENUM("Open", "Closed", "Pending", "Assigned", "Working"),
    ticket_total_time INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    closed_at TIMESTAMP,
    PRIMARY KEY (id),
    CONSTRAINT fk_company_id FOREIGN KEY (company_id)
		REFERENCES companies (ein_tin) ON DELETE RESTRICT ON UPDATE CASCADE,
        -- NOT SURE IF THE NEXT PART IS CORRECT
	CONSTRAINT fk_owner_id FOREIGN KEY (owner_id)
		REFERENCES company_contacts (person_uuid) ON DELETE RESTRICT ON UPDATE CASCADE,
	CONSTRAINT fk_engineer_id FOREIGN KEY (engineer_id)
		REFERENCES engineers (id) ON DELETE RESTRICT ON UPDATE CASCADE
);

TABLE ticket_notes (
    id INT NOT NULL AUTO_INCREMENT,
    ticket_id INT NOT NULL,
    creator_id BINARY(16) NOT NULL,
    note VARCHAR(1800),
    total_time INT NOT NULL DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    CONSTRAINT fk_ticket_id FOREIGN KEY (ticket_id)
        REFERENCES tickets (id) ON DELETE RESTRICT ON UPDATE CASCADE
);

```

This schema includes tables for Tickets, Engineers, and Assignments, establishing relationships between tickets and assigned engineers.

## REST API & Architectures

### Task:

[] Generate Diagram using Python Diagrams

**Demo REST API**

<img src="/images/demo-API.webp" alt="REST API" width="600"/>

**Demo Session**

<img src="/images/demo-session.png" alt="Session" width="600"/>

## Github Workflows

1, Run this script in your local terminal

```bash
git checkout main
git pull origin main
git status

git checkout your-working-branch
git rebase main
```

**_git rebase main_**: pull all the changes in main without having extra commits from the merge

2, Push your work to Github and create a PR

```bash
git add .
git commit -m "commit message"
git push origin your-working-branch
```

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
