import React from 'react'
import { Graph } from './index'
import styles from '../css/Cards.module.css'
import CountUp from 'react-countup' 

// Importing the Images
import active from '../img/icon-active.png'
import cured from '../img/icon-inactive.png'
import virus from '../img/icon-infected.png'

const Cards = ({stateData}) => {
    let activeCases,fatalityRate, recoveryRate = 0;

    if(!stateData) {
        return "Loading..."
    }
    
    activeCases = stateData.totalConfirmed - stateData.discharged - stateData.deaths
    fatalityRate = (stateData.deaths/stateData.totalConfirmed) * 100
    recoveryRate = (stateData.discharged/stateData.totalConfirmed) * 100

    return (
        <div>
            <div className={styles.heading}>
                <h5>{ stateData.loc ? <strong>{stateData.loc}</strong> : <strong>INDIA</strong> }</h5>
            </div>
            <div className="row">
                <div className="col s6 l3">
                    <div className={styles.card}>
                        <div className={styles.total}>
                            <img src={virus} alt="total" />
                            <h4> <CountUp start={0} end={stateData.totalConfirmed } duration={1} separator="," /> </h4>
                            <h6>Total Cases</h6> 
                        </div>
                    </div>
                </div>
                <div className="col s6 l3">
                    <div className={styles.card}>
                        <div className={styles.infected}>
                            <img src={active} alt="active" />
                            <h4> <CountUp start={0} end={activeCases} duration={1} separator="," /> </h4>
                            <h6>Active Cases</h6> 
                        </div>
                    </div>
                </div>
                <div className="col s6 l3">
                    <div className={styles.card}>
                        <div className={styles.discharged}>
                            <img src={cured} alt="active" />
                            <h4> <CountUp start={0} end={stateData.discharged} duration={1} separator=","  /> </h4>
                            <h6>Cured / Discharged</h6>
                        </div>
                    </div>
                </div>
                <div className="col s6 l3">
                    <div className={styles.card}>
                        <div className={styles.deaths}>
                            <img src={virus} alt="active" />
                            <h4> <CountUp start={0} end={stateData.deaths} duration={1} separator=","  /> </h4>
                            <h6>Deaths</h6>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col s6 l3">
                    <div className={styles.card}>
                        <h4>{fatalityRate.toFixed(2)}%</h4>
                        <h6>Fatality Rate</h6>
                    </div>
                </div>
                <div className="col s6 l3">
                    <div className={styles.card}>
                        <h4>{recoveryRate.toFixed(2)}%</h4>
                        <h6>Recovery Rate</h6>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className={styles.showGraph}>
                    <Graph graphData={stateData} />
                </div>
            </div>
        </div>
    )
}

export default Cards
