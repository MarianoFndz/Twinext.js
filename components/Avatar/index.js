import styles from "./styles.module.css"

export default function Avatar({ avatar, username }) {
  return (
    <div className={styles.container}>
      <img src={avatar} className={styles.img} />
      <strong>{username}</strong>
    </div>
  )
}
