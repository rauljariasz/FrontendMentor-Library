import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styles from "@styles/components/leftArrowButton.module.scss";

const arrowLeft = <FontAwesomeIcon icon={faArrowLeft} />;

const LeftArrowButton = () => {
  return <button className={`${styles.arrow}`}>{arrowLeft}</button>;
};

export default LeftArrowButton;
