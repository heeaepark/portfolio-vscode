import style from './../styles/CodeLine.module.css';

const CodeLine = ({ children }) => {
  return (
    <p className={style.codeline}>
      { children }
    </p>
  )
}

export default CodeLine;