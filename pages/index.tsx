import { useState, useEffect, useRef } from "react";
import { inter, roboto_serif } from "../styles/fonts";

//Api
const POSTS_URL =
  "https://jsonplaceholder.typicode.com/posts?_per_page=12&_page=";

// Type definitions
type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

type Error = {
  message: string;
};

export default function Home() {
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

  return (
    <div
      className="flex justify-center items-center flex-col bg-[var(--main-bg-color-default)] text-[var(--main-color)] py-4"
      ref={scrollContainerRef}
    >
      <h1 className={`${inter.className} text-2xl py-4 font-bold`}>
        Post Feed
      </h1>
      <div className="grid gap-4 max-w-[700px] w-calc[100% - 2rem] max-sm:max-w-[325px]">
        {posts &&
          posts.length > 0 &&
          posts.map((post: Post) => {
            return (
              <div
                key={post.id}
                className={`${roboto_serif.className} text-[.85rem] bg-[var(--main-bg-color)] p-4 border border-[var(--main-border)]`}
              >
                <h2 className="font-bold mb-2">
                  {post.id} {post.title}
                </h2>
                <p className="">{post.body}</p>
              </div>
            );
          })}
      </div>
      {!hasMore && (
        <div className="py-4">
          <p className="text-[1rem] text-[var(--main-color)] ">Loading...</p>
        </div>
      )}
    </div>
  );
}
