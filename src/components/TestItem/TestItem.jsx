import styles from "./TestItem.module.css";

const TestItem = ({title, description, link}) => {
    return (
        <div className={styles.wrapper}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <a className={styles.link} href={link} target="_blank" rel="noreferrer">Pass the test</a>
        </div>
    );

};

export default TestItem;
