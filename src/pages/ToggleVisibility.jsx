import styles from "./toggleVisibility.module.css";

const ToggleVisibility = ({
  index,
  isActive,
  setActiveVersion,
  title,
  text,
}) => {
  return (
    <div
      onClick={() => setActiveVersion(index)}
      onDoubleClick={() => setActiveVersion(false)}
    >
      <h3 className={styles.title}>{title}</h3>
      {isActive && <div className={styles.text}>{text}</div>}
    </div>
  );
};

export default ToggleVisibility;
