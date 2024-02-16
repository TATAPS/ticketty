import { useQuery } from '@tanstack/react-query';
import { fetchEngineers } from '../src/api/engineers';

function useEngineers() {
  return useQuery({
    queryKey: ["engineers"],
    queryFn: async () => await fetchEngineers(),
  });
}

export default useEngineers
