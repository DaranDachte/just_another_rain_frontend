import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.wrapper}>
      <NavLink to="/home" className={styles.link}>Home</NavLink>
      <NavLink to="/about" className={styles.link}>About</NavLink>
      <NavLink to="/diary" className={styles.link}>Diary</NavLink>
      <NavLink to="/tests_and_news" className={styles.link}>Tests and News</NavLink>
      <NavLink to="/questions_and_answers" className={styles.link}>Questions and Answers</NavLink>
      <NavLink to="/gallery" className={styles.link}>Gallery</NavLink>{" "}
    </nav>
  );
};

export default Navigation;
