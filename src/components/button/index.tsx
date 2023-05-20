import styles from './Button.module.css'

interface IButton{
  type: "button" | "submit" | "reset" ;
  text: string;
}

export default function Button(props:IButton) {
  return (
    <button
      className={styles.botao}
      type={props.type}
    >{props.text}</button>
  )
}
