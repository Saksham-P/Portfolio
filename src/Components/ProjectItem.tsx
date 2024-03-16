import "../Styles/ProjectItem.css"
import portfolio from "../Assets/portfolio.png"

interface ProjectData {
  data: {
    id: number;
    imageLocation: string;
    name: string;
    description: string;
    collaborators: {
      name: string;
      link: string;
    }[];
    links: {
      platform: string;
      link: string;
    }[];
  }
}


function ProjectItem(data: ProjectData) {
  return (
    <div id="project_item_background">
      <div>
        <img src={portfolio} alt="Project"></img>
      </div>
      <div>
        <div>
        <h1>{data.data.name}</h1>
        <p></p>
        </div>
        <div>
          <p>Collaborators:</p>
          <p>Links:</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem