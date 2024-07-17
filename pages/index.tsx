import Link from "next/link";

function HomePage() {
  return (
    <div>
      <div className="text-6xl flex justify-center items-center flex-col min-h-[80vh] ">
        <h2 className="">JSON Placeholder API</h2>
        <ul className="text-2xl flex m-2 ">
          <li className="mx-6 list-disc">
            <Link href="/comments">Comments</Link>
          </li>
          <li className="mx-6 list-disc">
            <Link href="/posts">Posts</Link>
          </li>
          <li className="mx-6 list-disc">
            <Link href="/users">Users</Link>
          </li>
          <li className="mx-6 list-disc">
            <Link href="/news">News</Link>
          </li>
        </ul>
        <div className="mt-4 flex">
          <Link
            className="text-2xl 
         hover:underline decoration-[var(--main-color)] mr-4"
            href="/login"
          >
            Sign in
          </Link>
          <Link
            className="text-2xl 
         hover:underline decoration-[var(--main-color)] ml-4"
            href="/signup"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
