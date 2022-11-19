import style from './../styles/Setting.module.css';

const themeItems = [
  {
    name:"GitHub Dark",
    img: "/github-dark.png",
    publisher: "GitHub",
    theme: "github-dark",
  },
  {
    name:"Dracula",
    img: "/dracula.png",
    publisher: "Dracula Theme",
    theme: "dracula",
  },
]

const Setting = () => {
  const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  };
  return (
    <>
      <h2 className={style.setting_title}>Setting Color Themes ⚙️</h2>
      <div className={style.theme_items}>
        {
          themeItems.map(({name, img, publisher, theme}) => {
            return (
              <div key={theme} className={style.theme_item}>
                <div className={style.img_wrap}>
                  <img className={style.theme_img} src={`${process.env.PUBLIC_URL}/images${img}`} alt={`${theme} theme`} />
                </div>
                <h3>{name}</h3>
                <h5>{publisher}</h5>
                <button onClick={() => {
                  setTheme(theme)
                }}>set color theme</button>
              </div>
            )
          })
        }
      </div>
    </>
  )
}
export default Setting;