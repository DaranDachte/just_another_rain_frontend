import styles from "./NewsItem.module.css";

const NewsItem = ({ country, language, description, link, CIcon, LIcon }) => {
    return (
        <a className={styles.wrapper} href={link} target="_blank" rel="noreferrer">
            <div className={styles.country}>
                <em>Origin of news:</em>
                <p className={styles.countryText}>{country}</p>
                <CIcon className={styles.countryFlag}/>
            </div>
            <div className={styles.language}>
                <em>Language of news:</em>
                <p className={styles.languageText}>{language}</p>
                <LIcon className={styles.languageFlag}/>
            </div>
            <p className={styles.description}>{description}</p>
        </a>
  );
};

export default NewsItem;
