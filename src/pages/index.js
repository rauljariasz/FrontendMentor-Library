import Head from "next/head";
import ParticlesBackground from "@components/particlesBackground";
import TypedReactHook from "@hooks/useTyped";
import Image from "next/image";
import RJ from "@images/20.png";
import { Ubuntu } from "next/font/google";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "@styles/Home/Home.module.scss";
import ArrowButton from "@components/arrowButton";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  const [nextPage, setNextPage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setNextPage(true);
    }, 12000);
  }, []);

  return (
    <>
      <Head>
        <title>FM Library 🎨</title>
        <meta name="description" content="Libreria de retos de FrontendMentor de Raul Arias." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <ParticlesBackground />
      <main className={`${styles.main} ${ubuntu.className}`}>
        <div className={styles.cTop}>
          <div className={`${styles.cTop__top}`}>
            <h1>Raul Arias</h1>
            <Image src={RJ} width="40" alt="Logo" />
          </div>
        </div>
        <div className={`${styles.conTyped}`}>
          <div className={`${styles.conTyped__bg}`}>
            <TypedReactHook />
            <Link href="/qr-code-component">
              {nextPage ? (
                <div className={`${styles.next}`}>
                  <ArrowButton />
                </div>
              ) : null}
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
