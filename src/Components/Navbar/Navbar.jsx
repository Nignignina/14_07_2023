import styles from "./Navbar.module.scss";
import { AiTwotoneHome } from "react-icons/ai";
import Link from "next/link";
import { AuthContext } from "@/pages/_app";
import { useContext } from "react";
import { useState } from "react";

// function reducer

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const userName = { user } ? user.name : "hola";
  const [inputText, setInputText] = useState("");
  console.log(userName);
  const onHandleChange = (event) => {
    setInputText(event.target.value);
  };

  const setnewName = (e) => {
    e.preventDefault();
  };
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
          <form action="" onSubmit={setnewName}>
            <input
              type="text"
              placeholder="possibly a name"
              value={inputText}
              onChange={onHandleChange}
            />
            <input type="submit" />
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
