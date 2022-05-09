import Head from 'next/head'
import Scoreboard from '../../components/scoreboard';
import styles from '../../styles/Home.module.css'
import Player from "../../components/player";
import { useRouter } from 'next/router'
import {PrismaClient} from "@prisma/client";
BigInt.prototype.toJSON = function() { return this.toString()  }



export async function getServerSideProps(context) {

    const gameID = parseInt(context.params.id);
    const prisma = new PrismaClient();

    const game = await prisma.game.findUnique({
        where: {
            id: gameID
        },
        // include: {
        //     home_team: true,
        //     away_team: true,
        // }
    });

    return {
        props: {
            game: JSON.stringify(game)
        },
    }
}

export default ({game}) => {

    console.log(game);

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
