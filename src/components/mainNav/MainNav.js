import React from 'react';

import './mainNav.scss';

export default function MainNav() {
    return (
        <nav>
            <ul className="main-nav">
                <li><a href="#" className="main-nav-item">Home</a></li>
                <li><a href="#" className="main-nav-item">Products</a></li>
                <li><a href="#" className="main-nav-item">
                    <img src={require("../../assets/img/shopping-cart.svg")} alt="trekking"/>
                </a></li>
            </ul>
        </nav>
    );
}