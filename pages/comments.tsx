import React from "react";
import { inter } from "../styles/fonts";
import { queryKeys } from "./queryKeys";
import { useQuery } from "@tanstack/react-query";

type Comment = {
  id: number;
  body: string;
  name: string;
  email: string;
};
const getComments = async () => {
  const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";
  const res = await fetch(`${COMMENTS_URL}`);
  return res.json();
};
function Comments() {
  const { data, error, isLoading } = useQuery({
    queryKey: [queryKeys.COMMENT],
    queryFn: getComments,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <p className="text-2xl">Loading comments...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center">
        <p className="text-2xl">Error: {error.message}</p>
      </div>
    );
  }

  return (
    <div
      className={`${inter.className} flex justify-center items-center flex-col bg-[var(--main-bg-color-default)] text-[var(--main-color)] py-4`}
    >
      <h1 className=" text-2xl py-4 font-bold">Comments</h1>
      <div className="grid gap-4 max-w-[700px] w-calc[100% - 2rem] max-sm:max-w-[325px]">
        {data.map((comment: Comment) => (
          <div
            key={comment.id}
            className=" text-[.85rem] bg-[var(--main-bg-color)] p-4 border border-[var(--main-border)]"
          >
            <h2 className="font-bold pb-2">{comment.name}</h2>
            <h3 className="font-bold pb-2">{comment.email}</h3>
            <h4>{comment.body}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comments;
