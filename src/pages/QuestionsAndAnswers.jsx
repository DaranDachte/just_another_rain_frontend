import { useState } from "react";
import Form from "../components/Form";
import QuestionList from "../components/QuestionList";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer/Footer";
import styles from "./QuestionsAndAnswers.module.css";

const FindYourRain = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <>
    <div className={styles.wrapper}>
      <Navigation />
      <QuestionList />
      <div>
        <button className={styles.askButton}
          onClick={() => setClicked(true)}
          onDoubleClick={() => setClicked(false)}
        >
          Ask a question
        </button>
        {clicked && <Form />}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default FindYourRain;
