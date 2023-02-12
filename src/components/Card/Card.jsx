import styles from "./Card.module.css";

const Card = ({ text, photo, index, onClickHandler, isActive }) => {
  return (
    <div
      className={isActive ? styles.popup : styles.wrapper}
      onClick={(e) => {
        e.stopPropagation();
        onClickHandler(index);
      }}
      
    >
      <div className={isActive ? styles.photo_active : styles.photo}>
        <img src={photo} alt="" className={styles.photo_img} />
      </div>
      <div>
        <p className={styles.pCard}>{isActive ? text : text.slice(0, 101) + "..."}</p>
      </div>
    </div>
  );
};

export default Card;