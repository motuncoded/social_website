import { CiMenuFries } from "react-icons/ci";
import { useContext, useEffect } from "react";
import { UserContext,} from "../contexts/UserContext";

function Navbar() {


  return (
    <nav className="m-auto p-4 flex justify-between items-center">
      <h1 className="text-[var(--main-color)] text-3xl">API </h1>
      <div>
        <p className="text-white"></p>
      </div>
      <CiMenuFries size="20" />
    </nav>
  );
}
export default Navbar;
