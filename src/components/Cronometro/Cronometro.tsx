import Button from "../button";
import Relogio from "./Relogio/Relogio";
import styles from "./Cronometro.module.css"

import { useTaskCompleted } from "../../context/TaskSelected";
import { useEffect, useState } from "react";
import { convertTimeToSeg } from "../../utils/time";

export default function Cronometro() {
  const {taskCompleted, completeTask}:any = useTaskCompleted()
  let selectedTime = taskCompleted.time
  const [tempo, setTempo]=useState<number>()


useEffect(()=>{
  setTempo(convertTimeToSeg(selectedTime))
},[taskCompleted])

function tempRegressive(tempo: number = 0){

  console.log(tempo)
  setTimeout(() => {
    if (tempo > 0) {
      setTempo(tempo - 1)
      return tempRegressive(tempo -1)
    }
    completeTask()
  },1000)
}

  return (
    <div className={styles.cronometro}>
      <p className={styles.title}>Escolha um card  inicie o cronometro</p>
      <span>{tempo}oi</span>
      <div className={styles.relogioWrapper}>
        <Relogio time={tempo}/>
      </div>
      <Button
        onClick={()=>  tempRegressive(tempo)}
        type="button"
        text="Iniciar"
      />
    </div>
  )
}
