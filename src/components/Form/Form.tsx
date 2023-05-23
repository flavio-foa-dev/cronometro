import { useContext, useState } from 'react'
import Button from '../button'
import styles from './Form.module.css'
import { ContextTask } from '../../context/TaskContext'
import {v4 as uuidv4} from "uuid"

export default function Form() {
  const {tasks, setTasks} = useContext<any>(ContextTask)
  const [state, setState]= useState({
    task:"",
    time:"00:00",
  })

  function handleChange(e:React.ChangeEvent<HTMLInputElement>){
    e.preventDefault()
    setState({...state, [e.target.name]: e.target.value})
    console.log(state)
  }

  function handleSubmit(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    setTasks(
      [...tasks,
        {
          ...state,
          id: uuidv4(),
          selected: false,
          completed: false
        }
      ])
    setState({
      task:"",
      time:"00:00"
    })
  }

  return (
    <form className={styles.novaTarefa} onSubmit={handleSubmit}>
    <div className={styles.inputContainer}>
      <label htmlFor="task" className={styles.label_input}>
        Adicione um novo estudo
      </label>
      <input
        className={styles.input_task}
        autoFocus
        type="text"
        name="task"
        id="task"
        placeholder="O que você quer estudar"
        value={state.task}
        onChange={(e)=>handleChange(e)}
        required
      />
    </div>
    <div className={styles.inputContainer}>
      <label htmlFor="tempo" className={styles.label_input}>
        Tempo
      </label>
      <input
        className={styles.input_task}
        type="time"
        step="1"
        name="time"
        id="time"
        min="00:00:00"
        max="02:00:00"
        value={state.time}
        onChange={(e)=>handleChange(e)}
        required
      />
    </div>
    <Button type="submit" text={"Adicionar"}/>
  </form>
  )
}
