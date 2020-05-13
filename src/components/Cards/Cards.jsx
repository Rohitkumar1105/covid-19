import React from 'react'
import { Graph, Header, Home } from '../index'
import styles from './Cards.module.css'
import CountUp from 'react-countup' 

// Importing the Images
import active from '../../img/icon-active.png'
import cured from '../../img/icon-inactive.png'
import death from '../../img/icon-infected.png'

const Cards = ({stateData}) => {
    if(!stateData) {
        return <Home />
    }
    return (
        <div>
            <div className={styles.heading}>
                <Header />
                <h5><strong>{stateData.loc}</strong></h5>
            </div>
            <div className="row">
                <div className="col l2"></div>
                <div className="col s12 m3">
                    <div className={styles.card}>
                        <div className={styles.infected}>
                            <img src={active} alt="active" />
                            <h4> <CountUp start={0} end={stateData.totalConfirmed} duration={1} separator="," /> </h4>
                            <h6>Active Cases</h6> 
                        </div>
                    </div>
                </div>
                <div className="col l1"></div>
                <div className="col s12 m3">
                    <div className={styles.card}>
                        <div className={styles.discharged}>
                            <img src={cured} alt="active" />
                            <h4> <CountUp start={0} end={stateData.discharged} duration={1} separator=","  /> </h4>
                            <h6>Cured / Discharged</h6>
                        </div>
                    </div>
                </div>
                <div className="col l1"></div>
                <div className="col s12 m3">
                    <div className={styles.card}>
                        <div className={styles.deaths}>
                            <img src={death} alt="active" />
                            <h4> <CountUp start={0} end={stateData.deaths} duration={1} separator=","  /> </h4>
                            <h6>Deaths</h6>
                        </div>
                    </div>
                </div>
                <div className="col l2"></div>
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
