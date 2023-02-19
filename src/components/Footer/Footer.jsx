import styles from "./Footer.module.css";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { BiDonateHeart } from "react-icons/bi";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
        <p className={styles.flicker}>Created by Daran Dachte</p>
        <a
          className={styles.link}
          href="https://github.com/DaranDachte"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub />

          <p className={styles.flicker}>GitHub</p>
        </a>
        <a href="mailto:darandachte@gmail.com" className={styles.link}>
          <AiOutlineMail />
          <p className={styles.flicker}>Send Email</p>
        </a>
        <a
          href="https://www.paypal.com/donate/?hosted_button_id=FE7R74MJZ7PJU"
          className={styles.link}
          rel="noreferrer"
          target="_blank"
        >
          <BiDonateHeart />
          <p className={styles.flicker}>Donate</p>
        </a>
    </div>
  );
};

export default Footer;
