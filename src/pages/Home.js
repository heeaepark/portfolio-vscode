import { useNavigate } from 'react-router-dom';

import VscodeIcon from './../components/icons/VscodeIcon';

import style from './../styles/Home.module.css';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className={style.home}>
      <div className={style.inner}>
        <VscodeIcon className={style.icon_vscode} />
        <div className={style.typewriter}>
          <h1>Hello 'Hee-ae' World!</h1>
        </div>
        <p className={style.heading}>
          I'm Markup & Interactive web Developer
        </p>
        <div className={style.buttons}>
          <button onClick={() => {
            navigate(process.env.PUBLIC_URL + '/projects');
          }} className={`${style.button} ${style.button_work}`}>View Works</button>
          <button onClick={() => {
            navigate(process.env.PUBLIC_URL + '/contact');
          }} className={`${style.button} ${style.button_contact}`}>Contact me</button>
        </div>
      </div>
    </div>
  )
}

export default Home;