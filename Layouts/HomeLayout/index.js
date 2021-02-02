import styles from "./styles.module.css"

export default function HomeLayout({ children, textHeader }) {
  return (
    <>
      <header className={styles.header}>
        <h2>{textHeader}</h2>
      </header>
      <div className={styles.content}>{children}</div>
      <footer className={styles.footer}></footer>
    </>
  )
}
