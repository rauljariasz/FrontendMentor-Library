import React, { useState, useRef, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

/* Components & Hooks */
import LeftArrowButton from "@components/leftArrowButton";
import ArrowButton from "@components/arrowButton";
import GhButton from "@components/ghButton";
import LiveButton from "@components/liveButton";

/* Assets */
import illusMobile from "@images/faq-accordion-card/illustration-woman-online-mobile.svg";
import patternMobile from "@images/faq-accordion-card/bg-pattern-mobile.svg";
import arrow from "@images/faq-accordion-card/icon-arrow-down.svg";
import illusDesktop from "@images/faq-accordion-card/illustration-woman-online-desktop.svg";
import patternDesktop from "@images/faq-accordion-card/bg-pattern-desktop.svg";
import boxDesktop from "@images/faq-accordion-card/illustration-box-desktop.svg";
import { Kumbh_Sans } from "next/font/google";
import styles from "@styles/faq-accordion-card/index.module.scss";

const kumbhSans = Kumbh_Sans({ subsets: ["latin"], weight: ["400", "700"] });

const Index = () => {
  const [botones, setBotones] = useState(false);

    useEffect(() => {
    setTimeout(() => {
      setBotones(true);
    }, 3000);
  }, []);

  /* STATES */
  const [toggleq1, setToggleq1] = useState(false);
  const [toggleq2, setToggleq2] = useState(true);
  const [toggleq3, setToggleq3] = useState(false);
  const [toggleq4, setToggleq4] = useState(false);
  const [toggleq5, setToggleq5] = useState(false);

  /* REF QUESTION */
  const question1 = useRef(null);
  const question2 = useRef(null);
  const question3 = useRef(null);
  const question4 = useRef(null);
  const question5 = useRef(null);

  /* REF ARROWS */
  const arrow1 = useRef(null);
  const arrow2 = useRef(null);
  const arrow3 = useRef(null);
  const arrow4 = useRef(null);
  const arrow5 = useRef(null);

  const handdleClickQ1 = () => {
    setToggleq1(!toggleq1);
    question1.current.classList.toggle(`${styles.questionOpen}`);
    arrow1.current.classList.toggle(`${styles.rotate}`);
    if (toggleq2) {
      setToggleq2(!toggleq2);
      question2.current.classList.remove(`${styles.questionOpen}`);
      arrow2.current.classList.remove(`${styles.rotate}`);
    } else if (toggleq3) {
      setToggleq3(!toggleq3);
      question3.current.classList.remove(`${styles.questionOpen}`);
      arrow3.current.classList.remove(`${styles.rotate}`);
    } else if (toggleq4) {
      setToggleq4(!toggleq4);
      question4.current.classList.remove(`${styles.questionOpen}`);
      arrow4.current.classList.remove(`${styles.rotate}`);
    } else if (toggleq5) {
      setToggleq5(!toggleq5);
      question5.current.classList.remove(`${styles.questionOpen}`);
      arrow5.current.classList.remove(`${styles.rotate}`);
    }
  };
  const handdleClickQ2 = () => {
    setToggleq2(!toggleq2);
    question2.current.classList.toggle(`${styles.questionOpen}`);
    arrow2.current.classList.toggle(`${styles.rotate}`);
    if (toggleq1) {
      setToggleq1(!toggleq1);
      question1.current.classList.remove(`${styles.questionOpen}`);
      arrow1.current.classList.remove(`${styles.rotate}`);
    } else if (toggleq3) {
      setToggleq3(!toggleq3);
      question3.current.classList.remove(`${styles.questionOpen}`);
      arrow3.current.classList.remove(`${styles.rotate}`);
    } else if (toggleq4) {
      setToggleq4(!toggleq4);
      question4.current.classList.remove(`${styles.questionOpen}`);
      arrow4.current.classList.remove(`${styles.rotate}`);
    } else if (toggleq5) {
      setToggleq5(!toggleq5);
      question5.current.classList.remove(`${styles.questionOpen}`);
      arrow5.current.classList.remove(`${styles.rotate}`);
    }
  };
  const handdleClickQ3 = () => {
    setToggleq3(!toggleq3);
    question3.current.classList.toggle(`${styles.questionOpen}`);
    arrow3.current.classList.toggle(`${styles.rotate}`);
    if (toggleq1) {
      setToggleq1(!toggleq1);
      question1.current.classList.remove(`${styles.questionOpen}`);
      arrow1.current.classList.remove(`${styles.rotate}`);
    } else if (toggleq2) {
      setToggleq2(!toggleq2);
      question2.current.classList.remove(`${styles.questionOpen}`);
      arrow2.current.classList.remove(`${styles.rotate}`);
    } else if (toggleq4) {
      setToggleq4(!toggleq4);
      question4.current.classList.remove(`${styles.questionOpen}`);
      arrow4.current.classList.remove(`${styles.rotate}`);
    } else if (toggleq5) {
      setToggleq5(!toggleq5);
      question5.current.classList.remove(`${styles.questionOpen}`);
      arrow5.current.classList.remove(`${styles.rotate}`);
    }
  };
  const handdleClickQ4 = () => {
    setToggleq4(!toggleq4);
    question4.current.classList.toggle(`${styles.questionOpen}`);
    arrow4.current.classList.toggle(`${styles.rotate}`);
    if (toggleq1) {
      setToggleq1(!toggleq1);
      question1.current.classList.remove(`${styles.questionOpen}`);
      arrow1.current.classList.remove(`${styles.rotate}`);
    } else if (toggleq2) {
      setToggleq2(!toggleq2);
      question2.current.classList.remove(`${styles.questionOpen}`);
      arrow2.current.classList.remove(`${styles.rotate}`);
    } else if (toggleq3) {
      setToggleq3(!toggleq3);
      question3.current.classList.remove(`${styles.questionOpen}`);
      arrow3.current.classList.remove(`${styles.rotate}`);
    } else if (toggleq5) {
      setToggleq5(!toggleq5);
      question5.current.classList.remove(`${styles.questionOpen}`);
      arrow5.current.classList.remove(`${styles.rotate}`);
    }
  };
  const handdleClickQ5 = () => {
    setToggleq5(!toggleq5);
    question5.current.classList.toggle(`${styles.questionOpen}`);
    arrow5.current.classList.toggle(`${styles.rotate}`);
    if (toggleq1) {
      setToggleq1(!toggleq1);
      question1.current.classList.remove(`${styles.questionOpen}`);
      arrow1.current.classList.remove(`${styles.rotate}`);
    } else if (toggleq2) {
      setToggleq2(!toggleq2);
      question2.current.classList.remove(`${styles.questionOpen}`);
      arrow2.current.classList.remove(`${styles.rotate}`);
    } else if (toggleq3) {
      setToggleq3(!toggleq3);
      question3.current.classList.remove(`${styles.questionOpen}`);
      arrow3.current.classList.remove(`${styles.rotate}`);
    } else if (toggleq4) {
      setToggleq4(!toggleq4);
      question4.current.classList.remove(`${styles.questionOpen}`);
      arrow4.current.classList.remove(`${styles.rotate}`);
    }
  };

  return (
    <>
      <Head>
        <title>Faq Accordion Card 🎨</title>
        <meta name="description" content="Faq accordion card for Raul Arias." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={`${styles.main} ${kumbhSans.className}`}>
        <div className={styles["flex"]}>
          <Image
            src={boxDesktop}
            alt=""
            width="auto"
            height="auto"
            className={styles["boxDesktop"]}
          />
          <div className={styles["container"]}>
            <div className={styles["container__imgContainer"]}>
              <figure>
                <Image
                  src={illusMobile}
                  alt=""
                  width="auto"
                  height="auto"
                  className={styles["illusMobile"]}
                />
                <Image
                  src={patternMobile}
                  alt=""
                  width="auto"
                  height="auto"
                  className={styles["patternMobile"]}
                />
                <Image
                  src={illusDesktop}
                  alt=""
                  width="auto"
                  height="auto"
                  className={styles["illusDesktop"]}
                />
                <Image
                  priority
                  src={patternDesktop}
                  alt=""
                  width="auto"
                  height="auto"
                  className={styles["patternDesktop"]}
                />
              </figure>
            </div>

            <div className={styles["container__faqContainer"]}>
              <h1 className={styles["container__faqContainer-title"]}>FAQ</h1>

              <div
                className={styles["container__faqContainer__questionBox"]}
                onClick={handdleClickQ1}
                role="presentation"
              >
                <div
                  className={
                    styles["container__faqContainer__questionBox__flex"]
                  }
                >
                  <p
                    className={
                      styles[
                        "container__faqContainer__questionBox__flex-question"
                      ]
                    }
                    ref={question1}
                  >
                    How many team members can I invite?
                  </p>
                  <Image
                    src={arrow}
                    alt=""
                    width="auto"
                    height="auto"
                    className={styles["arrow"]}
                    ref={arrow1}
                  />
                </div>
                {toggleq1 ? (
                  <div
                    className={
                      styles["container__faqContainer__questionBox-answer"]
                    }
                  >
                    You can invite up to 2 additional users on the Free plan.
                    There is no limit on team members for the Premium plan.
                  </div>
                ) : null}
              </div>

              <div
                className={styles["container__faqContainer__questionBox"]}
                onClick={handdleClickQ2}
              >
                <div
                  className={
                    styles["container__faqContainer__questionBox__flex"]
                  }
                >
                  <p
                    className={
                      styles[
                        "container__faqContainer__questionBox__flex-question"
                      ] +
                      " " +
                      styles["questionOpen"]
                    }
                    ref={question2}
                  >
                    What is the maximum file upload size?
                  </p>
                  <Image
                    src={arrow}
                    alt=""
                    width="auto"
                    height="auto"
                    className={`${styles.arrow} ${styles.rotate}`}
                    ref={arrow2}
                  />
                </div>
                {toggleq2 ? (
                  <div
                    className={
                      styles["container__faqContainer__questionBox-answer"]
                    }
                  >
                    No more than 2GB. All files in your account must fit your
                    allotted storage space.
                  </div>
                ) : null}
              </div>

              <div
                className={styles["container__faqContainer__questionBox"]}
                onClick={handdleClickQ3}
              >
                <div
                  className={
                    styles["container__faqContainer__questionBox__flex"]
                  }
                >
                  <p
                    className={
                      styles[
                        "container__faqContainer__questionBox__flex-question"
                      ]
                    }
                    ref={question3}
                  >
                    How do I reset my password?
                  </p>
                  <Image
                    src={arrow}
                    alt=""
                    width="auto"
                    height="auto"
                    className={styles["arrow"]}
                    ref={arrow3}
                  />
                </div>
                {toggleq3 ? (
                  <div
                    className={
                      styles["container__faqContainer__questionBox-answer"]
                    }
                  >
                    Click “Forgot password” from the login page or “Change
                    password” from your profile page. A reset link will be
                    emailed to you.
                  </div>
                ) : null}
              </div>

              <div
                className={styles["container__faqContainer__questionBox"]}
                onClick={handdleClickQ4}
              >
                <div
                  className={
                    styles["container__faqContainer__questionBox__flex"]
                  }
                >
                  <p
                    className={
                      styles[
                        "container__faqContainer__questionBox__flex-question"
                      ]
                    }
                    ref={question4}
                  >
                    Can I cancel my subscription?
                  </p>
                  <Image
                    src={arrow}
                    alt=""
                    width="auto"
                    height="auto"
                    className={styles["arrow"]}
                    ref={arrow4}
                  />
                </div>
                {toggleq4 ? (
                  <div
                    className={
                      styles["container__faqContainer__questionBox-answer"]
                    }
                  >
                    Yes! Send us a message and we&apos;ll process your request no
                    questions asked.
                  </div>
                ) : null}
              </div>

              <div
                className={styles["container__faqContainer__questionBox"]}
                onClick={handdleClickQ5}
              >
                <div
                  className={
                    styles["container__faqContainer__questionBox__flex"]
                  }
                >
                  <p
                    className={
                      styles[
                        "container__faqContainer__questionBox__flex-question"
                      ]
                    }
                    ref={question5}
                  >
                    Do you provide additional support?
                  </p>
                  <Image
                    src={arrow}
                    alt=""
                    width="auto"
                    height="auto"
                    className={styles["arrow"]}
                    ref={arrow5}
                  />
                </div>
                {toggleq5 ? (
                  <div
                    className={
                      styles["container__faqContainer__questionBox-answer"]
                    }
                  >
                    Chat and email support is available 24/7. Phone lines are
                    open during normal business hours.
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </main>
      {botones ? <div className={`${styles.buttons}`}>
          <div>{/* Previous */}
            <Link href="/qr-code-component">
              <LeftArrowButton />
            </Link>
          </div>
          <div>
            <Link href="https://github.com/rauljariasz/faq-accordion-card" target="_blank">
              <GhButton />
            </Link>
          </div>
          <div>
            <Link href="https://rauljariasz.github.io/faq-accordion-card/" target="_blank">
              <LiveButton />
            </Link>
          </div>
          <div>{/* Next */}
            <Link href="/">
              <ArrowButton />
            </Link>
          </div>
      </div> : null}
    </>
  );
};

export default Index;
