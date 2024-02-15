import React from 'react'
import { addTicket } from '../src/api/tickets';
import { useMutation, useQueryClient } from '@tanstack/react-query';

function useAddTicket() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addTicket,
    onSuccess: (newTicket) => {
      queryClient.invalidateQueries({ queryKey: ["tickets"], newTicket });
    },
  });
}

export default useAddTicket
