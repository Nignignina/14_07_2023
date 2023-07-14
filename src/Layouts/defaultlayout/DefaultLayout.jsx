import styles from "./DefaultLayout.module.scss";
import Navbar from "@/Components/Navbar";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <div className={styles.DefaultLayout}>
        <Navbar />
        {children}
        <h2>Footer</h2>
      </div>
    </>
  );
};
export default DefaultLayout;
