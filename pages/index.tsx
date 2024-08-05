import Link from "next/link";

function HomePage() {
  return (
    <div>
      <div className="flex justify-center items-center flex-col min-h-[80vh] p-2  ">
        <h2 className="text-4xl">JSON Placeholder API</h2>
        <ul className="text-2xl flex m-2 max-sm:grid max-sm:grid-cols-2">
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
        <div className=" mt-10 text-2xl flex max-sm:flex-col  ">
          <Link
            className="text-2xl mx-4
         hover:underline decoration-[var(--main-color)]"
            href="/signin"
          >
            Sign in
          </Link>
          <Link
            className="text-2xl mx-4
         hover:underline decoration-[var(--main-color)]"
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
