import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import Cronometer from '../components/Cronometer/Cronometer';


export default function Home() {
  const [ teste, setTeste ] = useState('des');
  function seting (){
    console.log('teste')
    setTeste('asdasdasd')
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Cronometro</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="../public/time-cronometer-pngrepo-com.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Task timer
        </h1>

        <div className={styles.grid}>
          <Cronometer />
        </div>
      </main>

    </div>
  )
}

export function getServerSideProps() {
  return {
    props: {
      name: 'eu',
    }
  }
}
