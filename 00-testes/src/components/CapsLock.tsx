import styles from './CapsLock.module.css'

const CapsLock = ({children}) => {
  return (
    <div className={styles.caps}>
        <h2>{children}</h2>
    </div>
  )
}

export default CapsLock