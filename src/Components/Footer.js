import React from "react";
import { Fade } from "react-awesome-reveal";

const Footer = () => {
  return (
    <footer>
      <div className="row">
        <Fade bottom>
          <div className="twelve columns">
            <ul className="copyright">
              <li>&copy; Nathan Downes 2023</li>
            </ul>
          </div>
        </Fade>

        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
