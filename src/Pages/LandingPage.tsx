import '../Styles/LandingPage.css'
import portrait from '../Assets/portfolio.png'
import codeImage from '../Assets/codeImageLight.png'
import Contact from '../Components/Contact'

window.onscroll = function () {
  const aboutSection = document.getElementById('about_section');

  if (aboutSection != null) {
    let top = aboutSection.getBoundingClientRect().top;

    if (top < 0) {
      let el1 = document.getElementById('about_left_section');
      let el2 = document.getElementById('about_left_text');
      let el3 = document.getElementById('code_img_section');

      if (el1 != null) {
        el1.classList.remove('about_left_section_fixed');
        el1.classList.add('about_left_section_fixed_removed');
      }

      if (el2 != null) {
        el2.classList.remove('fixed');
        el2.classList.add('absolute');
      }

      if (el3 != null) {
        el3.classList.remove('fixed');
        el3.classList.add('absolute');
      }

    } else {
      let el1 = document.getElementById('about_left_section');
      let el2 = document.getElementById('about_left_text');
      let el3 = document.getElementById('code_img_section');

      if (el1 != null) {
        el1.classList.add('about_left_section_fixed');
        el1.classList.remove('about_left_section_fixed_removed');
      }

      if (el2 != null) {
        el2.classList.add('fixed');
        el2.classList.remove('absolute');
      }

      if (el3 != null) {
        el3.classList.add('fixed');
        el3.classList.remove('absolute');
      }
    }
  }
};

function LandingPage() {
  return (
    <>
      <div className='intro_container'>
        <div className="intro_section fixed">
          <div className="intro_text">
            <p>Hi! I am</p>
            <h1>Saksham Puri</h1>
            <div className='intro_links'>
              <a href='https://www.linkedin.com/in/sakshamp7'>LinkedIn</a>
              <a href='https://github.com/saksham-P'>GitHub</a>
            </div>
          </div>
          <div className='intro_img_container'>
            <div className='intro_img_background'>
              <img className='intro_img' src={portrait} alt='portrait'></img>
            </div>
          </div>
        </div>
      </div>
      <div id='about_section'>
        <div id='about_left_container'>
          <div id='about_left_section' className='about_left_section_fixed'>
            <h1>About Me</h1>
            <div id='about_left_text' className='fixed'>
              <p>I am a Software Engineer and an adventure seeker. I am a 3rd year Computer Science student
                at University of Calgary, and a Co-op AI developer Student at City of Calgary. I am interested in
                all things tech related, and mostly passionate about Machine Learning and it's applications
                specifically within Computer Vision.</p>
            </div>
          </div>
        </div>
        <div id='code_img_section' className="intro_section fixed">
          <div className="intro_text hidden">
            <p>Hi! I am</p>
            <h1>Saksham Puri</h1>
            <div className='intro_links'>
              <a href='https://www.linkedin.com/in/sakshamp7'>LinkedIn</a>
              <a href='https://github.com/saksham-P'>GitHub</a>
            </div>
          </div>
          <div className='intro_img_container'>
            <div className='intro_img_background'>
              <img className='intro_img' src={codeImage} alt='portrait'></img>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </>
  )
}

export default LandingPage