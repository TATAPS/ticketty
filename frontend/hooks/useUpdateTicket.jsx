import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTicket } from "../src/api/tickets";
import { useNavigate } from "react-router-dom";

function useUpdateTicket(ticketId) {
  const queryClient = useQueryClient();
  // const navigate = useNavigate();

  return useMutation({
    mutationFn: updateTicket,
    onSuccess: (updatedTicket) => {
      queryClient.setQueryData({ queryKey: ["tickets", ticketId], ...updatedTicket });
      queryClient.invalidateQueries({ queryKey: ["tickets"] });
      // queryClient.invalidateQueries({ queryKey: ["ticketTitle"] });
      // navigate(`/tickets/${ticketId}`); // Redirect to ticket details page after update
    },
  });
}

export default useUpdateTicket;
