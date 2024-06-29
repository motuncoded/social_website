import { useInfiniteQuery } from "@tanstack/react-query";
import { queryKeys } from "../queryKeys";

const getUsers = async ({ pageParam }: { pageParam: number }) => {
  const USERS_URL = `https://jsonplaceholder.typicode.com/users?_page=${pageParam}`;
  const res = await fetch(USERS_URL);
  return res.json();
};

export const useFetchUsers = () => {
  return useInfiniteQuery({
    queryKey: [queryKeys.USER],
    queryFn: getUsers,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      return lastPage;
    },
  });
};
