import '../Styles/Projects.css'

import { useState } from 'react'
import { passionProjects } from '../Data/passionProjects.js'
import { hackathonProjects } from '../Data/hackathonProjects.js'
import { courseProjects } from '../Data/courseProjects'

import ProjectItem from '../Components/ProjectItem'
import Contact from '../Components/Contact'


function Projects() {
  const [passionIndex, setPassionIndex] = useState(0);
  const [hackathonIndex, setHackathonIndex] = useState(0);
  const [courseIndex, setCourseIndex] = useState(0);

  function nextProject(projectType: number) {
    if (projectType === 0) {
      setPassionIndex(index => {
        if (index === passionProjects.length - 1) return 0
        return index + 1
      })
    } else if (projectType === 1) {
      setHackathonIndex(index => {
        if (index === hackathonProjects.length - 1) return 0
        return index + 1
      })
    } else if (projectType === 2) {
      setCourseIndex(index => {
        if (index === courseProjects.length - 1) return 0
        return index + 1
      })
    }
  }

  function prevProject(projectType: number) {
    if (projectType === 0) {
      setPassionIndex(index => {
        if (index === 0) return passionProjects.length - 1
        return index - 1
      })
    } else if (projectType === 1) {
      setHackathonIndex(index => {
        if (index === 0) return hackathonProjects.length - 1
        return index - 1
      })
    } else if (projectType === 2) {
      setCourseIndex(index => {
        if (index === 0) return courseProjects.length - 1
        return index - 1
      })
    }
  }

  return (
    <>
      <h1 className='project_title' id='passion'>Passion Projects</h1>
      <div className='project_container'>
        <button className='projects_left_button direction_button' onClick={() => prevProject(0)}>&#11207;</button>
        <div className='project_item_container'>
          {passionProjects.map(project => (
            <div key={project.id} className="project_item_background" style={{ translate: `${-100 * passionIndex}%` }}>
              <ProjectItem key={project.id} data={project} />
            </div>
          ))}
        </div>
        <button className='projects_right_button direction_button' onClick={() => nextProject(0)}>&#11208;</button>
      </div>
      <h1 className='project_title' id='hackathon'>Hackathon Projects</h1>
      <div className='project_container'>
        <button className='projects_left_button direction_button' onClick={() => prevProject(1)}>&#11207;</button>
        <div className='project_item_container'>
          {hackathonProjects.map(project => (
            <div key={project.id} className="project_item_background" style={{ translate: `${-100 * hackathonIndex}%` }}>
              <ProjectItem key={project.id} data={project} />
            </div>
          ))}
        </div>
        <button className='projects_right_button direction_button' onClick={() => nextProject(1)}>&#11208;</button>
      </div>
      <h1 className='project_title' id='course'>Course Projects</h1>
      <div className='project_container'>
        <button className='projects_left_button direction_button' onClick={() => prevProject(2)}>&#11207;</button>
        <div className='project_item_container'>
          {courseProjects.map(project => (
            <div key={project.id} className="project_item_background" style={{ translate: `${-100 * courseIndex}%` }}>
              <ProjectItem key={project.id} data={project} />
            </div>
          ))}
        </div>
        <button className='projects_right_button direction_button' onClick={() => nextProject(2)}>&#11208;</button>
      </div>
      <Contact />
    </>
  )
}

export default Projects