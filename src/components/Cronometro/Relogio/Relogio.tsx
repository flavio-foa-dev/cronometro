import styles from './Relogio.module.css'

 interface ITemp{
  time: number | undefined

}

export default function Relogio({time = 0 }:ITemp) {
  const minuts = Math.floor(time/60)
  const secunds = time % 60
  const [minutscentena, minutsDezena, minutsUnidade] = String(minuts).padStart(3, "0")
  const [secundDezena, secundUnidade] = String(secunds).padStart(2, "0")


  return (
    <>
      {+minutscentena > 0 ? <span className={styles.relogioNumero}>{minutscentena}</span>: ""}
      <span className={styles.relogioNumero}>{minutsDezena}</span>
      <span className={styles.relogioNumero}>{minutsUnidade}</span>
      <span className={styles.relogioDivisao}>:</span>
      <span className={styles.relogioNumero}>{secundDezena}</span>
      <span className={styles.relogioNumero}>{secundUnidade}</span>
    </>
  )
}
