import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../query-keys";

const NEWS_API_KEY = "9bb1ce4f63d74db08d7433bd4bfd17a5";

const NEWS_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`;

async function getNews(): Promise<any> {
  const response = await fetch(NEWS_URL);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

const useFetchNews = () => {
  return useQuery({
    queryKey: [queryKeys.FETCH_NEWS],
    queryFn: getNews,
  });
};
export default useFetchNews;
