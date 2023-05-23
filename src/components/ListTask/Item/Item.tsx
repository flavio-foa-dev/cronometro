import ITasks from "../../../types/ITasks";
import styles from "./Item.module.css"
interface IItem extends ITasks {
  selectTask: (tarefa:ITasks) => void
}



export default function Item({task, time, selectTask, id, selected, completed}: IItem) {
  return (
    <li
      className={`${styles.item} ${selected ? styles.itemSelected : "" } ${completed ? styles.itemCompletado : ""}`}
      onClick={()=> !completed && selectTask({task, time, id, selected, completed })}
    >
      <div className={styles.item_container}>
        <h3 className={styles.item_title}>{task}</h3>
        <span className={styles.item_tempo}>{time}</span>
      </div>
      {completed && <span className={styles.concluido}></span>}
    </li>
  )
}
