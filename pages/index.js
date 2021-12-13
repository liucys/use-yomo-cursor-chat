import Head from "next/head";
import styles from "../styles/Home.module.css";
import { CustomComponent } from "../components/CustomCurSorChat";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Multiplayer Mouse</title>
        <meta name="description" content="Multiplayer Mouse" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Multiplayer Mouse</h1>
      </main>
      <CustomComponent socketURL="wss://ws-dev.yomo.run" />
    </div>
  );
}
