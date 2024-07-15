import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../query-keys";

const getComments = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  return res.json();
};

const useFetchComments = () => {
  return useQuery({
    queryKey: [queryKeys.FETCH_COMMENTS],
    queryFn: getComments,
  });
};
export default useFetchComments;
