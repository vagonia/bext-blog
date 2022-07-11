import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import HeaderBar from '../components/headerbar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>베네프 - 서울시 청년문화 네트워크</title>
        <meta name="description" content="베네프:서울시 청년문화 네트워크" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.banner}>
          <h1 className={styles.title}>
            <Link href="/posts/first-post"><a>베네프</a></Link>에 오신 여러분들을 진심으로 환영합니다!
          </h1>

          <p className={styles.description}>
            이쁘게 단장중이니{' '}
            <code className={styles.code}>조금만 기다려주세요😅</code>
          </p>
      </div>
      <div className='flex'><HeaderBar /></div>
      <main className={styles.main}>
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>소개 &rarr;</h2>
            <p>베네프란 어떤 곳인지 지금 바로 클릭!</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>갤러리 &rarr;</h2>
            <p>어떤 프로젝트들이 있었는지 알아볼까요?</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>공지사항 &rarr;</h2>
            <p>핫한 베네퍼의 소식을 확인해보세요!</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>프로젝트 신청하기 &rarr;</h2>
            <p>
              누구나 함께 하고싶은 마음과 열정이 있다면 지금 개설하세요!
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
          <span className={styles.logo}>
            &copy;BENEF
          </span>
        </a>
      </footer>
    </div>
  )
}
