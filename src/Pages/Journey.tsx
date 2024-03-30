import "../Styles/Journey.css"
import { experience } from "../Data/experience"
import { education } from "../Data/education"
import { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import JourneyItem from "../Components/JourneyItem"
import Contact from "../Components/Contact"

function Journey() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1))
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }
  }, [location,])

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