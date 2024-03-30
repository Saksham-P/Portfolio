import { Link } from 'react-router-dom'
import '../Styles/Contact.css'

function Contact() {
  return (
    <>
      <div id="contact_background">
        <div id='contact_link_section'>
          <div className='contact_links'>
            <h1>Explore My Projects</h1>
            <Link to='/projects#passion'>Passion Projects</Link>
            <Link to='/projects#hackathon'>Hackathon Projects</Link>
            <Link to='/projects#course'>Course Projects</Link>
          </div>
          <div className='contact_links'>
            <h1>My Journey</h1>
            <Link to='/journey#experience'>Experience</Link>
            <Link to='/journey#education'>Education</Link>
          </div>
          <div className='contact_links'>
            <h1>Find Me</h1>
            <a href='https://www.linkedin.com/in/sakshamp7' target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href='https://github.com/saksham-P' target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
        <div id='contact_me_section'>
          <h1>Get In Touch</h1>
          <form>
            <div id='contact_me_input'>
              <input className="input" type="text" name="name" placeholder="Name" />
              <input className="input" type="email" name="email" placeholder="Email Adress" />
            </div>
            <textarea id="contact_message" className="input" name="message" placeholder="Your Message"></textarea>
            <button id="contact_button" type="button" disabled>Under Construction</button>
          </form>
        </div>
      </div>
      <h1 id='contact_footer'>© Made with &lt;/&gt; by Saksham. 2024</h1>
    </>
  )
}

export default Contact