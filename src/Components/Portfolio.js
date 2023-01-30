import React from "react";
import { Fade } from "react-awesome-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlaneCircleCheck,
  faAddressBook,
  faHeartPulse,
  faLaptopCode
} from "@fortawesome/free-solid-svg-icons";

const projects = [
  {
    title: "Blood Pressure Recorder",
    text: "Records blood pressure readings.",
    frontEndGithub: "https://github.com/thisprojects/blood-pressure-monitor",
    backEndGithub: "https://github.com/thisprojects/blood-pressure-node",
    link: "http://129.151.68.78/",
    published: "Jan 2023",
    tech: (
      <ul className="tech-list">
        <li>Frontend: Next JS / Typescript</li>{" "}
        <li>StateManagement: React-Context</li>{" "}
        <li>Backend: Node / Typescript</li>
        <li>Database: Mongo DB</li>
        <li>Authentication: JWT</li>
        <li>Infrastructure: Oracle Compute Instance</li>
        <li>Build: Docker-Compose</li>
      </ul>
    ),
    icon: (
      <FontAwesomeIcon
        icon={faHeartPulse}
        className="portfolio-icons"
        size="10x"
      />
    ),
  },
  {
    title: "CRM System",
    text: "A basic CRM system, built as part of my Msc dissertation.",
    frontEndGithub: "https://github.com/thisprojects/artcrm-react",
    backEndGithub: "https://github.com/thisprojects/artcrm-springboot",
    link: "http://129.151.87.221/",
    published: "Sep 2022",
    tech: (
      <ul className="tech-list">
        <li>Frontend: React / Typescript</li>
        <li>Backend: Java Springboot</li> <li>Database: Postgres</li>
        <li>Build: Docker-Compose</li>
        <li>Tests: Jest / React Test Library</li>
        <li>Infrastructure: Oracle Compute Instance</li>
      </ul>
    ),
    icon: (
      <FontAwesomeIcon
        icon={faAddressBook}
        className="portfolio-icons"
        size="10x"
      />
    ),
  },
  {
    title: "Aviation Checklist",
    text: "A 'To-do' style checklist.",
    frontEndGithub: "https://github.com/thisprojects/aviation-checklist",
    link: "https://aviation-checklist-bc1d2.web.app/",
    published: "May 2020",
    tech: (
      <ul className="tech-list">
        <li>Frontend: React</li> <li>StateManagement: Redux</li>{" "}
        <li>Routing: React Router</li>
        <li>Infrastructure: Firebase</li>
      </ul>
    ),
    icon: (
      <FontAwesomeIcon
        icon={faPlaneCircleCheck}
        className="portfolio-icons"
        size="10x"
      />
    ),
  },
  {
    title: "Javascript Web Console",
    text: "Test your JS API knowledge.",
    github: "https://github.com/thisprojects/js-trainer",
    link: "aviation checklist",
    published: "Mar 2020",
    tech: (
      <ul className="tech-list">
        <li>Frontend: React</li> <li>StateManagement: Redux</li>{" "}
        <li>Routing: React Router</li>
        <li>Tests: Jest</li>
        <li>Infrastructure: Firebase</li>
        <li>YouTube: <a href="https://www.youtube.com/watch?v=HVVNR96GhPk&t=43s">Tutorial</a></li>
      </ul>
    ),
    icon: (
      <FontAwesomeIcon
        icon={faLaptopCode}
        className="portfolio-icons"
        size="10x"
      />
    ),
  },
];

const Portfolio = () => {
  return (
    <>
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div>
            <div>
              <h2>Projects</h2>
              <div id="portfolio-wrapper" className="portfolio-box-container">
                {projects.map((item) => (
                  <div className="project-box">
                    <div className="profile-item-content">
                      <div className="profile-hero">
                        <h2>{item.title}</h2>
                        <p>{item.text}</p>
                        <div> {item.icon} </div>
                      </div>
                      <div>
                      <h4>Technology</h4>
                        {item.tech}</div>
                    </div>
                    <div className="profile-item-footer">
                      <a href={item.frontEndGithub}>{item.backEndGithub && "Frontend "}Github</a>
                      {item.backEndGithub && <a href={item.backEndGithub}>Backend Github</a>}
                      <a href={item.link}>Launch App</a>
                      <span>Published: {item.published}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    </>
  );
};

export default Portfolio;
