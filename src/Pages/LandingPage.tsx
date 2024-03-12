import '../Styles/LandingPage.css'
import portrait from '../Assets/portrait.png'
import codeImage from '../Assets/codeImageLight.png'

function LandingPage() {
  return (
    <>
      <div id="intro_section">
        <div id="intro_text">
          <p>Hi! I am</p>
          <h1>Saksham Puri</h1>
          <div id='intro_links'>
            <a href='https://www.linkedin.com/in/sakshamp7'>LinkedIn</a>
            <a href='https://github.com/saksham-P'>GitHub</a>
          </div>
        </div>
        <div id='intro_img_container'>
          <img id='intro_img' src={portrait} alt='portrait'></img>
        </div>
      </div>
      <div id="intro_section2">
        <div id="intro_text">
          <p>Hi! I am</p>
          <h1>Saksham Puri</h1>
          <div id='intro_links'>
            <a href='https://www.linkedin.com/in/sakshamp7'>LinkedIn</a>
            <a href='https://github.com/saksham-P'>GitHub</a>
          </div>
        </div>
        <img id='intro_img' src={portrait} alt='portrait'></img>
      </div>
      <div id='about_section'>
        <div id='about_left_section'>
          <h1>About Me</h1>
          <div id='about_left_text'>
            <p>I am a Software Engineer and an adventure seeker. I am a 3rd year Computer Science student
              at University of Calgary, and a Co-op AI developer Student at City of Calgary. I am interested in
              all things tech related, and mostly passionate about Machine Learning and it's applications
              specifically within Computer Vision.</p>
          </div>
          <h1 className='hidden'>About Me</h1>
          <div id='about_left_text2'>
            <p>I am a Software Engineer and an adventure seeker. I am a 3rd year Computer Science student
              at University of Calgary, and a Co-op AI developer Student at City of Calgary. I am interested in
              all things tech related, and mostly passionate about Machine Learning and it's applications
              specifically within Computer Vision.</p>
          </div>
        </div>
        <div id="intro_section3">
          <div id="intro_text" className='hidden'>
            <p>Hi! I am</p>
            <h1>Saksham Puri</h1>
            <div id='intro_links'>
              <a href='https://www.linkedin.com/in/sakshamp7'>LinkedIn</a>
              <a href='https://github.com/saksham-P'>GitHub</a>
            </div>
          </div>
          <div id='intro_img_container'>
            <img id='intro_img3' src={codeImage} alt='codingIcons'></img>
          </div>
        </div>
      </div>
    </>
  )
}

export default LandingPage