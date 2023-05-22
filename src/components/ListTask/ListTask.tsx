import { useContext } from 'react';
import Item from './Item/Item';
import styles from './ListTask.module.css';
import { ContextTask } from '../../context/TaskContext';
import { useTaskCompleted } from '../../context/TaskSelected';
import ITasks from '../../types/ITasks';


function Lista() {
  const {tasks} = useContext<any>(ContextTask)

  const {selectTask} = useTaskCompleted()
  return (
    <aside className={styles.lista_tarefas}>
      <h2 className={styles.task_title}>Adicione uma Tarefa</h2>
      <ul className={styles.task_ul}>
        {tasks.map((item: ITasks) => (
          <Item
            key={item.id}
            selectTask={selectTask}
            {...item}
          />
        ))}
      </ul>
    </aside>
  )
}

export default Lista;