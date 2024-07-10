import React from "react";

import { useState, useEffect, useRef } from "react";
import { inter, roboto_serif } from "../styles/fonts";
import { IoHeartOutline, IoHeart } from "react-icons/io5";
import { FaRegComment } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { TbDots } from "react-icons/tb";

//Api
const POSTS_URL = "https://jsonplaceholder.typicode.com/posts?_page=";

// Type definitions
type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
  likes: number;
};

type Error = {
  message: string;
};

function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const fetchPosts = async () => {
    try {
      const response = await fetch(`${POSTS_URL}${page}`);
      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }
      const posts = await response.json();
      setPosts((prev) => [...prev, ...posts]);
      if (posts.length > 10) {
        setHasMore(true);
      } else {
        setHasMore(false);
      }
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      fetchPosts();
    }, 1000);
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      console.log("top", document.body.scrollTop);
      console.log("height", document.body.scrollHeight);
      if (
        window.innerHeight + document.body.scrollTop + 1 >=
        document.body.scrollHeight
      ) {
      }
      if (!hasMore) {
        setPage((prev) => prev + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  // if (loading) {
  //   return (
  //     <div className="flex justify-center min-h-screen items-center flex-col text-[var(--main-color)]">
  //       <p className="text-[1.85rem]">Loading Posts...</p>
  //     </div>
  //   );
  // }
  if (error) {
    return (
      <div className="flex justify-center items-center flex-col text-[var(--main-color)]">
        <p className="text-[1.5rem]">Error: {error.message}</p>
      </div>
    );
  }

  const handleLikeClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    post: Post,
  ) => {
    event.preventDefault();
    setPosts((prevPosts) =>
      prevPosts.map((p) =>
        p.id === post.id ? { ...p, likes: (p.likes || 0) + 1 } : p,
      ),
    );
  };
  return (
    <div
      className="flex justify-center items-center flex-col bg-[var(--main-bg-color-default)] text-[var(--main-color)] py-4"
      ref={scrollContainerRef}
    >
      <h1 className={`${inter.className} text-2xl py-4 font-bold`}>
        Post Feed
      </h1>
      <div className="grid gap-4 max-w-[700px] w-calc[100% - 2rem] max-sm:max-w-[325px]">
        {posts.map((post: Post) => {
          return (
            <div
              key={post.id}
              className={`${roboto_serif.className} text-[.85rem] bg-[var(--main-bg-color)] p-4 border border-[var(--main-border)]`}
            >
              <div className="flex justify-between items-center mb-2">
                <h2 className="font-bold">{post.title}</h2>
                <TbDots size="18" />
              </div>
              <p className="">{post.body}</p>
              <div className="flex justify-between items-center gap-2 mt-2">
                <div className="flex flex-row items-center justify-items-center">
                  <button
                    type="button"
                    onClick={(event) => handleLikeClick(event, post)}
                  >
                    <IoHeartOutline size="18" />{" "}
                  </button>
                  {post.likes === 0 ? (
                    <p className="none pl-2 text-[transparent]">{post.likes}</p>
                  ) : (
                    <p className="pl-2 text-[.95rem]">{post.likes}</p>
                  )}
                </div>
                <button type="button">
                  <FaRegComment />
                </button>
                <button type="button">
                  <CiShare2 />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {!hasMore && (
        <div className="py-4">
          <p className="text-[1rem] text-[var(--main-color)]">loading</p>
        </div>
      )}
    </div>
  );
}
export default PostsPage;
