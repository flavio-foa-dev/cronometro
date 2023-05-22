import styles from "./Item.module.css"
interface IItem {
  tarefa: string;
  tempo: string;
}

export default function Item({tarefa, tempo}: IItem) {
  return (
    <li
      className={styles.item}
    >
      <h3 className={styles.item_title}>{tarefa}</h3>
      <span className={styles.item_tempo}>{tempo}</span>
    </li>
  )
}
