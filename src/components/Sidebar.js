import { useNavigate, useLocation } from 'react-router-dom';

import FilesIcon from './icons/FilesIcon';
import CodeIcon from './icons/CodeIcon';
import PencilIcon from './icons/PencilIcon';
import MailIcon from './icons/MailIcon';
import ExtentionIcon from './icons/ExtensionIcon';
import AccountIcon from './icons/AccountIcon';
import SettingIcon from './icons/SettingIcon';

/* css import */
import style from './../styles/Sidebar.module.css';

const sidebarTopItems = [
  {
    Icon: FilesIcon,
    path: '/',
  },
  {
    Icon: CodeIcon,
    path: '/projects',
  },
  {
    Icon: PencilIcon,
    path: '/blog',
  },
  {
    Icon: MailIcon,
    path: '/contact',
  },
  {
    Icon: ExtentionIcon,
    path: '/code-examples',
  },
]

const sidebarBottomItems = [
  {
    Icon: AccountIcon,
    path: '/about',
  },
  {
    Icon: SettingIcon,
    path: '/setting',
  },
]

const Sidebar = () => {
  const navigate = useNavigate();
  const loacation = useLocation();
  const this_pathName = loacation.pathname;
  
  return (
    <aside className={style.sidebar}>
      <div className={style.sidebar_top}>
        {
          sidebarTopItems.map(({Icon, path}) => {
            return (
              <button onClick={() => {
                navigate(process.env.PUBLIC_URL + path)
              }} key={path}>
                <Icon className={style.icon} fill={ this_pathName === path ? 'rgb(225, 228, 232)' : 'rgb(106, 115, 125)' } />
              </button>
            )
          })
        }
      </div>
      <div className={style.sidebar_bottom}>
      {
        sidebarBottomItems.map(({Icon, path}) => {
          return (
            <button onClick={() => {
              navigate(process.env.PUBLIC_URL + path)
            }} key={path}>
              <Icon className={style.icon} fill={ this_pathName === path ? 'rgb(225, 228, 232)' : 'rgb(106, 115, 125)' } />
            </button>
          )
        })
      }
      </div>
    </aside>
  )
}

export default Sidebar;