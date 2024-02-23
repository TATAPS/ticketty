import { useQuery } from "@tanstack/react-query";
import { fetchPriorities } from "../src/api/priorities";

function usePriorities() {
  return useQuery({
    queryKey: ["priorities"],
    queryFn: async () => await fetchPriorities(),
  });
}

export default usePriorities;
