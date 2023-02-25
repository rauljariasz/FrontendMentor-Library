import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styles from "@styles/components/arrowButton.module.scss";

const arrowRight = <FontAwesomeIcon icon={faArrowRight} />;

const ArrowButton = () => {
  return <button className={`${styles.arrow}`}>{arrowRight}</button>;
};

export default ArrowButton;
