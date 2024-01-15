import "./SingleTicket.css";
import { useState, useReducer } from "react";
import { useParams, Link } from "react-router-dom";
import Sidebar from '../sidebar/Sidebar';
import Navbar from "../navbar/Navbar";

function SingleTicket() {
  const [ticket, setTicket] = useState({})
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState(false)


  //////////////// TODO: EXTRACT PARAMS ID: default type: string //////////////////////
  let { ticketId } = useParams();

  /////////////// TODO: FETCH SINGLE ticket ////////////////////

  /////////////// TODO: DELETE TICKET HANDLE //////////////////
  // const handleDelete = async (id) => {
  //   try {
  //     await axios.delete("http://localhost:8800/tickets"+id);
  //     /**navigate to the main page */
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  return (
    < div className='single' >
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="singlelistContainer">
          {/* <div className="listTitle"></div> */}
          {/* <Tickets /> */}
          <div className="ticketSummary">
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
    </div >

  )
}

export default SingleTicket

