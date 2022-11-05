import { useLocation } from 'react-router-dom';

import ReactIcon from './icons/ReactIcon';
import HtmlIcon from './icons/HtmlIcon';
import CssIcon from './icons/CssIcon';
import JsIcon from './icons/JsIcon';
import JsonIcon from './icons/JsonIcon';
import Tab from './Tab';

/* css import */
import style from './../styles/Tabsbar.module.css'

const Tabsbar = () => {
  const loacation = useLocation();
  const this_pathName = loacation.pathname;

  return (
    <div className={style.tabsbar}  style={this_pathName === '/code-examples' ? {display: 'none'} : {}}>
      <Tab Icon={ReactIcon} path={'/'} title={'home.jsx'}/>
      <Tab Icon={HtmlIcon} path={'/about'} title={'about.html'}/>
      <Tab Icon={CssIcon} path={'/contact'} title={'contact.css'}/>
      <Tab Icon={JsIcon} path={'/projects'} title={'projects.js'}/>
      <Tab Icon={JsonIcon} path={'/blog'} title={'blog.json'}/>
    </div>
  )
}

export default Tabsbar;