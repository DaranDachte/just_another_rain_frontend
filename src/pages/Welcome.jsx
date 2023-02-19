import styles from "./Welcome.module.css";
import { useNavigate } from "react-router-dom";
import video from "../assets/videos/Title.webm";
import { useRef, useEffect } from "react";

const Welcome = () => {
  const navigate = useNavigate();

  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }

    const tmp = audioRef.current;

    return () => tmp.pause();
  }, []);

  const delay = (func, time) =>
    setTimeout(() => {
      func();
    }, time);

  const naviateToHome = () => navigate("/home");

  const onAnimationEndHandler = () => delay(naviateToHome, 3000);

  return (
    <div>
      <div className={styles["video-bg"]}>
        <video src={video} muted autoPlay loop></video>
        <h1 className={styles.welcome} onAnimationEnd={onAnimationEndHandler}>
          <span>J</span> <span>U</span> <span>S</span> <span>T</span>{" "}
          <span> </span> <span>A</span> <span>N</span> <span>O</span>{" "}
          <span>T</span> <span>H</span> <span>E</span> <span>R</span>{" "}
          <span></span> <span>R</span> <span>A</span> <span>I</span>{" "}
          <span>N</span>
        </h1>
      </div>
      <audio ref={audioRef}>
        <source src="../assets/audios/liven_groza_grom.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default Welcome;
