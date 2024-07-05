import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "../queryKeys"; // Adjust the import path as necessary

const getComments = async () => {
  const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";
  const res = await fetch(COMMENTS_URL);
  return res.json();
};

const useFetchComments = () => {
  return useQuery({
    queryKey: [QueryKeys.FETCH_COMMENTS],
    queryFn: getComments,
  });
};
export default useFetchComments;
