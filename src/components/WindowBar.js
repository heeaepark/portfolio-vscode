/* css import */
import style from './../styles/Windowbar.module.css';

/* icon import */
import VscodeIcon from './icons/VscodeIcon';

const WindowBar = () => {
  return (
    <div className={style.windowbar}>
      <div className={style.window_btn_wrap}>
        <VscodeIcon className={style.icon} fill={'#2196f3'} />
        <div className={style.btn_items}>
          <p className={style.btn_item}>File</p>
          <p className={style.btn_item}>Edit</p>
          <p className={style.btn_item}>View</p>
          <p className={style.btn_item}>Go</p>
          <p className={style.btn_item}>Run</p>
          <p className={style.btn_item}>Terminal</p>
          <p className={style.btn_item}>Help</p>
        </div>
      </div>
      <p className={style.window_title}>Heeae Park - Visual Studio Code</p>
      <div className={style.window_ic_wrap}>
        <span className={`${style.window_ic} ${style.window_ic__red}`}></span>
        <span className={`${style.window_ic} ${style.window_ic__yellow}`}></span>
        <span className={`${style.window_ic} ${style.window_ic__green}`}></span>
      </div>
    </div>
  )
}

export default WindowBar;