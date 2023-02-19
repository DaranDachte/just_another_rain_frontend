import styles from "./TestItem.module.css";

const TestItem = ({title, description, link, Icon}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <Icon className={styles.flag}/>
                <h3>{title}</h3>
            </div>
            <p className={styles.description}>{description}</p>
            <a className={styles.link} href={link} target="_blank" rel="noreferrer">Pass the test</a>
        </div>
    );

};

export default TestItem;
