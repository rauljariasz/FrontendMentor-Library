import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styles from "@styles/components/githubButton.module.scss";

const falink = <FontAwesomeIcon icon={faLink} />;

const ghButton = () => {
  return <button className={`${styles.arrow}`}>{falink}</button>;
};

export default ghButton;
