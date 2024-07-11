import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../query-keys";

const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

const useFetchUsers = () => {
  return useQuery({
    queryKey: [queryKeys.FETCH_USERS],
    queryFn: fetchUsers,
  });
};
export default useFetchUsers;
