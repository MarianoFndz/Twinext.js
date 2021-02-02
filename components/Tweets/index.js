import styles from "./styles.module.css"

export default function Tweets({ avatar, username, message }) {
  return (
    <section className={styles.container}>
      <img src={avatar} className={styles.img}></img>
      <div>
        <strong>{username}</strong>
        <p>{message}</p>
      </div>
    </section>
  )
}
