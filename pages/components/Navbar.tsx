import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="m-auto p-4 flex justify-between items-center">
      <h1 className="text-[var(--main-color)] text-3xl">API </h1>
      <ul className="flex">
        <li className="px-6">
          <Link href="/commenting">Comments</Link>
        </li>
        <li className="px-6">
          <Link href="/posting">Posts</Link>
        </li>
        <li className="pl-6">
          <Link href="/users">Users</Link>
        </li>
      </ul>
    </nav>
  );
}