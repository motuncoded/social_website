import { useState, useEffect } from "react";
import { inter, roboto_serif } from "../styles/fonts";

//Api
const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";



export default function Home() {
  type Post = {
    id: number;
    title: string;
    body: string;
    userId: number;
  };

  type Error = {
    message: string;
  };


  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await fetch(POSTS_URL);
      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }
      const posts = await response.json();
      setPosts(posts);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center min-h-screen items-center flex-col text-[var(--main-color)]">
        <p className="text-[1.85rem]">Loading Posts...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex justify-center items-center flex-col text-[var(--main-color)]">
        <p className="text-[1.5rem]">Error: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center flex-col bg-[var(--main-bg-color-default)] text-[var(--main-color)] ">
      <h1 className={`${inter.className} text-2xl py-4 font-bold`}>Post Feed</h1>
      <div className="grid gap-4 max-w-[700px] w-calc[100% - 2rem] max-sm:max-w-[325px]">

      {posts.map((post: Post) => {
        return (
          <div
            key={post.id}
            className={`${roboto_serif.className} text-[.85rem] bg-[var(--main-bg-color)] p-4 border border-[var(--main-border)]`}
          >
            <h2 className="font-bold mb-2">{post.title}</h2>
            <p className="">{post.body}</p>
          </div>
        );
      })}
      </div>
    </div>
  );
}
