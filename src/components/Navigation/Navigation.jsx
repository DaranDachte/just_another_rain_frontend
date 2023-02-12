import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.wrapper}>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/diary">Diary</NavLink>
      <NavLink to="/tests_and_news">Tests and News</NavLink>
      <NavLink to="/questions_and_answers">Questions and Answers</NavLink>
      <NavLink to="/gallery">Gallery</NavLink>{" "}
    </nav>
  );
};

export default Navigation;
