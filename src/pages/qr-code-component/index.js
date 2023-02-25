import React, { useState, useEffect } from "react";
import Image from "next/image";
import QR from "@images/qr-code-component/image-qr-code.png";
import styles from "@styles/qr-code-component/qr-code-component.module.scss";
import Head from "next/head";
import { Outfit } from "next/font/google";
import LeftArrowButton from "@components/leftArrowButton";
import ArrowButton from "@components/arrowButton";
import GhButton from "@components/ghButton";
import LiveButton from "@components/liveButton"

import Link from "next/link";

const outfit = Outfit({ subsets:['latin'], weight: ['400', '700']})

const index = () => {
  const [botones, setBotones] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setBotones(true);
    }, 3000);
  }, []);

  return (
    <>
      <Head>
        <title>QR Code Component 🎨</title>
        <meta
          name="description"
          content="QR Code Component for Raul Arias."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={`${styles.main} ${outfit.className}`}>
        <div className={styles["flex"]}>
          <section className={styles["cardContainer"]}>
            <Image src={QR} alt="QR Code" className={styles["cardContainer__img"]} />
            <div className={styles["textContainer"]}>
              <h1 className={styles["textBold"]}>
                Improve your front-end skills by building projects
              </h1>
              <p className={styles["text"]}>
                Scan the QR code to visit Frontend Mentor and take your coding
                skills to the next level
              </p>
            </div>
          </section>
        </div>
      </main>
      {botones ? <div className={`${styles.buttons}`}>
          <div>
            <Link href="/">
              <LeftArrowButton />
            </Link>
          </div>
          <div>
            <Link href="https://github.com/rauljariasz/qr-code-component" target="_blank">
              <GhButton />
            </Link>
          </div>
          <div>
            <Link href="https://rauljariasz.github.io/qr-code-component/" target="_blank">
              <LiveButton />
            </Link>
          </div>
          <div>
            <Link href="/">
              <ArrowButton />
            </Link>
          </div>
      </div> : null}
    </>
  );
};

export default index;
