import styles from "./Title.module.css"

function Title({ children }) {
  return (
    <div className={styles.title}>
        <h2>{children}</h2>
    </div>
  )
}

export default Title