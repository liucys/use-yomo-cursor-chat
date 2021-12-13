import Head from "next/head";
import CursorChat from "yomo-react-cursor-chat";
import "yomo-react-cursor-chat/dist/cursor-chat.min.css";
import styles from "../../styles/Other.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Multiplayer Mouse</title>
        <meta name="description" content="Multiplayer Mouse" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Using the yomo-react-cursor-chat component</h1>
      </main>
      <CursorChat
        socketURL="wss://ws-dev.yomo.run"
        sendingTimeInterval={200}
        avatar="https://avatars.githubusercontent.com/u/67308985?s=200&v=4"
      />
    </div>
  );
}
