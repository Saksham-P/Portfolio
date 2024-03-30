import '../Styles/Contact.css'
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <>
      <div id="contact_background">
        <div id='contact_link_section'>
          <div className='contact_links'>
            <h1>Explore My Projects</h1>
            <a href='/projects#passion'>Passion Projects</a>
            <a href='/projects#hackathon'>Hackathon Projects</a>
            <a href='/projects#course'>Course Projects</a>
          </div>
          <div className='contact_links'>
            <h1>My Journey</h1>
            <a href='/journey#experience'>Experience</a>
            <a href='/journey#education'>Education</a>
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
            <button id="contact_button" type="button">Send</button>
          </form>
        </div>
      </div>
      <h1 id='contact_footer'>© Made with &lt;/&gt; by Saksham. 2024</h1>
    </>
  )
}

export default Contact