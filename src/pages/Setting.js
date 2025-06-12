import style from "./../styles/Setting.module.css";

const themeItems = [
  {
    name: "GitHub Dark",
    img: "/github-dark.png",
    publisher: "GitHub",
    theme: "githubDark",
  },
  {
    name: "Dracula ",
    img: "/dracula.png",
    publisher: "Dracula Theme",
    theme: "dracula",
  },
];

const Setting = () => {
  const setTheme = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  };

  return (
    <>
      <h2 className={style.setting_title}>Setting Color Themes ⚙️</h2>
      <div className={style.theme_items}>
        {themeItems.map((item, idx) => {
          return (
            <div key={idx} className={style.theme_item}>
              <div className={style.img_wrap}>
                <img
                  className={style.theme_img}
                  src={`${process.env.PUBLIC_URL}/images${item.img}`}
                  alt={`${item.theme} theme`}
                />
              </div>
              <h3>{item.name}</h3>
              <h5>{item.publisher}</h5>
              <div>
                <input
                  type="radio"
                  id={item.theme}
                  name="theme"
                  value={item.theme}
                  defaultChecked={localStorage.getItem("theme") === item.theme}
                  onClick={() => {
                    setTheme(item.theme);
                  }}
                />
                <label htmlFor={item.theme}> set theme </label>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Setting;
