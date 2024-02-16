import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { fetchTicket } from '../src/api/tickets';

function useCurrentTicket(ticketId) {
  return useQuery({
    queryKey: ['tickets', (ticketId)],
    queryFn: () => fetchTicket(ticketId),
    // onCompleted: () => {
    //   const initialTicket = ticketData[0] || {};
    //   setTicket(initialTicket)
    // },
  });
}

export default useCurrentTicket
