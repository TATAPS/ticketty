import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchTicket } from '../src/api/tickets'

function useTicket(ticketId) {
  return useQuery({
    queryKey: ["tickets", ticketId],
    queryFn: () => fetchTicket(ticketId),
  })
}

export default useTicket
