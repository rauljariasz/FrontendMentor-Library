import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import styles from "@styles/components/liveButton.module.scss";

const faheart = <FontAwesomeIcon icon={faEye} />;

const LiveButton = () => {
  return <button className={`${styles.arrow}`}>{faheart}</button>;
};

export default LiveButton;
