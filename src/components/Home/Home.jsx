import React from 'react'
import { Header } from '../index'
import styles from './Home.module.css'
import count from '../../img/counting.gif'

const Home = ({summary}) => {
    console.log(summary)
    return (
        <div>
            <Header />
            <div className={styles.card}>
                <div className={styles.center}>
                    <img src={count} alt="count" height="100px" width="100px" />
                    <h4>Stay Home. Save Lives.</h4>
                    <h6>Help stop COVID-19</h6>
                    <ol>
                        <li> <span>Stay</span> Home</li>
                        <li> <span>Keep</span> a safe distance</li>
                        <li> <span>Wash</span> hands often</li>
                        <li> <span>Cough</span> into your elbow</li>
                        <li> <span>Sick?</span> Call the helpline</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default Home
