import styles from './Button.module.css'

interface IButton{
  type: "button" | "submit" | "reset" ;
  text: string;
  onClick?: () => void
}

export default function Button(props:IButton) {
  return (
    <button
      onClick={props.onClick}
      className={styles.botao}
      type={props.type}
    >{props.text}</button>
  )
}
