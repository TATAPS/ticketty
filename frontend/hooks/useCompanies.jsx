import { useQuery } from '@tanstack/react-query';
import { fetchCompanies } from '../src/api/companies';

function useCompanies() {
  return useQuery({
    queryKey: ["companies"],
    queryFn: async () => await fetchCompanies(),
  });
}

export default useCompanies
