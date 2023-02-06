import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About - Ricardo</title>
        <meta name="description" content="About Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Ir a <a href='/'>Home</a>
        </h1>
        <p className={styles.description}>
          Get started by editing {' '}
          <code className={styles.code}>pages/about.jsx</code>
        </p>
      </main>
    </>
  )
}
