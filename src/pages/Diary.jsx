import React from "react";
import Navigation from "../components/Navigation";
import video1 from "../assets/videos/tooMuch.webm";
import video2 from "../assets/videos/RainHolland.webm";
import video3 from "../assets/videos/KyrgystanRain.webm";
import video4 from "../assets/videos/AustraliaRain.webm";
import video5 from "../assets/videos/GrowUp.webm";
import styles from "./Diary.module.css";
import { ReactComponent as Sun } from "../assets/img/sun.svg";
import Footer from "../components/Footer/Footer";

export default function Diary() {

  return (
      <div className={styles.wrapper}>
        <Navigation />

        <div className={styles.diaryVideoWrapper}>
          <Sun className={styles.sun} />
          <video
            className={styles.diaryVideo}
            src={video1}
            controls
          />
        </div>
        <div className={styles.diaryVideoWrapper}>
          <video
            className={styles.diaryVideo}
            src={video2}
            controls
          />
        </div>
        <div className={styles.diaryVideoWrapper}>
          <video
            className={styles.diaryVideo}
            src={video3}
            controls
          />
        </div>
        <div className={styles.diaryVideoWrapper}>
          <video
            className={styles.diaryVideo}
            src={video4}
            controls
          />
        </div>
        <div className={styles.diaryVideoWrapper}>
          <video className={styles.diaryVideo} src={video5} controls />
        </div>
        <Footer />
      </div>
  );
}
