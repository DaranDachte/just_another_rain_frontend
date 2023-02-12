import React from "react";
// import video from "../img/rainbow.mp4";
import styles from "./Home.module.css";
import Cloud from "../components/Cloud";
import rainbow from "../assets/videos/rainbow.mp4";
export default function Home() {
  return (
    <>
      <video className={styles.video} src={rainbow} autoPlay muted loop></video>
      <div className={styles.wrapper}>
        <div className={styles.cloudList}>
          <div className={styles.position}>
            <Cloud text="About" url="/about" />
          </div>
          <div className={styles.position}>
            <Cloud text="Diary" url="/diary" />
          </div>
          <div className={styles.position}>
            <Cloud text="Tests and News" url="/tests_and_News" />
          </div>
          <div className={styles.position}>
            <Cloud text="Questions and Answers" url="/questions_and_answers" />
          </div>
          <div className={styles.position}>
            <Cloud text="Gallery" url="/gallery" />
          </div>
        </div>
        {/* <video src={video} autoPlay muted loop id="myVideo"></video> */}
      </div>
    </>
  );
}
