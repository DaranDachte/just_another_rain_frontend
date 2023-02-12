import React, { useState } from "react";
import Navigation from "../components/Navigation";
import video1 from "../assets/videos/tooMuch.mp4";
import video2 from "../assets/videos/RainHolland.mp4";
import video3 from "../assets/videos/KyrgystanRain.mp4";
import video4 from "../assets/videos/AustraliaRain.mp4";
import video5 from "../assets/videos/GrowUp.mp4";
import styles from "./Diary.module.css";

import { ReactComponent as HollandFlag } from "../assets/img/holland_flag.svg";
import { ReactComponent as Tulip } from "../assets/img/tulip.svg";
import { ReactComponent as Sun } from "../assets/img/sun.svg";
import Footer from "../components/Footer/Footer";

export default function Diary() {
  const [isAnimation, setIsAnimation] = useState(false);
  const [isScrollVisible, setIsScrollVisible] = useState(false);

  const onStartHandler = (event) => {
    if (event.target.currentTime < 1) {
      setIsAnimation(true);
    }
  };

  const onStopHandler = () => {
    setIsAnimation(false);
  };

  const onEndedHandler = (e) => {
    setIsScrollVisible(true);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <Navigation />

        <div className={styles.diaryVideoWrapper}>
          <Sun className={styles.sun} />
          <video
            className={styles.diaryVideo}
            src={video1}
            controls
            onEnded={onEndedHandler}
          />

          {/* {isScrollVisible && <ScrollDown className={styles.scrollDown} />} */}
        </div>
        <div className={styles.diaryVideoWrapper}>
          <HollandFlag
            className={`${styles.hollandFlag} ${
              isAnimation ? styles.hollandFlagAppearAnimation : ""
            }`}
          />
          {/* <Tulip
            className={`${styles.tulip} ${
              isAnimation ? styles.tulipAnimation : ""
            }`}
          /> */}
          <video
            // onPlay={onStartHandler}
            // onPause={onStopHandler}
            className={styles.diaryVideo}
            src={video2}
            controls
            // onEnded={onEndedHandler}
          />
          {/* {isScrollVisible && <ScrollDown className={styles.scrollDown} />} */}
        </div>
        <div className={styles.diaryVideoWrapper}>
          <video
            className={styles.diaryVideo}
            src={video3}
            controls
            onEnded={onEndedHandler}
          />
          {/* {isScrollVisible && <ScrollDown className={styles.scrollDown} />} */}
        </div>
        <div className={styles.diaryVideoWrapper}>
          <video
            className={styles.diaryVideo}
            src={video4}
            controls
            onEnded={onEndedHandler}
          />
          {/* {isScrollVisible && <ScrollDown className={styles.scrollDown} />} */}
        </div>
        <div className={styles.diaryVideoWrapper}>
          <video className={styles.diaryVideo} src={video5} controls />
        </div>
        <Footer />
      </div>
    </>
  );
}
