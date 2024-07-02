import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../queryKeys";



const fetchUsers = async () => {

  const USERS_URL = "https://jsonplaceholder.typicode.com/users";
  const res = await fetch(USERS_URL);
  return res.json();
};

export const useFetchUsers = () => {
  return useQuery({


    queryKey: [queryKeys.FETCH_USERS],
    queryFn: fetchUsers,

  });
};
