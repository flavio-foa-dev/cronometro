import {ReactNode, createContext, useState} from "react"



export const ContextTask = createContext({})
ContextTask.displayName = "Task"

type Children = { children: ReactNode}

const task = [
  {
    id: 1,
    task: 'React',
    time: '02:00:00',
    selected: false,
    completed: false,
  },
  {
    id: 2,
    task: "Typescript",
    time: "03:00:00",
    selected: false,
    completed: false,
  }
]


export function ProviderTask({children}: Children) {
  const [tasks, setTasks] = useState(task)

  const value = {tasks, setTasks}
  return <ContextTask.Provider value={value}>
    {children}
  </ContextTask.Provider>

}