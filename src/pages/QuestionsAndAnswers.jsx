import {useState} from "react";
import Form from "../components/Form";
import QuestionList from "../components/QuestionList";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer/Footer";
import styles from "./QuestionsAndAnswers.module.css";

const QuestionsAndAnswers = () => {
    const [clicked, setClicked] = useState(false);

    return (
        <div className={styles.wrapper}>
            <Navigation/>
            <div className={styles.flex}>
                <QuestionList/>
                <div>
                    <button className={styles.askButton}
                            onClick={() => setClicked(true)}
                            onDoubleClick={() => setClicked(false)}
                    >
                        Ask a question
                    </button>
                    {clicked && <Form/>}
                    <div className={styles.attention}>
                        <p>
                            Warning! We do not store your data, nor do we pass it on to
                            individuals or organizations. Your name is only needed so that we know
                            how to contact you correctly.
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default QuestionsAndAnswers;
