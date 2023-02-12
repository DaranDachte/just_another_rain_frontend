import { Link } from "react-router-dom";
import styles from "./Notfound.module.css";
import mist from "../assets/videos/mist.mp4";
export default function Notfoundpage() {
  return (
    <>
      <video className={styles.video} src={mist} autoPlay muted loop></video>
      <div className={styles.wrapper}>
        <p className={styles.flicker}>
          This page does not exist. Go <Link to="/home">Home</Link>{" "}
        </p>
      </div>
    </>
  );
}
