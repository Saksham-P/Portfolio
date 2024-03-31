import { Link, useNavigate } from 'react-router-dom';
import '../Styles/Header.css'
import { useEffect, useState } from 'react';

const switchTheme = () => {
  const rootElem = document.documentElement;
  let dataTheme = rootElem.getAttribute('data-theme'), newTheme;
  newTheme = (dataTheme === 'light') ? 'dark' : 'light';
  rootElem.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
}

function scrollToBottom() {
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}

function Header() {
  const [open, setOpen] = useState(false);
  const [matches, setMatches] = useState(window.matchMedia("(max-width: 910px)").matches);
  const navigate = useNavigate();

  useEffect(() => {
    window.matchMedia("(max-width: 910px)").addEventListener('change', e => setMatches(e.matches));
  }, []);

  return (
    <>
      <div id="header_background">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="14 -22 158 158" onClick={() => navigate("/")} cursor={"pointer"}>
          <path d="M 40 2 c -10.2 2.1 -20 10 -23.4 18.8 c -2.6 7.1 -2.3 17.6 0.8 23.7 c 4.9 9.4 11.8 13.3 31.7 17.9
           c 16.2 3.6 22.4 6.7 25 12 c 1.8 3.9 2.1 12.7 0.5 15.9 c -6.9 13.5 -29.7 15.5 -53.2 4.8 l -6.7 -3 v 7.5 c 
           0 8.6 -0.7 8 13.5 11.5 c 25.7 6.3 49.4 1.7 58.2 -11.3 c 6.3 -9.5 6.6 -25 0.5 -34.7 c -5.1 -8.3 -15.7 -13.4 
           -36.7 -17.6 c -15.7 -3.2 -20.5 -7.2 -20.5 -17.1 c 0 -6.7 2.9 -11.1 9.5 -14.4 c 1.667 -0.833 4.9 -2.5 10.7 
           -2.5 l 41.8 -0.3 c 32.1 -0.2 48.7 0 51.2 0.8 c 10.2 3 15.2 12.8 12.7 24.8 c -0.9 4.5 -2 6.5 -4.9 9.3 c 
           -4.8 4.6 -10 5.9 -23.4 5.9 h -10.6 v -27 h -15 v 87 h 15 v -47.8 l 15.3 -0.4 c 12.8 -0.4 16.1 -0.8 21 
           -2.7 c 12.2 -4.8 18.7 -15.1 18.7 -29.5 c 0 -14.8 -5.3 -23.7 -17.3 -29.2 c -2.067 -0.967 -6.1 -2.9 -10.7 
           -2.9 l -52 -0.2 c -28.6 -0.1 -49.2 0.2 -50.3 0.4 z" fill='var(--logo-fill)' />
        </svg>
        <div id='header_link_section'>
          <div className='hamburger_menu' onClick={() => setOpen(!open)}>
            <div style={{ transform: `${open ? 'rotate(45deg)' : 'rotate(0deg)'}` }} />
            <div style={{ transform: `${open ? 'translateX(100%)' : 'translateX(0)'}`, opacity: `${open ? 0 : 1}` }} />
            <div style={{ transform: `${open ? 'rotate(-45deg)' : 'rotate(0deg)'}` }} />
          </div>
          <div className='humburger_links' style={{transform: `${((matches && open) ||(!matches)) ? 'translateY(0)': 'translateY(-200%)'}`}}>
            <Link to="/projects" className="header-links">Projects</Link>
            <Link to="/journey" className="header-links">My Journey</Link>
            <button className="header-links" onClick={scrollToBottom}>Contact</button>
          </div>
          <button id='header_theme_button' onClick={switchTheme}></button>
        </div>
      </div>
    </>
  )
}

export default Header