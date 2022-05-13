import Head from 'next/head'
import Link from 'next/link'
import Scoreboard from '../components/scoreboard';
import styles from '../styles/Home.module.css'
import Player from "../components/player";

export default function Home() {


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <a href='/game/create' className='btn btn-primary'>New game</a>
      </main>
    </div>
  )
}
