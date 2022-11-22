import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

import ReactIcon from './icons/ReactIcon';
import HtmlIcon from './icons/HtmlIcon';
import CssIcon from './icons/CssIcon';
import JsIcon from './icons/JsIcon';
import JsonIcon from './icons/JsonIcon';
import FolderIcon from './icons/FolderIcon';
import ChevronRightIcon from './icons/ChevronRightIcon';

/* css import */
import style from './../styles/Explorer.module.css';

const explorerFiles = [
  {
    Icon: ReactIcon,
    path: '/',
    title: 'home.jsx'
  },
  {
    Icon: HtmlIcon,
    path: '/about',
    title: 'about.html'
  },
  {
    Icon: CssIcon,
    path: '/contact',
    title: 'contact.css'
  },
  {
    Icon: JsIcon,
    path: '/projects',
    title: 'projects.js'
  },
  {
    Icon: JsonIcon,
    path: '/blog',
    title: 'blog.json'
  },
  {
    Icon: FolderIcon,
    path: '/code-examples',
    title: 'code-examples'
  },
]

const Explorer = () => {
  const navigate = useNavigate();
  const loacation = useLocation();
  const this_pathName = loacation.pathname;
  const [toggle_menu, setToggle_menu] = useState(true);
  
  return (
    <section className={style.explorer}>
      <div className={style.title}>Explorer</div>
      <div className={style.heading}
        onClick={() => { setToggle_menu(toggle_menu => !toggle_menu) }}
      >
        <ChevronRightIcon 
          className={style.icon} 
          style={ toggle_menu ? { transform: 'rotate(90deg)' } : {} }
        /> portfolio
      </div>
      <div 
        className={style.file_list}
        style={ toggle_menu ? { display: 'block' } : { display: 'none' } }
      >
        {
          explorerFiles.map(({Icon, path, title}) => {
            return (
              <div 
                className={style.file} 
                onClick={() => {
                  navigate(path);
                }} 
                key={path}
                style={ this_pathName === path  ? { backgroundColor: '#24292e' } : {} }
              >
                <Icon className={style.icon} /> 
                <span>{title}</span>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Explorer;
