import style from './../styles/Note.module.css';

const Note = (props) => {
  return (
    <div className={style.note}>
      <div className={style.circle_wrap}>
        <span className={style.circle} />
        <span className={style.circle} />
        <span className={style.circle} />
        <span className={style.circle} />
        <span className={style.circle} />
      </div>
      { props.children }
    </div>
  )
}

export default Note;