import Link from "next/link";

export default function Home() {
  return (
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
    </div>
  );
}
