import style from './../styles/CodeLine.module.css';

const CodeLine = ({ children }) => {
  return (
    <div className={style.codeline}>
      { children }
    </div>
  )
}

export default CodeLine;