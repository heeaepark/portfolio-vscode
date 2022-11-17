import { useState, useEffect } from 'react';
import axios from 'axios';

import ProjectCard from '../components/ProjectCard';

import style from './../styles/Projects.module.css'

const Projects = () => {
  const [project, setProject] = useState(null);
  const getData = async () => {
    try {
      const result = await axios.get('https://heeaepark.github.io/myapi/portfolio-api/project.json')
      console.log('Get data!');
      setProject(result.data);
    } catch (error) {
      console.log('Data load failed:'+ error);
    }
  }
  useEffect(()=>{
    getData();
  }, [])
  return (
    <>
    <h2 className={style.projects_title}>It's my works! 💻</h2>
      <div className={style.grid_container}>
        {
          project && project.map((item, idx) => {
            return (
              <ProjectCard project={item} key={idx}/>
            )
          })
        }
      </div>
    </>
  )
}

export default Projects;