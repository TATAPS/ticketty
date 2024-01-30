# Major To Do

- [] redo self signed certs with all information
- [] confirm cookies have 'secure' setting for them

# To Do

- [] Clean up index.js for dev purposes
- [] Rename contacts folder to company_contacts to show the relationship in sql
- [] Issues with api requests:
  - [] POST to api/companies/create kills server if done more than once
  - [] POST to api/companies/create does not have the correct "active" status when you GET all companies after creating.
  - [x] GET api/contacts/company_contacts failing,
- [] Clean up models:
  - [] Confirm all models have been parameterized
  - [] Confirm all models that have values being passed to the model are passed as an array per best practice.
- [] Setup Auth and Tokens:

# 1 Current Relationships

## Contacts <> Companies

many-to-many relationship

## Engineers <> Tickets

many-to-many relationships

- allows us to merge tickets later with a many to many relationship

# Relationships

Attribution: jpmc26 and NullUserException(might or might not be a real person) from stack overflow

https://stackoverflow.com/questions/7296846/how-to-implement-one-to-one-one-to-many-and-many-to-many-relationships-while-de

**One-to-one:** Use a foreign key to the referenced table:

student: student_id, first_name, last_name, address_id
address: address_id, address, city, zipcode, student_id # you can have a "link back" if you need

You must also put a unique constraint on the foreign key column (addess.student_id) to prevent multiple rows in the child table (address) from relating to the same row in the referenced table (student).

**One-to-many:** Use a foreign key on the many side of the relationship linking back to the "one" side:

teachers: teacher_id, first_name, last_name # the "one" side
classes: class_id, class_name, teacher_id # the "many" side

**Many-to-many:** Use a junction table (example):

student: student_id, first_name, last_name
classes: class_id, name, teacher_id
student_classes: class_id, student_id # the junction table
Example queries:

-- Getting all students for a class:

    SELECT s.student_id, last_name
      FROM student_classes sc

INNER JOIN students s ON s.student_id = sc.student_id
WHERE sc.class_id = X

-- Getting all classes for a student:

    SELECT c.class_id, name
      FROM student_classes sc

INNER JOIN classes c ON c.class_id = sc.class_id
WHERE sc.student_id = Y
