import styles from "./NewsItem.module.css";

const NewsItem = ({ country, language, description, link }) => {
  return (
    <a className={styles.wrapper} href={link} target="_blank" rel="noreferrer">
      <h3>
        {" "}
        <em>Origin of news:</em> {country}
      </h3>
      <h5>
        <em>Language of news:</em> {language}
      </h5>
      <p className={styles.description}> {description}</p>
    </a>
  );
};

export default NewsItem;
