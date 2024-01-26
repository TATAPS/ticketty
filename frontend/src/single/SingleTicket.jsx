import "./SingleTicket.css";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams, Link } from "react-router-dom";
import Sidebar from '../UI/Sidebar.jsx';
import Navbar from "../UI/Navbar.jsx"
import { fetchTicket } from "../api/tickets.jsx";

function SingleTicket() {
  const [ticket, setTicket] = useState({})
  const [isEditing, setIsEditing] = useState(false);
  // const [error, setError] = useState(false)
  //////////////// TODO: EXTRACT PARAMS ID: default type: string //////////////////////
  let { ticketId } = useParams();

  const { isFetching, isError, data, error } = useQuery({
    queryKey: ['tickets', ticketId],
    queryFn: () => fetchTicket(ticketId),
  })
  const [isMenuOpen, setMenuOpen] = useState(true);

  const handleMenuClick = () => {
    setMenuOpen((prevState) => !prevState);
  };
  // console.log(isFetching, isError, data, error)
  ////////////TODO: IMPLEMENT useQuery TO FETCH DATA ///////////////
  // const queryClient = useQueryClient();
  // const fetchSingleTicket = async () => {
  //   const response = await fetch('/tickets/' + ticketId)
  //   if (!response.ok) {
  //     throw new Error('Network response was not ok')
  //   }
  //   return response.json()
  // }


  ///////////// ERROR HANDLER ///////////////
  if (isFetching) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  return (
    <div className='dashboard'>
      <Sidebar isOpen={isMenuOpen} onShow={handleMenuClick} />
      <div className="dashboard-container">
        <Navbar isOpen={isMenuOpen} onShow={handleMenuClick} />
        <div className="list-container">
          <div className="list-title">
            <h1>Single Ticket</h1>
            {/* <Tickets /> */}
            <div className="ticket-summary">
              <p>TicketId: {ticketId}</p>
              <div>
                <label>
                  <Link to={`/tickets/${ticketId}/edit`}>
                    <button>Update</button>
                  </Link>
                  <button
                  // onClick={() => handleDelete(/*ticketId*/)}
                  >Delete</button>
                </label>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleTicket

