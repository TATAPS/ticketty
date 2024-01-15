export default function ticketsReducer(tickets, action) {
  switch (action.type) {
    case 'added': {
      return [
        ...tickets,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case 'changed': {
      return tickets.map((t) => {
        if (t.id === action.ticket.id) {
          return action.tickets;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tickets.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
