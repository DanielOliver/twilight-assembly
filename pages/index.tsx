import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Layout} from "../components/Layout";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <meta name="description" content="Twilight Assembly: The Twilight Imperium 4 game utility"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Layout>
                <main className={styles.main}>
                    <p>Work in progress</p>
                </main>
            </Layout>
        </div>
    )
}

export default Home
