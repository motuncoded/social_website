import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../queryKeys"; // Adjust the import path as necessary

const getComments = async () => {
  const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";
  const res = await fetch(COMMENTS_URL);
  return res.json();
};

export const useFetchComments = () => {
  return useQuery({
    queryKey: [queryKeys.COMMENT], 
    queryFn: getComments,
  });
};
