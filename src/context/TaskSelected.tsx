import {ReactNode, createContext, useContext, useState} from 'react'
import ITasks from '../types/ITasks'
import { ContextTask } from './TaskContext'
export const ContextTaskCompleted = createContext({})
ContextTaskCompleted.displayName = "taskCompleted"

type Children = { children: ReactNode}

export function ProvideTaskCompleted ({children}: Children) {
  const [taskCompleted, setTaskCompleted] = useState({})


  const value ={taskCompleted, setTaskCompleted}
  return <ContextTaskCompleted.Provider value={value}>
    {children}
  </ContextTaskCompleted.Provider>
}

export function useTaskCompleted() {
  const {taskCompleted, setTaskCompleted} = useContext<any>(ContextTaskCompleted)
  const { setTasks } = useContext<any>(ContextTask)

  function selectTask(taskSelected:ITasks) {
    setTaskCompleted(taskSelected)
    setTasks((taskAfter:any)=> taskAfter.map(((task:any) => ({
      ...task,
      selected: task.id === taskSelected.id ? true : false,

    }))))
  }

  return{
    taskCompleted,
    setTaskCompleted,
    selectTask,
  }
}