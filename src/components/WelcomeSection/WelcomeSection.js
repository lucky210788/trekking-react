import React from "react";

import MainNav from '../MainNav/MainNav'
import './WelcomeSection.scss';

export default function WelcomeSection(props) {
  return (
    <section className="welcome-section">
      <header className="header">
        <div className="container">
          <div className="logo-wrap">
            <a href="#">
              <img src={require("../../assets/img/logo.png")} alt="trekking"/>
            </a>
          </div>
          <MainNav/>
        </div>
      </header>
      <div className="welcome-text">
        <h1>Our clothing , your comfort</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore
          magna aliqua.</p>
      </div>
      <img src={require("../../assets/img/icon-down.png")}
           alt="trekking"
           className="down"
           onClick={() => props.scrollTo()}/>
    </section>
  );
}