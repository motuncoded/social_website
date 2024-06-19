import { useQuery } from "@tanstack/react-query";

const getComments = async () => {
  const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";

  const res = await fetch(`${COMMENTS_URL}`);
  return res.json();
};
export const useComments = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["comments"],
    queryFn: getComments, // Ensure getComments is imported or defined in this scope
  });

  return { data, error, isLoading };
};
