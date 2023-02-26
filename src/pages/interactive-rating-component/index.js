import React, {useState, useEffect} from "react";
import Head from "next/head";
import Link from "next/link";


/* Components & Hooks */
import HowCard from "@components/interactive-rating-component/HowCard";
import TyCard from "@components/interactive-rating-component/TyCard";
import LeftArrowButton from "@components/leftArrowButton";
/* import ArrowButton from "@components/arrowButton"; */
import GhButton from "@components/ghButton";
import LiveButton from "@components/liveButton";

/* Assets */
import { Overpass } from "next/font/google";
import styles from "@styles/interactive-rating-component/index.module.scss";

const overpass = Overpass({subsets:['latin'], weight:['400', '700']});

const App = () => {
  const [calificacion, setCalificacion] = useState(0);

  const [botones, setBotones] = useState(false);

    useEffect(() => {
    setTimeout(() => {
      setBotones(true);
    }, 3000);
  }, []);

  return (
    <>
      <Head>
        <title>Interactive rating component 🎨</title>
        <meta name="description" content="Interactive rating component for Raul Arias." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={`${styles.main} ${overpass.className}`}>
        <div className={styles["flex"]}>
          {/* HOW DID WE DO? SECTION */}
          <HowCard setCalificacion={setCalificacion} />
          
          {/* THANK U STATE */}
          <TyCard calificacion={calificacion} />
        </div>
      </main>
      {botones ? <div className={`${styles.buttons}`}>
          <div>{/* Previous */}
            <Link href="/faq-accordion-card">
              <LeftArrowButton />
            </Link>
          </div>
          <div>
            <Link href="https://github.com/rauljariasz/interactive-rating-component" target="_blank">
              <GhButton />
            </Link>
          </div>
          <div>
            <Link href="https://rauljariasz.github.io/interactive-rating-component/" target="_blank">
              <LiveButton />
            </Link>
          </div>
          {/*<div> Next 
            <Link href="/">
              <ArrowButton />
            </Link>
          </div>*/}
      </div> : null}
    </>
  );
};

export default App;