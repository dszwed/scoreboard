import Head from 'next/head'
import Scoreboard from '../components/scoreboard';
import styles from '../styles/Home.module.css'
import Player from "../components/player";

export default function Game() {
  const homeTeam = {
      name: '85ers',
      score: 0,
      players: [
          new Player(3, 'Dawid Szwed', 9),
          new Player(4, 'Radek Piotrowski', 4),
          new Player(5, 'Tomasz Zając', 5),
      ]
  };

    const awayTeam = {
        name: 'Jorgusie',
        score: 0,
        players: [
            new Player(1, 'Bartek', 9),
            new Player(2, 'Marek', 99),
            new Player(6, 'Kolejny', 999),
        ]
    };

    const timer = 10;

  return (
    <div className={styles.container}>
      <Head>
        <title>Mecz</title>
        <meta name="description" content="Mecz" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <Scoreboard awayTeam={awayTeam} homeTeam={homeTeam} timer={timer} />
      </main>
    </div>
  )
}
