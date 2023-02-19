import { Link } from "react-router-dom";
import styles from "./Notfound.module.css";
import mist from "../assets/videos/mist.webm";
export default function Notfoundpage() {
  return (
    <div className={styles.wrapper}>
      <video className={styles.video} src={mist} autoPlay muted loop></video>
        <p className={styles.flicker}>
          This page does not exist. Go <Link to="/home">Home</Link>{" "}
        </p>
    </div>
  );
}
