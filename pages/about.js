import styles from "../styles/Layout.module.css";
import Meta from "./components/Meta";

const about = () => {
  return (
    <div>
      <Meta title="About" />
      <h2 className={styles.title}>About</h2>
    </div>
  );
};

export default about;
