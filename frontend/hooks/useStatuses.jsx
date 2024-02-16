import { useQuery } from '@tanstack/react-query';
import { fetchStatuses } from '../src/api/statuses';

function useStatuses() {
  return useQuery({
    queryKey: ["statuses"],
    queryFn: async () => await fetchStatuses(),
  });
}

export default useStatuses
