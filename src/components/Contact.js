import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { EnvelopeFill, Linkedin, Github } from 'react-bootstrap-icons';

export const Contact = () => {
  
  // 1. UPDATE YOUR DETAILS HERE
  const myEmail = "gurnoor030405@gmail.com";
  const githubLink = "https://github.com/Gurnoor-Singh3000";
  const linkedinLink = "https://www.linkedin.com/in/gurnoor-singh-20733438b";

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <p>Feel free to connect with me on social media or send me an email directly!</p>
                  
                  {/* Social Icons Container */}
                  <div className="d-flex gap-4 mt-4 align-items-center">
                    
                    {/* Gmail Icon */}
                    {/* Using mailto opens the default mail app. If you strictly want GMAIL specifically, change href to: 
                        `https://mail.google.com/mail/?view=cm&fs=1&to=${myEmail}` */}
                    <a href={`mailto:${myEmail}`} 
                       className="social-btn" 
                       style={styles.iconLink}>
                       <EnvelopeFill size={45} />
                    </a>

                    {/* LinkedIn Icon */}
                    <a href={linkedinLink} 
                       target="_blank" 
                       rel="noreferrer" 
                       style={styles.iconLink}>
                       <Linkedin size={45} />
                    </a>

                    {/* GitHub Icon */}
                    <a href={githubLink} 
                       target="_blank" 
                       rel="noreferrer" 
                       style={styles.iconLink}>
                       <Github size={45} />
                    </a>
                  </div>

                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

// Simple internal styles to make the icons look good (white and hoverable)
const styles = {
  iconLink: {
    color: '#fff',     // White icon color
    textDecoration: 'none',
    transition: '0.3s',
    padding: '15px',
    border: '1px solid rgba(255,255,255,0.5)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '70px',
    height: '70px',
    background: 'rgba(255, 255, 255, 0.1)'
  }
}