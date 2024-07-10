import React from "react";
import Image from "next/image";
import useFetchNews from "./hooks/useFetchNews";
import { poppins } from "../styles/fonts";

interface NewsProp {
  id: number;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  name: string;
}
function NewsPage() {
  const { data: news, isLoading, error } = useFetchNews();
  console.log(news);
  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <p>Loading News articles...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center">
        <p>Error: {error?.message || "An unexpected error occurred."}</p>
      </div>
    );
  }

  return (
    <div
      className={`${poppins.className} flex justify-center items-center flex-col bg-[var(--main-bg-color-default)] text-[var(--main-color)] py-4`}
    >
      <h2 className="text-4xl text-white ">Daily News</h2>
      <div className="grid gap-4 max-w-[500px] w-calc[100% - 2rem] max-sm:max-w-[325px]">
        {news.articles.map((article: NewsProp) => {
          return (
            <div key={article.id} className="flex justify-between my-2">
              <div>
                <h4 className="my-2 bg-gray-100 text-[var(--main-bg-color)] p-2">
                  <a href={article.url} target="_blank" rel="noreferrer">
                    {article.title}
                  </a>
                </h4>

                <p>{article.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="grid gap-4 max-w-[500px] w-calc[100% - 2rem] max-sm:max-w-[325px]">
        {news.articles.map((article: NewsProp) => {
          return (
            <div key={article.id} className="flex justify-between my-2">
              <div>
                <h4 className="my-2 bg-gray-100 text-[var(--main-bg-color)] p-2">
                  <a href={article.url} target="_blank" rel="noreferrer">
                    {article.title}
                  </a>
                </h4>

                <p>{article.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default NewsPage;
