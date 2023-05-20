import { useContext } from 'react';
import Item from './Item/Item';
import styles from './ListTask.module.css';
import { ContextTask } from '../../context/TaskContext';

function Lista() {
  const {tasks, setTasks} = useContext<any>(ContextTask)

  return (
    <aside className={styles.listaTarefas}>
      <h2 onClick={()=> setTasks([...tasks, {tarefa: "pintar", tempo:"00:00:00"}])}> Estudos do dia </h2>
      <ul>
        {tasks.map((item:any, index:number) => (
          <Item
          key={index}
          {...item}
          />
        ))}
      </ul>
    </aside>
  )
}

export default Lista;