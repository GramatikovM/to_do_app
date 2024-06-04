import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <h1 className={styles.headerText}>Welcome to Note Editor</h1>
    </div>
  );
};

export default Header;
