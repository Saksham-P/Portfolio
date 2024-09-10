import { useRef } from 'react';
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser';
import '../Styles/Contact.css'

function Contact() {
  const form = useRef(null);

  const sendEmail = (e: any) => {
    let submit_button = document.getElementById('contact_button');
    if (submit_button != null)
      submit_button.textContent = 'Sending...';

    if (form.current != null) {
      e.preventDefault();
      emailjs.sendForm('service_78pccvp', 'contact_form', form.current, {
        publicKey: 'OywOhfbJGj3SsE9Ce',
      }).then(() => {
        console.log('SUCCESS!');
        let elem = document.getElementById('contact_me_input');
        let elem2 = document.getElementById('contact_message');

        if (elem != null) {
          let inputs = elem.getElementsByClassName("input");
          if (inputs != null) {
            for (let i = 0; i < inputs.length; i++) {
              inputs[i].textContent = '';
            }
          }
        }

        if (elem2 != null)
          elem2.textContent = '';

        if (submit_button != null) {
          submit_button.textContent = 'Sent!';
          submit_button.setAttribute("disabled", "disabled");
          submit_button.style.opacity = '0.8';
        }

      }, (error) => {
        console.log('FAILED...', error.text);
      },
      );
    } else {
      console.log("form.current is null or undefined")
    }
  };

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
          <form ref={form} onSubmit={sendEmail}>
            <div id='contact_me_input'>
              <input className="input" type="text" name="sender_name" required placeholder="Name" />
              <input className="input" type="email" name="sender_email" required placeholder="Email Address" />
            </div>
            <textarea id="contact_message" className="input" name="message" required placeholder="Your Message"></textarea>
            <button id="contact_button" type="submit">Submit</button>
          </form>
        </div>
      </div>
      <h1 id='contact_footer'>© Made with &lt;/&gt; by Saksham. 2024</h1>
    </>
  )
}

export default Contact