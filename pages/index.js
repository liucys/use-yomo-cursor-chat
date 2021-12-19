import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { CustomComponent } from "../components/CustomCurSorChat";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>yomo multiplayer mouse</title>
        <meta name="description" content="Multiplayer Mouse" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>multiplayer cursor</h1>
        <h3>
          <Link href="/other">
            <a>Using components in a page</a>
          </Link>
        </h3>
      </main>
      <CustomComponent socketURL="wss://ws-dev.yomo.run" />
    </div>
  );
}
