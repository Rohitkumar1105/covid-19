import React from 'react'
import virus from '../img/icon-infected.png'
// import styles from './Header.module.css'

function Header() {
    return (
        <nav>
            <div className="nav-wrapper container">
                <a href="/" className="brand-logo">
                    <img src={virus} alt="virus" /></a>
                {/* <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a href="sass.html">Sass</a></li>
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">JavaScript</a></li>
                </ul> */}
            </div>
        </nav>
    )
}

export default Header
