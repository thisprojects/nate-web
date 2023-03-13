import React from "react";
import pic from "./me.jpg";
import { Fade } from "react-awesome-reveal";

const About = () => {
  return (
    <section id="about">
      <Fade duration={1000}>
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src={pic} />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>
              Hello! I'm a software engineer with 3 years of experience, having just taken a year out
              to complete an MSc in Software Engineering. Studying for an MSc has proven invaluable in further bolstering my knowledge of software engineering. 
              Quality assurance, requirements gathering, critical systems, software design and cyber-security are the topics which have interested me the most. 
            </p>
             <p>
              My main technical strengths are based within the Javascript / Typescript
              ecosystem, with most of my experience being based around the React framework. I also have some experience working with RESTFUL 
              backend API's in Node.js (with express) and enjoy using the Springboot framework on personal projects (Oracle Java Progammer I certified). I have 
              had some basic experience with Golang and have recently been experimenting with gin HTTP framework. 
            </p>
            <p>
              I value quality in my work, and am proficient in using Jest and React Testing Library test frameworks. 
              I have some experience using databases, having worked with both Postgres and MongoDB. I'm a big fan of Docker and have a little knowledge
              of Kubernetes. I have a basic working knowledge of GraphQL.
            </p>
            <p>
              From an infrastructure point of view, most of my professional experience has been based around Google Cloud Platform. Personal projects
              have utilised compute instances from AWS and Oracle Cloud. This web-portfolio is hosted on Google Firebase.
            </p>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default About;
