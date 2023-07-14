import styles from "./Navbar.module.scss";
import { AiTwotoneHome } from "react-icons/ai";
import Link from "next/link";

const Navbar = () => {
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
          <li>
            {" "}
            <Link href="/login"> Login</Link>
          </li>
        </ul>

        <div className={styles.Navbar_icons}>
          <p>
            {" "}
            <Link href="/">
              <AiTwotoneHome />
            </Link>
          </p>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
