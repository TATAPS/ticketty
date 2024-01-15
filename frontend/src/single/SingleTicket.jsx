import "./SingleTicket.css";
import { useState } from "react";
// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams, Link } from "react-router-dom";
import Sidebar from '../sidebar/Sidebar';
import Navbar from "../navbar/Navbar";

function SingleTicket() {
  const [ticket, setTicket] = useState({})
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState(false)
  //////////////// TODO: EXTRACT PARAMS ID: default type: string //////////////////////
  let { ticketId } = useParams();

  ////////////TODO: IMPLEMENT useQuery TO FETCH DATA ///////////////
  // const queryClient = useQueryClient();
  // const fetchSingleTicket = async () => {
  //   const response = await fetch('/tickets/' + ticketId)
  //   if (!response.ok) {
  //     throw new Error('Network response was not ok')
  //   }
  //   return response.json()
  // }

  //  const { isPending, isError, data, error } = useQuery({
  //    queryKey: ['ticket'],
  //    queryFn: fetchSingleTicket,
  //  })



  /////////////// TODO: DELETE TICKET HANDLE //////////////////

  // const deletePostMutation = useMutation({
  //   mutationFn: deletePost,
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: ['ticket']});
  //   }
  // });

  // const handleDelete = (id) => {
  //   deletePostMutation.mutate(id)
  // }

  ///////////// ERROR HANDLER ///////////////
  //  if (isPending) {
  //    return <span>Loading...</span>
  //  }

  //  if (isError) {
  //    return <span>Error: {error.message}</span>
  //  }

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

