const {
  getAllTickets,
  addTicket,
  updateTicket,
  getSingleTicket,
} = require("../models/tickets_model.js");

async function getAllTicketsAction(req, res) {
  try {
    const tickets = await getAllTickets();
    res.json(tickets);
  } catch (error) {
    throw error;
  }
}

async function getSingleTicketAction(req, res) {
  try {
    const id = req.params.ticket_id;
    const ticket = await getSingleTicket(id);
    res.status(200).json(ticket);
  } catch (error) {
    console.error(error);
  }
}

async function addTicketAction(req, res) {
  try {
    const values = [
      req.body.priority,
      req.body.company_id,
      req.body.engineer_id,
      req.body.title,
      req.body.status,
      req.body.owner_id,
    ];
    const newTicket = await addTicket(values);
    res.status(200).json(newTicket);
  } catch (error) {
    throw error;
  }
}

function splitFullName(fullName) {
  let firstName = "";
  let lastName = "";

  // Split the full name into an array of words
  if (fullName && fullName.includes(" ")) {
    const nameParts = fullName.split(" ");
    // Extract the last name and first name
    lastName = nameParts.pop(); // Removes and returns the last element of the array
    firstName = nameParts.join(" "); // Join the remaining elements with a space
  }

  return {
    firstName: firstName,
    lastName: lastName,
  };
}

async function updateTicketAction(req, res) {
  try {
    const {
      priority,
      company_id,
      owner_id,
      engineer_id,
      title,
      status,
      ticket_total_time,
      id,
    } = req.body;
    console.log(req.body);
    const values = [
      priority,
      company_id,
      owner_id,
      engineer_id,
      title,
      status,
      ticket_total_time,
      id,
    ];
    // console.log(values);
    // const { firstName, lastName } = splitFullName(contact);
    // const id = req.params.ticket_id;
    // const values = [title, company_id, status, engineer_id, firstName, lastName, id];
    const updatedTicket = await updateTicket(values);
    console.log("updatedTicket", updatedTicket);
    res.status(200).json(updatedTicket);
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllTicketsAction,
  getSingleTicketAction,
  addTicketAction,
  updateTicketAction,
};
