/* css import */
import style from './../styles/Footer.module.css';

/* icon components import */
import SourceControlIcon from './icons/SourceControlIcon';
import ErrorIcon from './icons/ErrorIcon';
import WarningIcon from './icons/WarningIcon';
import ReactIcon from './icons/ReactIcon';
import CheckIcon from './icons/CheckIcon';
import BellIcon from './icons/BellIcon';


const Footer = () => {
  return (
    <footer>
      <div className={style.left}>
        <a className={style.icon_wrap} href="https://github.com/heeaepark" target="_blank" rel="noopener noreferrer">
          <SourceControlIcon className={style.icon} fill={'#fff'} />
          main
        </a>
        <div className={style.icon_items}>
          <span className={`${style.icon_wrap} ${style.icon__error}`}><ErrorIcon className={style.icon} /> 0</span>
          <span className={`${style.icon_wrap} ${style.icon__warning}`}><WarningIcon className={style.icon} /> 0</span>
        </div>
      </div>
      <div className={style.right}>
        <div className={`${style.icon_wrap} ${style.power}`}>
          <ReactIcon className={style.icon} /> Powered by React.js
        </div>
        <div className={style.icon_wrap}>
          <CheckIcon className={style.icon} /> Prettier
        </div>
        <div className={style.icon_wrap}>
          <BellIcon className={style.icon} /> 
        </div>
        
      </div>
    </footer>
  )
}

export default Footer;