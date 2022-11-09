import style from './../styles/TagContents.module.css'

const TagContents = (props) => {
  return (
    <div className={style.tag_contents} style={{paddingLeft: `${props.indent * 0.5}em`}}>
      { props.children }
    </div>
  )
}

export default TagContents;