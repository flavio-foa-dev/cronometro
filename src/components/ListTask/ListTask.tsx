import { useContext } from 'react';
import Item from './Item/Item';
import styles from './ListTask.module.css';
import { ContextTask } from '../../context/TaskContext';



function Lista() {
  const {tasks, setTasks} = useContext<any>(ContextTask)

  function addTask(){
    setTasks([...tasks, {tarefa: "pintar", tempo:"00:00:00"}])
  }

  return (
    <aside className={styles.lista_tarefas}>
      <h2 className={styles.task_title} onClick={()=> addTask() }>Adicione uma Tarefa </h2>
      <ul className={styles.task_ul}>
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