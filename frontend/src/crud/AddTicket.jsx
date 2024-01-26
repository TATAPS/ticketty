import './AddTicket.css';
import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addTicket } from '../api/tickets';
import TicketForm from './TicketForm.jsx';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar.jsx';
import Navbar from '../navbar/Navbar.jsx';


export default function AddTicket() {
  const navigate = useNavigate()
  const queryClient = useQueryClient();
  const addTicketMutation = useMutation({
    mutationFn: addTicket,
    onSuccess: (newTicket) => {
      queryClient.invalidateQueries({ queryKey: ['tickets'], newTicket });
    },
  })
  const [isMenuOpen, setMenuOpen] = useState(true);

  const handleMenuClick = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const handleAddTicket = (ticket) => {
    addTicketMutation.mutate({
      ...ticket
    })
    navigate("/");
  }


  return (
    <div className='dashboard'>
      <Sidebar isOpen={isMenuOpen} onShow={handleMenuClick} />
      <div className="dashboard-container">
        <Navbar isOpen={isMenuOpen} onShow={handleMenuClick} />
        <div className="list-container">
          <div className="ticket-details">
            <h1>New Ticket</h1>
            <TicketForm onSubmit={handleAddTicket} initialValue={{}} />
          </div>
        </div>
      </div>
    </div>
  );
}


