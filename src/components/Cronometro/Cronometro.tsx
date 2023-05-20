import Button from "../button";
import Relogio from "./Relogio/Relogio";
import styles from "./Cronometro.module.css"

export default function Cronometro() {
  return (
    <div className={styles.cronometro}>
      <p>Escolha um card  inicie o cronometro</p>
      <div>
        <Relogio />
      </div>
      <Button
        type="button"
        text="Iniciar"
      />
    </div>
  )
}
