import React from "react";
import ParticlesBg from "particles-bg";
import { Fade } from "react-awesome-reveal";

const Header = () => {
  return (
    <header id="home">
      <ParticlesBg type="lines" bg={true} />

      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#portfolio">
              Portfolio
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text banner-border">
          <Fade bottom>
            <h1 className="responsive-headline">Nathan Downes</h1>
          </Fade>
          <Fade bottom duration={1200}>
            <h2 className="white-text"> Software Engineer</h2>
          </Fade>
          <hr />
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
