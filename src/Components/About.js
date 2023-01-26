import React from "react";
import { Fade } from "react-awesome-reveal";

const About = () => {
  return (
    <section id="about">
      <Fade duration={1000}>
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="pic" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>
              My main technical strengths are based within the Javascript
              ecosystem. At the moment I am mostly working with React and have
              some experience with Redux, React Router and React Native.
            </p>
            <p>
              I have experience with software testing and use the Jest framework
              for Javascript. I have basic a basic knowledge of CRUD in Postgres
              and an understanding of GraphQL. I also like to make use of
              Node.js and Express in Google Cloud Functions, mostly as proxies
              for third party API's that do not support CORS.
            </p>
            <p>
              I use Github for version control and have experience with the peer
              review process. I was introduced to Google Cloud Platform at a
              previous place of work. I enjoy using Firebase, Firestore and
              Kubernetes in my personal projects. I also have a few apps that
              use Google Maps.
            </p>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default About;
