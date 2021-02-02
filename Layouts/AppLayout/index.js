import Head from "next/head"
import styles from "./styles.module.css"

export default function AppLayout({ children, centerItems, titleHead }) {
  const contentClasses = () => {
    if (centerItems) {
      return `${styles.content} ${styles.centerItems}`
    }
    return styles.content
  }

  return (
    <>
      <Head>
        <title>{titleHead}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <main className={contentClasses()}>{children}</main>
      </div>
    </>
  )
}
