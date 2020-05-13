import React from 'react'
import { Header } from '../index'
import styles from './Home.module.css'
import count from '../../img/counting.gif'

const Home = () => {
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

            {/* <h3>Symptoms of COVID-19</h3>
            <p>The most common symptoms of COVID-19 are fever, tiredness, and dry cough. Some patients may have aches and pains, nasal congestion,
            runny nose, sore throat or diarrhea. These symptoms are usually mild and begin gradually. Some people become infected but don’t develop 
            any symptoms and don't feel unwell. Most people (about 80%) recover from the disease without needing special treatment. Around 1 out of
            every 6 people who gets COVID-19 becomes seriously ill and develops difficulty breathing. Older people, and those with underlying medical 
            problems like high blood pressure, heart problems or diabetes, are more likely to develop serious illness. People with fever, cough and 
            difficulty breathing should seek medical attention.</p> */}
        </div>
    )
}

export default Home
