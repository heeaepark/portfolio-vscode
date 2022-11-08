import style from './../styles/CodeBlock.module.css';

const CodeBlock = ({ children }) => {
  return (
    <div className={style.codeblock}>
      { children }
    </div>
  )
}

export default CodeBlock;