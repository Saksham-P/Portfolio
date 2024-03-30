import "../Styles/Journey.css"
import { experience } from "../Data/experience"
import { education } from "../Data/education"
import JourneyItem from "../Components/JourneyItem"
import Contact from "../Components/Contact"

function Journey() {
  return (
    <>
      <div className="journey_section" id="experience">
        <h1>Experience</h1>
        {experience.map((item, i) => (
          <JourneyItem key={item.id} data={item} />
        ))}
      </div>
      <div className="journey_section" id="education">
        <h1>Education</h1>
        {education.map((item, i) => (
          <JourneyItem key={item.id} data={item} />
        ))}
      </div>
      <Contact />
    </>
  )
}

export default Journey