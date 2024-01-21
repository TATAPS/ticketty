const { getAllTickets, addTicket, updateTicket } = require("../models/tickets_model.js");

async function getAllTicketsAction(req, res) {
  try {
    const tickets = await getAllTickets();
    res.json(tickets);
  } catch (error) {
    throw error;
  }
}

async function addTicketAction(req, res) {
  try {
    const values = [
      req.body.company_id,
      req.body.title,
      req.body.status
    ];
    const newTicket = await addTicket(values);
    res.status(200).json(newTicket);
  } catch (error) {
    throw error;
  }
}
async function updateTicketAction(req, res) {
  try {
    const values = [
      req.body.title,
      req.body.status,
      req.body.id
    ];
    const updatedTicket = await updateTicket(values);
    res.status(200).json(updatedTicket);
  } catch (error) {
    throw error
  }
}


module.exports = {
  getAllTicketsAction,
  addTicketAction,
  updateTicketAction
};
