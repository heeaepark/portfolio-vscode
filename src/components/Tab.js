import { useNavigate, useLocation } from 'react-router-dom';

import style from './../styles/Tab.module.css';

const Tab = ({Icon, path, title}) => {
  const navigate = useNavigate();
  const loacation = useLocation();
  const this_pathName = loacation.pathname;

  return (
    <div className={`${style.item} ${this_pathName === path && style.active }`} onClick={() => {
      navigate(path);
    }}>
      <Icon className={style.icon} />
      <p>{title}</p>
    </div>
  )
}

export default Tab;