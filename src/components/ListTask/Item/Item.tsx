
interface IItem {

  tarefa: string;
  tempo: string;
}

export default function Item({tarefa, tempo}: IItem) {
  return (
    <li
      className="item"
    >
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  )
}
