import React from 'react'
import virus from '../img/bacteria.png'
// import styles from './Header.module.css'

function Header() {
    return (
        <nav style={{backgroundColor: "#49609e"}}>
            <div className="nav-wrapper container-fluid">
                <a href="/" className="brand-logo center">
                    <img src={virus} alt="virus" width="50px" height="50px" />COVID-19
                </a>
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
