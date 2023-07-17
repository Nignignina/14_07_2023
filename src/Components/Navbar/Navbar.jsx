import styles from "./Navbar.module.scss";
import { AiTwotoneHome } from "react-icons/ai";
import Link from "next/link";
import { AuthContext } from "@/pages";
import { useContext, useState } from "react";
import { useReducer } from "react";

// const initialArg = {username : ""};
function reducer(state, action) {}

// const [state, dispatch] = useReducer(reducer, { name: "" });

const Navbar = () => {
  const userData = useContext(AuthContext);

  function handleSubmit() {
    e.preventDefault();
    dispatch({ type: "" });
  }

  // const user [currentUser, setCurrentUser] = useState({showName})

  return (
    <>
      <nav className={styles.Navbar}>
        <div className={`${styles.Navbar_logo} column-1`}> LOGO </div>

        <ul className={`${styles.menu__items} column-4`}>
          <li>
            {" "}
            <Link href="/locations">locations</Link>
          </li>

          <li>
            <Link href="/about">about</Link>
          </li>

          <li>
            {" "}
            <Link href="/contacts"> contacts</Link>
          </li>
        </ul>

        <div className={styles.Navbar_icons}>
          {" "}
          <Link href="/">
            <AiTwotoneHome />
          </Link>
          <Link href="/login"> LOG IN </Link>
          <form action="">
            <input type="text" />
            <input type="submit" />
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
