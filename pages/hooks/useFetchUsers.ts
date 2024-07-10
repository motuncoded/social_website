import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../query-keys";

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

const fetchUsers = async () => {
  const res = await fetch(USERS_URL);
  return res.json();
};

const useFetchUsers = () => {
  return useQuery({
    queryKey: [queryKeys.FETCH_USERS],
    queryFn: fetchUsers,
  });
};
export default useFetchUsers;
