USE sys;
DROP SCHEMA IF EXISTS support_ticket_platform;

CREATE SCHEMA support_ticket_platform;
USE support_ticket_platform;

DROP TABLE IF EXISTS companies;
DROP TABLE IF EXISTS company_contacts;
DROP TABLE IF EXISTS engineers;
DROP TABLE IF EXISTS priorities;
DROP TABLE IF EXISTS ticket_notes;
DROP TABLE IF EXISTS tickets;
DROP TABLE IF EXISTS persons;
DROP TABLE IF EXISTS statuses;
DROP TABLE IF EXISTS sessions;

CREATE TABLE sessions (
    session_id VARCHAR(128) COLLATE utf8mb4_bin NOT NULL,
    expires INT(11) UNSIGNED NOT NULL,
    data MEDIUMTEXT COLLATE utf8mb4_bin,
    PRIMARY KEY (session_id)
);

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

CREATE TABLE priorities (
	id INT NOT NULL AUTO_INCREMENT,
    priority ENUM("P1 High", "P2 Medium", "P3 Low", "P4 Other"),
    PRIMARY KEY(id)
);

CREATE TABLE statuses (
    id INT NOT NULL AUTO_INCREMENT,
    status ENUM("Open", "Closed", "Pending", "Assigned", "Working"),
    PRIMARY KEY(id)
);

