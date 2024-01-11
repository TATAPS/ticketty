USE sys;
DROP SCHEMA IF EXISTS support_ticket_platform;

CREATE SCHEMA support_ticket_platform;
USE support_ticket_platform;

DROP TABLE IF EXISTS companies;
DROP TABLE IF EXISTS contacts;
DROP TABLE IF EXISTS engineer;
DROP TABLE IF EXISTS tickets;

CREATE TABLE companies (
	company_id INT PRIMARY KEY,
    company_name VARCHAR(250),
    company_address VARCHAR(250),
    company_main_contact_id INT
);

CREATE TABLE engineers (
    engineer_id INT PRIMARY KEY,
    engineer_first_name VARCHAR(40),
    engineer_last_name VARCHAR(80),
    engineer_email VARCHAR(160) UNIQUE
);

CREATE TABLE contacts (
	contact_id INT PRIMARY KEY,
    contact_first_name VARCHAR(40),
    contact_last_name VARCHAR(80),
    contact_email VARCHAR(160) UNIQUE,
    contact_phone_number BIGINT UNSIGNED
);

CREATE TABLE tickets (
    ticket_id INT PRIMARY KEY,
    ticket_status VARCHAR(40),
    ticket_contact_id INT,
    ticket_contact_first_name VARCHAR(40),
    ticket_contact_last_name VARCHAR(80),
    ticket_company_id INT,
    ticket_assigned_engineer_id INT,
    ticket_details LONGTEXT,
    ticket_total_time INT
);

INSERT INTO companies (company_id, company_name, company_address, company_main_contact_id)
	VALUES(1, "Blue Castle IT", "Somewhere in CT", 1);
INSERT INTO contacts (contact_id, contact_first_name, contact_last_name, contact_email, contact_phone_number)
	VALUES(1, "Diana", "Scott", "dscott@bluecastleit.com", 151515151515151); 
INSERT INTO engineers (engineer_id, engineer_first_name, engineer_last_name, engineer_email)
    VALUES(1, "Tim", "Janssen", "tjanssenwork@gmail.com");

INSERT INTO tickets (ticket_id, ticket_status, ticket_contact_id, ticket_contact_first_name, ticket_contact_last_name, 
    ticket_company_id, ticket_assigned_engineer_id, ticket_details, ticket_total_time)
    VALUES(1, "In Progress", 1, "Diana", "Scott", 1, 1, "REWST is still a pain in the butt", 60);
INSERT INTO tickets (ticket_id, ticket_status, ticket_contact_id, ticket_contact_first_name, ticket_contact_last_name, 
    ticket_company_id, ticket_assigned_engineer_id, ticket_details, ticket_total_time)
    VALUES(2, "In Progress", 1, "Diana", "Scott", 1, 1, "This is getting rediculous", 60);
INSERT INTO tickets (ticket_id, ticket_status, ticket_contact_id, ticket_contact_first_name, ticket_contact_last_name, 
    ticket_company_id, ticket_assigned_engineer_id, ticket_details, ticket_total_time)
    VALUES(3, "In Progress", 1, "Diana", "Scott", 1, 1, "Damn this application to hell", 60);
INSERT INTO tickets (ticket_id, ticket_status, ticket_contact_id, ticket_contact_first_name, ticket_contact_last_name, 
    ticket_company_id, ticket_assigned_engineer_id, ticket_details, ticket_total_time)
    VALUES(4, "In Progress", 1, "Diana", "Scott", 1, 1, "Office 365 Integration Issue", 60);
INSERT INTO tickets (ticket_id, ticket_status, ticket_contact_id, ticket_contact_first_name, ticket_contact_last_name, 
    ticket_company_id, ticket_assigned_engineer_id, ticket_details, ticket_total_time)
    VALUES(5, "In Progress", 1, "Diana", "Scott", 1, 1, "New Alerts Needed", 60);
INSERT INTO tickets (ticket_id, ticket_status, ticket_contact_id, ticket_contact_first_name, ticket_contact_last_name, 
    ticket_company_id, ticket_assigned_engineer_id, ticket_details, ticket_total_time)
    VALUES(6, "In Progress", 1, "Diana", "Scott", 1, 1, "M", 60);

