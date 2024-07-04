import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../queryKeys";
const NEWS_API_KEY = "9bb1ce4f63d74db08d7433bd4bfd17a5";
// Adjust the import path as necessary

const NEWS_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`;

async function getNews(): Promise<any> {
  try {
    const response = await fetch(NEWS_URL);
    return response.json();
  } catch (error) {
    console.error("Error fetching news:", error);
    return { error: "Failed to fetch news" };
  }
}

export const useFetchNews = () => {
  return useQuery({
    queryKey: [queryKeys.FETCH_NEWS],
    queryFn: getNews,
  });
};
