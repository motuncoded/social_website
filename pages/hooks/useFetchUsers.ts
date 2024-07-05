import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "../queryKeys";

const fetchUsers = async () => {
  const USERS_URL = "https://jsonplaceholder.typicode.com/users";
  const res = await fetch(USERS_URL);
  return res.json();
};

const useFetchUsers = () => {
  return useQuery({
    queryKey: [QueryKeys.FETCH_USERS],
    queryFn: fetchUsers,
  });
};
export default useFetchUsers;
