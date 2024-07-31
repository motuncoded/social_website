import { CiMenuFries } from "react-icons/ci";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();
  const { name } = router.query;
  return (
    <nav className="m-auto p-4 flex justify-between items-center">
      <h1 className="text-[var(--main-color)] text-3xl">API </h1>
      <h2>{name ? <h2>Welcome, {name}!</h2> : null}</h2>
      <CiMenuFries size="20" />
    </nav>
  );
}
export default Navbar;