CREATE TABLE tickets (
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

CREATE TABLE ticket_notes (
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


INSERT INTO persons (uuid, given_name, family_name, email, phone) VALUES (UUID_TO_BIN("4e4445eb-c18d-11ee-ac1e-001fbc130d5b", 1),"Default", "Default", "default@defaultemail.com", 0000005555);
INSERT INTO persons (uuid, given_name, family_name, email, phone) VALUES (UUID_TO_BIN("11eeb505-16a3-6017-8584-001fbc130d5b", 1),"Arlen", "Haruard", "aharuard0@reverbnation.com", 8309539728);
INSERT INTO persons (uuid, given_name, family_name, email, phone) VALUES (UUID_TO_BIN("08c4b362-b554-11ee-ad8f-001fbc130d5b", 1),"Reese", "Lade", "rlade1@reddit.com", 3503858400);
INSERT INTO persons (uuid, given_name, family_name, email, phone) VALUES (UUID_TO_BIN("187b0262-b554-11ee-ad8f-001fbc130d5b", 1),"Kinsley", "Dowdney", "kdowdney2@toplist.cz", 6069591537);
INSERT INTO persons (uuid, given_name, family_name, email, phone) VALUES (UUID_TO_BIN("2443fc01-b554-11ee-ad8f-001fbc130d5b", 1),"Huntley", "Heak", "hheak3@ask.com", 2835241571);
INSERT INTO persons (uuid, given_name, family_name, email, phone) VALUES (UUID_TO_BIN("6fa3ab02-b554-11ee-ad8f-001fbc130d5b", 1),"Xena", "Crosetto", "xcrosetto4@gnu.org", 4878801366);
INSERT INTO persons (uuid, given_name, family_name, email, phone) VALUES (UUID_TO_BIN("7b671389-b554-11ee-ad8f-001fbc130d5b", 1),"Iseabal", "Elloy", "ielloy5@pen.io", 7469073433);
INSERT INTO persons (uuid, given_name, family_name, email, phone) VALUES (UUID_TO_BIN("813827e4-b554-11ee-ad8f-001fbc130d5b", 1), "Dispatch", "None", "dispatch@ticketty.com", 9175555555);
INSERT INTO persons (uuid, given_name, family_name, email, phone) VALUES (UUID_TO_BIN("516827e4-b554-11ee-ad8f-001fbc130d5b", 1), "Dispatch", "the Second", "dispatch2@ticketty.com", 9175555555);

INSERT INTO engineers (id, person_uuid, username, password, salt, role, active) VALUES (1, UUID_TO_BIN("813827e4-b554-11ee-ad8f-001fbc130d5b", 1),'dispatch', '$2b$10$CPx4byxXqCGzJv6VErAX6uxu2Gbt562qc2GVgUePEm2Ca22HOfFxG', "$2b$10$CPx4byxXqCGzJv6VErAX6u", 'Dispatch', TRUE);
INSERT INTO engineers (person_uuid, username, password, salt, role, active) VALUES (UUID_TO_BIN('08c4b362-b554-11ee-ad8f-001fbc130d5b', 1), 'dispatch2', '$2b$10$x8Y5NyJFlAiNKUbKxk2hpeGC.A5tjXrixlxi.DkzDZ9aIubzE7Rz6','$2b$10$x8Y5NyJFlAiNKUbKxk2hpe','Dispatch', TRUE);
INSERT INTO engineers (person_uuid, username, password, salt, role, active) VALUES (UUID_TO_BIN('7b671389-b554-11ee-ad8f-001fbc130d5b', 1),'engineer', '$2b$10$7HZBFonB/R5xdWFxfEHuM.jLhaVRChUaejoGhFvheImURe6L/yBrO','$2b$10$7HZBFonB/R5xdWFxfEHuM.','Engineer', TRUE);
INSERT INTO engineers (person_uuid, username, password, salt, role, active) VALUES (UUID_TO_BIN('2443fc01-b554-11ee-ad8f-001fbc130d5b', 1),'manager', '$2b$10$XgJ6ydkSCIC.H7AS5fILg.Y3uX6pqvFE6DizJXUMfih7nSw3LumIu','$2b$10$XgJ6ydkSCIC.H7AS5fILg.','Manager', TRUE);

INSERT INTO companies (ein_tin, name, active) VALUES ("00-0000000", "Default Company", TRUE);
INSERT INTO companies (ein_tin, name, active) VALUES ("40-2522401", "Rose's Apothecary", TRUE);
INSERT INTO companies (ein_tin, name, active) VALUES ("30-2846270", "Jimmy's Auto Shop", TRUE);
INSERT INTO companies (ein_tin, name, active) VALUES ("38-3881633", "Charity to Charity", TRUE);
INSERT INTO companies (ein_tin, name, active) VALUES ("57-4730262", "Smacked By the Stack", TRUE);

INSERT INTO company_contacts (company_id, person_uuid) VALUES ("00-0000000", UUID_TO_BIN('4e4445eb-c18d-11ee-ac1e-001fbc130d5b', 1));
INSERT INTO company_contacts (company_id, person_uuid) VALUES ("40-2522401", UUID_TO_BIN('11eeb505-16a3-6017-8584-001fbc130d5b', 1));
INSERT INTO company_contacts (company_id, person_uuid) VALUES ("30-2846270", UUID_TO_BIN("187b0262-b554-11ee-ad8f-001fbc130d5b", 1));
INSERT INTO company_contacts (company_id, person_uuid) VALUES ("38-3881633", UUID_TO_BIN('6fa3ab02-b554-11ee-ad8f-001fbc130d5b', 1));
INSERT INTO company_contacts (company_id, person_uuid) VALUES ("57-4730262", UUID_TO_BIN('813827e4-b554-11ee-ad8f-001fbc130d5b', 1));
INSERT INTO company_contacts (company_id, person_uuid) VALUES ("57-4730262", UUID_TO_BIN('516827e4-b554-11ee-ad8f-001fbc130d5b', 1));

INSERT INTO priorities (priority) VALUES ("P1 High");
INSERT INTO priorities (priority) VALUES ("P2 Medium");
INSERT INTO priorities (priority) VALUES ("P3 Low");
INSERT INTO priorities (priority) VALUES ("P4 Other");

INSERT INTO statuses (status) VALUES ("Open");
INSERT INTO statuses (status) VALUES ("Assigned");
INSERT INTO statuses (status) VALUES ("Pending");
INSERT INTO statuses (status) VALUES ("Working");
INSERT INTO statuses (status) VALUES ("Closed");

INSERT INTO tickets (company_id, owner_id, title, status, priority) VALUES ("38-3881633", UUID_TO_BIN('6fa3ab02-b554-11ee-ad8f-001fbc130d5b', 1), "Printer is down again", "Open", "P3 Low");
INSERT INTO tickets (company_id, owner_id, title, status, priority) VALUES ("40-2522401", UUID_TO_BIN('11eeb505-16a3-6017-8584-001fbc130d5b', 1), "Our CCTV Cameras are down! Help!", "Assigned", "P1 High");
INSERT INTO tickets (company_id, owner_id, engineer_id, title, status, priority) VALUES ("40-2522401", UUID_TO_BIN('11eeb505-16a3-6017-8584-001fbc130d5b', 1), 2 , "My internet is down", "Working", "P1 High");
INSERT INTO tickets (company_id, owner_id, engineer_id, title, status, priority) VALUES ("30-2846270", UUID_TO_BIN('187b0262-b554-11ee-ad8f-001fbc130d5b', 1), 3, "The Starbucks machine isn't dispensing coffee", "Closed", "P3 Low");
INSERT INTO tickets (company_id, owner_id, title, status, priority) VALUES ("38-3881633", UUID_TO_BIN('6fa3ab02-b554-11ee-ad8f-001fbc130d5b', 1), "Our computers are really slow", "Pending", "P4 Other");
INSERT INTO tickets (company_id, owner_id, title, status, priority) VALUES ("38-3881633", UUID_TO_BIN('6fa3ab02-b554-11ee-ad8f-001fbc130d5b', 1), "Is this a virus?", "Pending", "P1 High");
INSERT INTO tickets (company_id, owner_id, title, status, priority) VALUES ("38-3881633", UUID_TO_BIN('6fa3ab02-b554-11ee-ad8f-001fbc130d5b', 1), "What should we do with this electrical outlet?", "Working", "P3 Low");
INSERT INTO tickets (company_id, owner_id, title, status, priority) VALUES ("40-2522401", UUID_TO_BIN('11eeb505-16a3-6017-8584-001fbc130d5b', 1), "VPN access needed", "Assigned", "P3 Low");
INSERT INTO tickets (company_id, owner_id, title, status, priority) VALUES ("40-2522401", UUID_TO_BIN('11eeb505-16a3-6017-8584-001fbc130d5b', 1), "Need to install this shady software", "Assigned", "P2 Medium");
INSERT INTO tickets (company_id, owner_id, engineer_id, title, status, priority) VALUES ("30-2846270", UUID_TO_BIN('187b0262-b554-11ee-ad8f-001fbc130d5b', 1), 2, "Office 365 down?", "Working", "P1 High");
INSERT INTO tickets (company_id, owner_id, engineer_id, title, status, priority) VALUES ("30-2846270", UUID_TO_BIN('187b0262-b554-11ee-ad8f-001fbc130d5b', 1), 2, "Jan got a virus again", "Working", "P1 High");

INSERT INTO ticket_notes (ticket_id, creator_id, note, total_time) VALUES(3, UUID_TO_BIN('08c4b362-b554-11ee-ad8f-001fbc130d5b', 1), "Hi Arlen, I see that there is an outage in your area", 15);
INSERT INTO ticket_notes (ticket_id, creator_id, note, total_time) VALUES(3, UUID_TO_BIN('11eeb505-16a3-6017-8584-001fbc130d5b', 1), "That sucks, did you receive an estimate on when it would be back up?", 0);
INSERT INTO ticket_notes (ticket_id, creator_id, note, total_time) VALUES(3, UUID_TO_BIN('08c4b362-b554-11ee-ad8f-001fbc130d5b', 1), "Yes, should be back up in the next hour", 15);
INSERT INTO ticket_notes (ticket_id, creator_id, note, total_time) VALUES(3, UUID_TO_BIN('11eeb505-16a3-6017-8584-001fbc130d5b', 1), "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est lorem ipsum dolor sit amet consectetur. Nisl purus in mollis nunc sed. Pellentesque diam volutpat commodo sed. 
Egestas fringilla phasellus faucibus scelerisque eleifend donec. Hendrerit dolor magna eget est lorem ipsum dolor sit. Turpis massa tincidunt dui ut ornare. Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Interdum posuere lorem ipsum dolor sit. Pharetra magna ac placerat vestibulum lectus mauris. Sapien pellentesque habitant morbi tristique senectus. Varius quam quisque id diam vel. Ullamcorper eget nulla facilisi etiam. Tincidunt tortor aliquam nulla facilisi cras. Neque volutpat ac tincidunt vitae semper quis lectus nulla. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Nec feugiat in fermentum posuere urna nec tincidunt.\n\n

Sit amet facilisis magna etiam tempor orci eu. Consequat nisl vel pretium lectus quam. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Aliquam ut porttitor leo a. Nulla facilisi etiam dignissim diam. Sed blandit libero volutpat sed cras ornare. Velit egestas dui id ornare arcu odio ut sem nulla. Velit sed ullamcorper morbi tincidunt ornare massa. Scelerisque eu ultrices vitae auctor eu augue. Blandit massa enim nec dui nunc.", 0);
-- INSERT INTO ticket_notes (ticket_id, note, total_time) VALUES(7, "So Jen spilt coffee on the outlet in the wall", 0);
-- INSERT INTO ticket_notes (ticket_id, note, total_time) VALUES(7, "Hi Xena, you will need to contact an electrician. We are not able to assist in this request", 15);
-- INSERT INTO ticket_notes (ticket_id, note, total_time) VALUES(7, "Ok, we will reach out to one and let you know what they say", 0);
-- INSERT INTO ticket_notes (ticket_id, note, total_time) VALUES(10, "Hi Kinsley, I'm checking the website now", 15);
-- INSERT INTO ticket_notes (ticket_id, note, total_time) VALUES(10, "Thanks!", 0);
-- INSERT INTO ticket_notes (ticket_id, note, total_time) VALUES(10, "Hi Kinsley, it looks like there is an outage going on, but should be resolved in a few hours", 15);
-- INSERT INTO ticket_notes (ticket_id, note, total_time) VALUES(11, "Hi Kinsley, please have her immediately disconnect from the internet.", 15);
-- INSERT INTO ticket_notes (ticket_id, note, total_time) VALUES(11, "Can do, do we need to send this to you, or what would you like us to do?", 0);
-- INSERT INTO ticket_notes (ticket_id, note, total_time) VALUES(11, "Please send it to us, but please make sure the wifi has been disabled on it before sending", 15);
