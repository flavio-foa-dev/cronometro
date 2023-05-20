import Button from '../button'
import styles from './Form.module.css'

export default function Form() {
  return (
    <form className={styles.novaTarefa}>
    <div className={styles.inputContainer}>
      <label htmlFor="tarefa">
        Adicione um novo estudo
      </label>
      <input
        type="text"
        name="tarefa"
        id="tarefa"
        placeholder="O que você quer estudar"
        required
      />
    </div>
    <div className={styles.inputContainer}>
      <label htmlFor="tempo">
        Tempo
      </label>
      <input
        type="time"
        step="1"
        name="tempo"
        id="tempo"
        min="00:00:00"
        max="01:30:00"
        required
      />
    </div>
    <Button type="button" text={"Adicionar"}/>
  </form>
  )
}
