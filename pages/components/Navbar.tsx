import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

export default function Navbar() {
  return (
    <nav className="m-auto p-4 flex justify-between items-center">
      <h1 className="text-[var(--main-color)] text-3xl">API </h1>
      <CiMenuFries size="20" />
    </nav>
  );
}
