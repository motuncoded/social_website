import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../query-keys";

const getComments = async () => {
  const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";
  const res = await fetch(COMMENTS_URL);
  return res.json();
};

const useFetchComments = () => {
  return useQuery({
    queryKey: [queryKeys.FETCH_COMMENTS],
    queryFn: getComments,
  });
};
export default useFetchComments;
