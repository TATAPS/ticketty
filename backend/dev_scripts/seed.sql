USE sys;
DROP SCHEMA IF EXISTS support_ticket_platform; 

CREATE SCHEMA support_ticket_platform;
USE support_ticket_platform;


DROP TABLE IF EXISTS contacts;
DROP TABLE IF EXISTS companies;
DROP TABLE IF EXISTS contacts_companies;
DROP TABLE IF EXISTS engineer; 
DROP TABLE IF EXISTS tickets;
DROP TABLE IF EXISTS persons;

CREATE TABLE persons (
	uuid BINARY(16) DEFAULT (UUID_TO_BIN(UUID(),1)),
    given_name VARCHAR(50) NOT NULL,
    family_name VARCHAR(80) NOT NULL,
    email VARCHAR(254) NOT NULL UNIQUE,
    phone BIGINT UNSIGNED NOT NULL,
    active BOOLEAN DEFAULT FALSE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (uuid)
);

CREATE TABLE engineers (
	id INT NOT NULL AUTO_INCREMENT,
	person_uuid BINARY(16) NOT NULL,
    -- DEFAULT (UUID_TO_BIN(UUID(),1)),
    role ENUM("Dispatch", "Engineer", "Manager"),
    active BOOLEAN DEFAULT FALSE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id), 
    FOREIGN KEY (person_uuid) 
		REFERENCES persons (uuid) ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE TABLE companies (
	ein_tin VARCHAR(15) NOT NULL,
    name VARCHAR(250) NOT NULL,
    active BOOLEAN DEFAULT FALSE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (ein_tin)
);


