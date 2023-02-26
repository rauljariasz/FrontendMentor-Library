import React from 'react';
import Image from 'next/image';

/* Assets */
import thanYou from "@images/3-interactive-rating-component/illustration-thank-you.svg";
import styles from "@styles/3-interactive-rating-component/TyCard.module.scss";

const TyCard = ({calificacion}) => {
    if (calificacion > 0) {
        return (
        <div className={`${styles.card} ${styles.tyCard} ${styles.slide_in_blurred_top}`}>
          <figure className={styles["tyCard__figure"]}>
            <Image src={thanYou} alt="Thank you!" width="auto" height="auto" />
          </figure>
          <div className={styles["tyCard__selected"]}>
            <p className={styles["tyCard__selected-p"]}>You selected {calificacion} out of 5</p>
          </div>
          <div className={styles["tyCard__text"]}>
            <p className={styles["tyCard__text-ty"]}>Thank you!</p>
            <p className={styles["tyCard__text-p"]}>We appreciate you taking the time to give a rating. If you ever need more support, don&apos;t hesitate to get in touch!</p>
          </div>
        </div>
        );
    }
};

export default TyCard;