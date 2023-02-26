import React, {useState, useRef} from 'react';
import Image from 'next/image';

/* Assets */
import Star from "@images/3-interactive-rating-component/icon-star.svg";
import styles from "@styles/3-interactive-rating-component/HowCard.module.scss";

const HowCard = ({setCalificacion}) => {
    let [rate, setRate] = useState(0);
    const hwCard = useRef(null);
    let rateProp = rate;

    const handleClick = (event) => {
        event.preventDefault();
        if (rate > 0) {
            setTimeout(() => setCalificacion(rateProp), 600);
        }
        setTimeout(() => hwCard.current.classList.add(`${styles.none}`), 450);
        hwCard.current.classList.add(`${styles["slide-out-blurred-bottom"]}`); 
    };
    return (
        <div className={`${styles.card} ${styles.howCard}`} ref={hwCard}>
            <div className={styles["howCard__img"]}>
              <figure>
                <Image src={Star} alt="Star" /> {/* ACTIVO AQUI */}
              </figure>
            </div>
            <div className={styles["howCard__Text"]}>
              <h1>How did we do?</h1>
              <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            </div>
            <div className={styles["howCard__form"]}>
              <form>
                <div className={styles["form__inputs"]}>
                  <input type="radio" id="1" name="rate" value="1" onFocus={(e) => {setRate(e.currentTarget.value);}} />
                  <label htmlFor="1" >1</label>
                  <input type="radio" id="2" name="rate" value="2" onFocus={(e) => {setRate(e.currentTarget.value);}} />
                  <label htmlFor="2" >2</label>
                  <input type="radio" id="3" name="rate" value="3" onFocus={(e) => {setRate(e.currentTarget.value);}} />
                  <label htmlFor="3" >3</label>
                  <input type="radio" id="4" name="rate" value="4" onFocus={(e) => {setRate(e.currentTarget.value);}} />
                  <label htmlFor="4" >4</label>
                  <input type="radio" id="5" name="rate" value="5" onFocus={(e) => {setRate(e.currentTarget.value);}} />
                  <label htmlFor="5" >5</label>
                </div>
                <button type="submit" onClick={handleClick}>SUBMIT</button>
              </form>
            </div>
          </div>
    );
};

export default HowCard;