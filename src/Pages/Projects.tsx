import '../Styles/Projects.css'
import { passionProjects } from '../Data/passionProjects.js'
import ProjectItem from '../Components/ProjectItem'

function Projects() {
  return (
    <>
      <div>
        <button></button>
        <div>
          {passionProjects.map(project => (
            <ProjectItem key={project.id} data={project} />
          ))}
        </div>
        <button></button>
      </div>
    </>
  )
}

export default Projects