import React, {useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";

/* Components & Hooks */
import LeftArrowButton from "@components/leftArrowButton";
/* import ArrowButton from "@components/arrowButton"; */
import GhButton from "@components/ghButton";
import LiveButton from "@components/liveButton";

/* Assets */
import mobileImg from "@images/4-product-preview-card/image-product-mobile.png";
import desktopImg from "@images/4-product-preview-card/image-product-desktop.png";
import iconCart from "@images/4-product-preview-card/icon-cart.svg";
import {Fraunces, Montserrat} from "next/font/google";
import styles from "@styles/4-product-preview-card/index.module.scss";

const fraunces = Fraunces({subsets:['latin'], weight: ['700']});
const montserrat = Montserrat({subsets: ['latin'], weight: ['500', '700']});

const App = () => {
  const [botones, setBotones] = useState(false);

  useEffect(() => {
  setTimeout(() => {
    setBotones(true);
  }, 3000);
}, []);

  return (
    <>
    <main className={`${styles.main} ${montserrat.className}`}>
      <section className={styles["cardContainer"]}>
        <div className={styles["cardContainer__ImgContainer"]}>
          <Image src={mobileImg} alt="" className={styles["cardContainer__ImgContainer--mobileImg"]}/>
          <Image src={desktopImg} alt="" className={styles["cardContainer__ImgContainer--desktopImg"]}/>
        </div>
        <div className={styles["cardContainer__ProductInfo"]}>
          <p>PERFUME</p>
          <h1 className={fraunces.className}>Gabrielle Essence Eau De Parfum</h1>
          <p> A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
          <div className={styles["cardContainer__productInfo--price"]}>
            <p className={fraunces.className}>$149.99</p>
            <p>$169.99</p>
          </div>
          <button className={styles.button}>
            <Image src={iconCart} alt="" className={styles["productInfo__button--iconCart"]} />
            Add to Cart
          </button>
        </div>
      </section>
    </main>
    {botones ? <div className={`${styles.footerButtons}`}>
          <div>{/* Previous */}
            <Link href="/3-interactive-rating-component">
              <LeftArrowButton />
            </Link>
          </div>
          <div>
            <Link href="https://github.com/rauljariasz/product-preview-card" target="_blank">
              <GhButton />
            </Link>
          </div>
          <div>
            <Link href="https://rauljariasz.github.io/product-preview-card/" target="_blank">
              <LiveButton />
            </Link>
          </div>
          {/* <div> Next 
            <Link href="/4-product-preview-card">
              <ArrowButton />
            </Link>
          </div> */}
      </div> : null}
    </>
  );
};

export default App;