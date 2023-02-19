import styles from "./Question.module.css";

const Question = ({
  text,
  name,
  isActive,
  setActiveIndex,
  answer,
  index,
}) => {
  return (
    <div onClick={() => setActiveIndex(index)} className={styles.wrapper}
    onDoubleClick={() => setActiveIndex(false)}>
      <h3 className={styles.question}>{text}</h3>
      {isActive && (
        <div>
          <h4>From {name}</h4>
          <p className={styles.answer}>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default Question;
