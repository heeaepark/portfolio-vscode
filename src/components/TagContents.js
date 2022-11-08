import style from './../styles/TagContents.module.css'

const TagContens = ({props, children}) => {
  return (
    <div className={style.tag_contents} style={{paddingleft: props.indent * '1rem'}}>
      {children}
    </div>
  )
}

export default TagContens;