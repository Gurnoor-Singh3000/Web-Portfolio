import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Forma",
      description: "2D shooter made in Unity",
      imgUrl: projImg1,
    },
    {
      title: "One Try",
      description: "Platformer game made in Godot",
      imgUrl: projImg2,
    },
    {
      title: "Web Portfolio",
      description: "Website made using ReactJS",
      imgUrl: projImg3,
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I’ve worked on projects across game development and web development, including games built with Unity and Godot and this personal portfolio website.</p>
                
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  
                  {/* 1. UPDATE THE NAV LABELS TO MATCH YOUR PROJECTS */}
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">{projects[0].title}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">{projects[1].title}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">{projects[2].title}</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    
                    {/* TAB 1: Shows Project 0 (Forma) */}
                    <Tab.Pane eventKey="first">
                      <Row className="justify-content-center">
                        <ProjectCard {...projects[0]} />
                      </Row>
                    </Tab.Pane>

                    {/* TAB 2: Shows Project 1 (One Try) */}
                    <Tab.Pane eventKey="second">
                      <Row className="justify-content-center">
                         <ProjectCard {...projects[1]} />
                      </Row>
                    </Tab.Pane>

                    {/* TAB 3: Shows Project 2 (Web Portfolio) */}
                    <Tab.Pane eventKey="third">
                      <Row className="justify-content-center">
                        <ProjectCard {...projects[2]} />
                      </Row>
                    </Tab.Pane>

                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}