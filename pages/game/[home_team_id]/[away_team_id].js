import Head from 'next/head'
import Scoreboard from '../../../components/scoreboard'
import styles from '../../../styles/Home.module.css'
import Player from '../../../components/player'
import { useRouter } from 'next/router';
import {teams} from "../../../data";
import useSwr from 'swr';

Page.getInitialProps = async (context) => {

    let homeTeam = teams.find(team => team.id === context.query.home_team_id);

    let awayTeam = teams.find(team => team.id === context.query.away_team_id);
    return { homeTeam: homeTeam, awayTeam: awayTeam }
}

function Page ({ homeTeam, awayTeam}) {


    return (
        <div className={styles.container}>
            <Head>
                <title>Mecz</title>
                <meta name="description" content="Mecz" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <Scoreboard awayTeam={awayTeam} homeTeam={homeTeam} />
            </main>
        </div>
    )
}

export default Page
