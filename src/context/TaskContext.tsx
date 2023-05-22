import {ReactNode, createContext, useState} from "react"



export const ContextTask = createContext({})
ContextTask.displayName = "Task"

type Children = { children: ReactNode}

const task = [
  {
    tarefa: 'React',
    tempo: '02:00:00'
  },
  {
    tarefa: 'Javascript',
    tempo: '01:00:00'
  },
  {
    tarefa: "Typescript",
    tempo: "03:00:00"
  }
]


export function ProviderTask({children}: Children) {
  const [tasks, setTasks] = useState(task)

  const value = {tasks, setTasks}
  return <ContextTask.Provider value={value}>
    {children}
  </ContextTask.Provider>

}