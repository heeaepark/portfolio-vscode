import style from './../styles/Tags.module.css';

const TagOpen = (props) => {
  const attr = props.attr;
  const chkAttr = () => {
    switch (attr){
      case undefined :
        return <span className={style.attr}>{ props.attr }</span>
      default : 
        return <span className={style.attr}>{ props.attr }<span className={style.tagname}>{' ='}</span></span>
    }
  } 
  return (
    <div className={style.tag}>
      {'<'} 
      <span className={style.tagname}> { props.tagname } </span>
        {
          chkAttr()
        }
      <span className={style.attr_value}> { props.attrValue } </span>
      {'>'}
    </div>
  )
}



const TagClose = (props) => {
  return (
    <div className={style.tag}>
      {'</'} 
      <span className={style.tagname_close}> { props.tagname } </span>
      {'>'}
    </div>
  )
}

export { TagOpen, TagClose };