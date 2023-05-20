import styles from './Relogio.module.css'

export default function Relogio() {
  return (
    <>
      <span className={styles.relogioNumero}>00</span>
      <span className={styles.relogioNumero}>00</span>
      <span className={styles.relogioDivisao}>:</span>
      <span className={styles.relogioNumero}>00</span>
      <span className={styles.relogioNumero}>00</span>
    </>
  )
}
