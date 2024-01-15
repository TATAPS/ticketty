import "./SingleTicket.css"
import { useState, useReducer } from "react";
import { useParams, Link } from "react-router-dom"
import ticketsReducer from "./ticketsReducer";
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import Sidebar from '../sidebar/Sidebar';
import Navbar from "../navbar/Navbar";

function SingleTicket() {
  const [ticket, setTicket] = useState({})
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState(false)


  //////////////// TODO: EXTRACT PARAMS ID////////////////////
  let { ticketId } = useParams();

  /////////////// TODO: FETCH SINGLE ticket ////////////////////
  // useEffect(() => {
  //   const fetchSingleTicket = async () => {
  //     try {
  //       const res = await axios.get(`http://localhost:8800/tickets/${ticketId}`);
  //       setTicket(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchSingleBook();
  // }, []);

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
                <button>Delete</button>
              </label>

            </div>
          </div>
        </div>
      </div>
    </div >

  )
}

export default SingleTicket

