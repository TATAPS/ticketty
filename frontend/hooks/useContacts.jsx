import { fetchCompanyContacts } from '../src/api/companies';
import { useQuery } from '@tanstack/react-query';

function useAddContact(ticket) {
  return useQuery({
    queryKey: ["contacts", ticket?.company_id],
    enabled: ticket?.company_id !== "",
    queryFn: async () => await fetchCompanyContacts(ticket?.company_id),
  });
}

export default useAddContact
