import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="m-auto p-4 flex justify-between items-center">
      <h1 className="text-[var(--main-color)] text-3xl">API </h1>
      <ul className="flex">
        <li className="px-6">
          <Link href="/comments">Comments</Link>
        </li>
        <li className="px-6">
          <Link href="/posts">Posts</Link>
        </li>
        <li className="pl-6">
          <Link href="/users">Users</Link>
        </li>
      </ul>
    </nav>
  );
}
