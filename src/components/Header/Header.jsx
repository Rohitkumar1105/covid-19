import React from 'react'
import covid from '../../img/covid.png'
import styles from './Header.module.css'

function Header() {
    return (
        <div className="center">
            <img src={covid} alt="covid" className={styles.responsive} />
        </div>
    )
}

export default Header
