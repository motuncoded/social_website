import React from "react";
import Image from "next/image";
import { useFetchNews } from "./hooks/useFetchNews";
import { inter } from "../styles/fonts";

interface NewsProp {
  id: number;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  name: string;
}
export default function News() {
  const { data: news, isLoading, error } = useFetchNews();

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
      className={`${inter.className} flex justify-center items-center flex-col bg-[var(--main-bg-color-default)] text-[var(--main-color)] py-4`}
    >
      <h2 className="text-4xl text-white ">Daily News</h2>
      <div className="grid gap-4 max-w-[1200px] w-calc[100% - 2rem] max-sm:max-w-[325px]">
        {news.articles.map((article: NewsProp) => {
          return (
            <div key={article.id} className="flex justify-between">
              <div>
                <h2 className="text-gray-900 text-2xl">{article.name}</h2>
                <h3 className="text-3xl">{article.title}</h3>
                <a href={article.url} target="_blank" rel="noreferrer">
                  Read more
                </a>
                <div>
                  <Image
                    src={article.urlToImage}
                    width={500}
                    height={500}
                    alt={article.name}
                  />
                </div>
                <p>{article.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