CREATE TABLE company_contacts (
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

CREATE TABLE tickets (
    id INT NOT NULL AUTO_INCREMENT,
    company_id VARCHAR(15) NOT NULL,
    owner_id BINARY(16) NOT NULL,
    engineer_id INT NOT NULL DEFAULT 1,
    title VARCHAR(150), 
    status ENUM("Open", "Closed", "Pending", "Assigned", "Working"),
    ticket_total_time INT,
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

CREATE TABLE ticket_notes (
    id INT NOT NULL AUTO_INCREMENT,
    ticket_id INT NOT NULL,
    note VARCHAR(1800),
    total_time INT NOT NULL DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    CONSTRAINT fk_ticket_id FOREIGN KEY (ticket_id)
        REFERENCES tickets (id) ON DELETE RESTRICT ON UPDATE CASCADE 
);

INSERT INTO persons (uuid, given_name, family_name, email, phone) VALUES (UUID_TO_BIN("11eeb505-16a3-6017-8584-001fbc130d5b", 1),"Arlen", "Haruard", "aharuard0@reverbnation.com", 8309539728);
INSERT INTO persons (uuid, given_name, family_name, email, phone) VALUES (UUID_TO_BIN("08c4b362-b554-11ee-ad8f-001fbc130d5b", 1),"Reese", "Lade", "rlade1@reddit.com", 3503858400);
INSERT INTO persons (uuid, given_name, family_name, email, phone) VALUES (UUID_TO_BIN("187b0262-b554-11ee-ad8f-001fbc130d5b", 1),"Kinsley", "Dowdney", "kdowdney2@toplist.cz", 6069591537);
INSERT INTO persons (uuid, given_name, family_name, email, phone) VALUES (UUID_TO_BIN("2443fc01-b554-11ee-ad8f-001fbc130d5b", 1),"Huntley", "Heak", "hheak3@ask.com", 2835241571);
INSERT INTO persons (uuid, given_name, family_name, email, phone) VALUES (UUID_TO_BIN("6fa3ab02-b554-11ee-ad8f-001fbc130d5b", 1),"Xena", "Crosetto", "xcrosetto4@gnu.org", 4878801366);
INSERT INTO persons (uuid, given_name, family_name, email, phone) VALUES (UUID_TO_BIN("7b671389-b554-11ee-ad8f-001fbc130d5b", 1),"Iseabal", "Elloy", "ielloy5@pen.io", 7469073433);
INSERT INTO persons (uuid, given_name, family_name, email, phone) VALUES (UUID_TO_BIN("813827e4-b554-11ee-ad8f-001fbc130d5b", 1), "Dispatch", "None", "dispatch@ticketty.com", 9175555555);

INSERT INTO engineers (id, person_uuid, role, active) VALUES (0, UUID_TO_BIN("813827e4-b554-11ee-ad8f-001fbc130d5b", 1), 'Dispatch', TRUE);
INSERT INTO engineers (person_uuid, role, active) VALUES (UUID_TO_BIN('08c4b362-b554-11ee-ad8f-001fbc130d5b', 1), 'Dispatch', TRUE);
INSERT INTO engineers (person_uuid, role, active) VALUES (UUID_TO_BIN('7b671389-b554-11ee-ad8f-001fbc130d5b', 1), 'Engineer', TRUE);
INSERT INTO engineers (person_uuid, role, active) VALUES (UUID_TO_BIN('2443fc01-b554-11ee-ad8f-001fbc130d5b', 1), 'Manager', TRUE);

INSERT INTO companies (ein_tin, name, active) VALUES ("40-2522401", "Rose's Apothecary", TRUE);
INSERT INTO companies (ein_tin, name, active) VALUES ("30-2846270", "Jimmy's Auto Shop", TRUE);
INSERT INTO companies (ein_tin, name, active) VALUES ("38-3881633", "Charity to Charity", TRUE);
INSERT INTO companies (ein_tin, name, active) VALUES ("57-4730262", "Smacked By the Stack", TRUE);

INSERT INTO company_contacts (company_id, person_uuid) VALUES ("40-2522401", UUID_TO_BIN('11eeb505-16a3-6017-8584-001fbc130d5b', 1));
INSERT INTO company_contacts (company_id, person_uuid) VALUES ("30-2846270", UUID_TO_BIN('187b0262-b554-11ee-ad8f-001fbc130d5b', 1));
INSERT INTO company_contacts (company_id, person_uuid) VALUES ("38-3881633", UUID_TO_BIN('6fa3ab02-b554-11ee-ad8f-001fbc130d5b', 1));
INSERT INTO company_contacts (company_id, person_uuid) VALUES ("57-4730262", UUID_TO_BIN('813827e4-b554-11ee-ad8f-001fbc130d5b', 1));

INSERT INTO tickets (company_id, owner_id, title, status) VALUES ("38-3881633", UUID_TO_BIN('6fa3ab02-b554-11ee-ad8f-001fbc130d5b', 1), "Printer is down again", "Open");
INSERT INTO tickets (company_id, owner_id, title, status) VALUES ("40-2522401", UUID_TO_BIN('11eeb505-16a3-6017-8584-001fbc130d5b', 1), "Our CCTV Cameras are down! Help!", "Assigned");
INSERT INTO tickets (company_id, owner_id, engineer_id, title, status) VALUES ("40-2522401", UUID_TO_BIN('11eeb505-16a3-6017-8584-001fbc130d5b', 1), 2 , "My internet is down", "Working");
INSERT INTO tickets (company_id, owner_id, engineer_id, title, status) VALUES ("30-2846270", UUID_TO_BIN('187b0262-b554-11ee-ad8f-001fbc130d5b', 1), 3, "The Starbucks machine isn't dispensing coffee", "Closed");
INSERT INTO tickets (company_id, owner_id, title, status) VALUES ("38-3881633", UUID_TO_BIN('6fa3ab02-b554-11ee-ad8f-001fbc130d5b', 1), "Our computers are really slow", "Pending");
INSERT INTO tickets (company_id, owner_id, title, status) VALUES ("38-3881633", UUID_TO_BIN('6fa3ab02-b554-11ee-ad8f-001fbc130d5b', 1), "Is this a virus?", "Pending");
INSERT INTO tickets (company_id, owner_id, title, status) VALUES ("38-3881633", UUID_TO_BIN('6fa3ab02-b554-11ee-ad8f-001fbc130d5b', 1), "What should we do with this electrical outlet?", "Working");
INSERT INTO tickets (company_id, owner_id, title, status) VALUES ("40-2522401", UUID_TO_BIN('11eeb505-16a3-6017-8584-001fbc130d5b', 1), "VPN access needed", "Assigned");
INSERT INTO tickets (company_id, owner_id, title, status) VALUES ("40-2522401", UUID_TO_BIN('11eeb505-16a3-6017-8584-001fbc130d5b', 1), "Need to install this shady software", "Assigned");
INSERT INTO tickets (company_id, owner_id, engineer_id, title, status) VALUES ("30-2846270", UUID_TO_BIN('187b0262-b554-11ee-ad8f-001fbc130d5b', 1), 2, "Office 365 down?", "Working");
INSERT INTO tickets (company_id, owner_id, engineer_id, title, status) VALUES ("30-2846270", UUID_TO_BIN('187b0262-b554-11ee-ad8f-001fbc130d5b', 1), 2, "Jan got a virus again", "Working");

INSERT INTO ticket_notes (ticket_id, note, total_time) VALUES(3, "Hi Arlen, I see that there is an outage in your area", 15);
INSERT INTO ticket_notes (ticket_id, note, total_time) VALUES(3, "That sucks, did you receive an estimate on when it would be back up?", 0);
INSERT INTO ticket_notes (ticket_id, note, total_time) VALUES(3, "Yes, should be back up in the next hour", 15);
INSERT INTO ticket_notes (ticket_id, note, total_time) VALUES(7, "So Jen spilt coffee on the outlet in the wall", 0);
INSERT INTO ticket_notes (ticket_id, note, total_time) VALUES(7, "Hi Xena, you will need to contact an electrician. We are not able to assist in this request", 15);
INSERT INTO ticket_notes (ticket_id, note, total_time) VALUES(7, "Ok, we will reach out to one and let you know what they say", 0);
INSERT INTO ticket_notes (ticket_id, note, total_time) VALUES(10, "Hi Kinsley, I'm checking the website now", 15);
INSERT INTO ticket_notes (ticket_id, note, total_time) VALUES(10, "Thanks!", 0);
INSERT INTO ticket_notes (ticket_id, note, total_time) VALUES(10, "Hi Kinsley, it looks like there is an outage going on, but should be resolved in a few hours", 15);
INSERT INTO ticket_notes (ticket_id, note, total_time) VALUES(11, "Hi Kinsley, please have her immediately disconnect from the internet.", 15);
INSERT INTO ticket_notes (ticket_id, note, total_time) VALUES(11, "Can do, do we need to send this to you, or what would you like us to do?", 0);
INSERT INTO ticket_notes (ticket_id, note, total_time) VALUES(11, "Please send it to us, but please make sure the wifi has been disabled on it before sending", 15);


-- OLD Schema
-- USE sys;
-- DROP SCHEMA IF EXISTS support_ticket_platform;

-- CREATE SCHEMA support_ticket_platform;
-- USE support_ticket_platform;

-- DROP TABLE IF EXISTS contacts;
-- DROP TABLE IF EXISTS companies;
-- DROP TABLE IF EXISTS companies_contacts;
-- DROP TABLE IF EXISTS engineer;
-- DROP TABLE IF EXISTS tickets;
-- DROP TABLE IF EXISTS ticket_notes;

-- CREATE TABLE contacts (
-- 	id INT NOT NULL AUTO_INCREMENT,
--     firstname VARCHAR(50) NOT NULL,
--     lastname VARCHAR(80) NOT NULL,
--     email VARCHAR(160) UNIQUE NOT NULL,
--     phone BIGINT UNSIGNED NOT NULL,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     PRIMARY KEY (id)
-- );

-- CREATE TABLE companies (
-- 	ein_tin VARCHAR(15) NOT NULL,
--     name VARCHAR(250) NOT NULL,
--     phone BIGINT UNSIGNED NOT NULL,
--     address VARCHAR(250) NOT NULL,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     PRIMARY KEY (ein_tin)
-- );

-- CREATE TABLE contacts_companies (
--     company_id VARCHAR(15) NOT NULL,
--     contacts_id INT NOT NULL,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
--     CONSTRAINT PK_contacts_companies PRIMARY KEY
--     (
--         company_id,
--         contacts_id
--     ),
--     FOREIGN KEY (company_id) REFERENCES companies (ein_tin) ON DELETE RESTRICT ON UPDATE CASCADE,
--     FOREIGN KEY (contacts_id) REFERENCES contacts (id) ON DELETE RESTRICT ON UPDATE CASCADE
-- )

-- CREATE TABLE engineers (
--     id INT NOT NULL AUTO_INCREMENT,
--     firstname VARCHAR(50) NOT NULL,
--     lastname VARCHAR(80),
--     phone BIGINT UNSIGNED NOT NULL,
--     email VARCHAR(160) UNIQUE,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     PRIMARY KEY (id),
-- );

-- CREATE TABLE ticket_notes (
--     id INT NOT NULL AUTO_INCREMENT,
--     ticket_id INT NOT NULL,
--     note VARCHAR(65535) NOT NULL,
--     total_time INT NOT NULL,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     PRIMARY KEY (id),
--     CONSTRAINT fk_ticket_id FOREIGN KEY (ticket_id)
--         REFERENCES tickets (id) ON DELETE RESTRICT ON UPDATE CASCADE 
-- );

-- CREATE TABLE tickets (
--     id INT NOT NULL AUTO_INCREMENT,
--     company_id VARCHAR(15) NOT NULL,
--     owner_id INT NOT NULL,
--     owner_firstname VARCHAR(50) NOT NULL,
--     owner_lastname VARCHAR(80) NOT NULL,
--     engineers_id INT NOT NULL DEFAULT 0,
--     engineers_name VARCHAR(130) NOT NULL DEFAULT 'Dispatch',
--     title VARCHAR(150), 
--     status ENUM("Open", "Closed", "Pending", "Assigned", "Working"),
--     ticket_total_time INT,
--     ticket_notes_id INT NOT NULL,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     closed_at TIMESTAMP,
-- );

-- INSERT INTO companies (company_id, company_name, company_address, company_main_contact_id)
-- 	VALUES(1, "Blue Castle IT", "Somewhere in CT", 1);
-- INSERT INTO contacts (contact_id, contact_first_name, contact_last_name, contact_email, contact_phone_number)
-- 	VALUES(1, "Diana", "Scott", "dscott@bluecastleit.com", 151515151515151); 
-- INSERT INTO engineers (engineer_id, engineer_first_name, engineer_last_name, engineer_email)
--     VALUES(1, "Tim", "Janssen", "tjanssenwork@gmail.com");

-- INSERT INTO tickets (ticket_id, ticket_status, ticket_contact_id, ticket_contact_first_name, ticket_contact_last_name, 
--     ticket_company_id, ticket_assigned_engineer_id, ticket_details, ticket_total_time)
--     VALUES(1, "In Progress", 1, "Diana", "Scott", 1, 1, "REWST is still a pain in the butt", 60);
-- INSERT INTO tickets (ticket_id, ticket_status, ticket_contact_id, ticket_contact_first_name, ticket_contact_last_name, 
--     ticket_company_id, ticket_assigned_engineer_id, ticket_details, ticket_total_time)
--     VALUES(2, "In Progress", 1, "Diana", "Scott", 1, 1, "This is getting rediculous", 60);
-- INSERT INTO tickets (ticket_id, ticket_status, ticket_contact_id, ticket_contact_first_name, ticket_contact_last_name, 
--     ticket_company_id, ticket_assigned_engineer_id, ticket_details, ticket_total_time)
--     VALUES(3, "In Progress", 1, "Diana", "Scott", 1, 1, "Damn this application to hell", 60);
-- INSERT INTO tickets (ticket_id, ticket_status, ticket_contact_id, ticket_contact_first_name, ticket_contact_last_name, 
--     ticket_company_id, ticket_assigned_engineer_id, ticket_details, ticket_total_time)
--     VALUES(4, "In Progress", 1, "Diana", "Scott", 1, 1, "Office 365 Integration Issue", 60);
-- INSERT INTO tickets (ticket_id, ticket_status, ticket_contact_id, ticket_contact_first_name, ticket_contact_last_name, 
--     ticket_company_id, ticket_assigned_engineer_id, ticket_details, ticket_total_time)
--     VALUES(5, "In Progress", 1, "Diana", "Scott", 1, 1, "New Alerts Needed", 60);
-- INSERT INTO tickets (ticket_id, ticket_status, ticket_contact_id, ticket_contact_first_name, ticket_contact_last_name, 
--     ticket_company_id, ticket_assigned_engineer_id, ticket_details, ticket_total_time)
--     VALUES(6, "In Progress", 1, "Diana", "Scott", 1, 1, "M", 60);

-- SELECT * FROM contacts;
-- SELECT * FROM companies;
-- SELECT * FROM engineers;
-- SELECT * FROM contacts_companies;
-- SELECT * FROM tickets;
-- SELECT * FROM ticket_notes;