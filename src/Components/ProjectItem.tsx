import "../Styles/ProjectItem.css"

interface ProjectData {
  data: {
    id: number;
    imageLocation: string;
    name: string;
    description: string;
    languages: string[];
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

const images = require.context('../Assets/ProjectImages', true);

function ProjectItem(data: ProjectData) {
  return (
    <>
      <div className="project_item_image_container">
        <img src={images(data.data.imageLocation)} alt="Project"></img>
      </div>
      <div className="project_item_top_container">
        <div className="project_item_top">
          <h1>{data.data.name}</h1>
          <p>{data.data.description}</p>
        </div>
        <div className="project_item_bottom_container">
          {data.data.languages.length > 0 ? <p>Languages: {data.data.languages.map((lang, i) => {
            if (i === data.data.languages.length - 1) return lang
            else return `${lang}, `
          })}</p> : null}
          {data.data.collaborators.length > 0 ? <p>Collaborators: {data.data.collaborators.map((person, i) => {
            if (i === data.data.collaborators.length - 1) return <a key={i} href={person.link} target="_blank" rel="noopener noreferrer">{person.name}</a>
            else return <><a key={i} href={person.link} target="_blank" rel="noopener noreferrer">{person.name}</a><p style={{ display: "inline" }}>, </p></>
          })}</p> : null}
          <p>Links: {data.data.links.map((link, i) => {
            if (i === data.data.links.length - 1) return <a key={i} href={link.link} target="_blank" rel="noopener noreferrer">{link.platform}</a>
            else return <><a key={i} href={link.link} target="_blank" rel="noopener noreferrer">{link.platform}</a><p style={{ display: "inline" }}>, </p></>
          })}</p>
        </div>
      </div>
    </>
  )
}

export default ProjectItem