import React from 'react';

import './footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="left-block">
          <p className="footer-title">Trekking</p>
          <p className="footer-main-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className="right-block">
          <ul className="footer-nav">
            <li><a href="#">credits</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">about</a></li>
            <li><a href="#">contact</a></li>
          </ul>
          <p className="author">Design by gianluca cosetta</p>
        </div>
      </div>
    </footer>
  );
}