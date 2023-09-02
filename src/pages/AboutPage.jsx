
import { GitHub,Instagram,Linkedin } from 'react-feather';
import './index.css'


const AboutPage = () => {
  return (
    <div className="about-container">
    <header className="hero">
    <h1>About This Blog</h1>
    </header>
    <p className='info'>
    Welcome to my blog! Here, I share my thoughts, experiences, and insights on various topics
    that interest me. From travel to technology, you'll find a diverse range of articles to explore.
  </p>
      
      <h2>Connect with Me</h2>
      <ul className="social-links">
        <li>
          <a href="https://github.com/Webdevava" target="_blank" rel="noopener noreferrer">
          <GitHub />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/ankurauti382/" target="_blank" rel="noopener noreferrer">
          <Instagram/>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/ankur-auti-862953250/" target="_blank" rel="noopener noreferrer">
            <Linkedin/>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AboutPage;