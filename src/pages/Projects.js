import axios from 'axios';

const Projects = () => {
  axios.get('https://heeaepark.github.io/myapi/portfolio-api/project.json')
  .then((결과)=>{
    console.log(결과.data)
  })
  .catch(()=>{
    console.log('실패함')
  })
  return (
    <div>
      projects
    </div>
  )
}

export default Projects;