import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Cronometer } from '../components/Cronometer/Cronometer';


export default function Home() {


  return (
    <div 
     className=' font-sans container'
      // className={styles.container}
    >
      <Head>
        <title>Cronometro</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/clock-svgrepo-com.svg" />
      </Head>

      <main className="">

        <h1 className={ styles.title }>
          Task timer
        </h1>

        <div className='flex flex-col max-w-xl border-2 rounded-xl w-100% container'>
          <Cronometer />
        </div>
    
      </main>
    </div>
  )
}

