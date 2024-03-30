import "../Styles/JourneyItem.css"

interface JourneyData {
  data: {
    id: number;
    company: string;
    title: string;
    description: string;
    points: string[];
  }
}

function JourneyItem(data: JourneyData) {
  return (
    <>
      <div className="journey_item_first">
        <h1>{data.data.company}</h1>
        <h2>{data.data.title}</h2>
        <p>{data.data.description}</p>
      </div>
      <ul className="journey_item_points" style={{listStyleType: "disc"}}>
        {data.data.points.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  )
}

export default JourneyItem