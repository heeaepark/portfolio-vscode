import style from './../styles/ProjectCard.module.css';

const ProjectCard = ({ project }) => {
  return (
    <div className={style.card}>
      <div className={style.img_wrap}>
        <img src={project.image} className={style.card_img} alt={project.description}/>
        <div className={style.copy_tag}>
          {project.copy === 'personal' ? '🙋‍♀️' : '🏢'} {project.copy}
        </div>
      </div>
      <div className={style.card_content}>
        <h4 className={style.card_title}>{project.name}</h4>
        <p className={style.card_desc}>{project.description}</p>
        <div className={style.tags_warp}>
          {project.tags.map((item, idx) => {
            return (
              <span className={`${style.skill_tag}`} key={idx}>#{item}</span>
            )
          })}
        </div>
        {
          project.memo && <a className={style.memo} href={project.memo} target="_blank" rel="noopener noreferrer">회고록</a>
        }
        {
          project.career && <a className={style.career} href={project.career} target="_blank" rel="noopener noreferrer">프로젝트 기술서</a>
        }
        <div className={style.link_wrap}>
          {
            project.source_code && <a className={style.source_code} href={project.source_code} target="_blank" rel="noopener noreferrer">Github</a>
          }
          {
            project.demo && <a className={style.demo} href={project.demo} target="_blank" rel="noopener noreferrer">Demo</a>
          }
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;