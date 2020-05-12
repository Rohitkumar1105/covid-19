import React from 'react'
import { Graph } from '../index'
import styles from './Cards.module.css'
import CountUp from 'react-countup' 

const Cards = ({stateData}) => {
    if(!stateData) {
        return "Loading..."
    }
    return (
        <div>
            <div className={styles.heading}>
                <h3>COVID - 19</h3>
                <h5><strong>{stateData.loc}</strong></h5>
            </div>
            <div className="row">
                <div className="col s12 m4">
                    <div className={styles.card}>
                        <div className={styles.infected}>
                            <h5>Infected</h5> 
                            <h6> <CountUp start={0} end={stateData.totalConfirmed} duration={1} separator="," /> </h6>
                        </div>
                    </div>
                </div>
                <div className="col s12 m4">
                    <div className={styles.card}>
                        <div className={styles.discharged}>
                            <h5>Recovered</h5>
                            <h6> <CountUp start={0} end={stateData.discharged} duration={1} separator=","  /> </h6>
                        </div>
                    </div>
                </div>
                <div className="col s12 m4">
                    <div className={styles.card}>
                        <div className={styles.deaths}>
                            <h5>Deaths</h5>
                            <h6> <CountUp start={0} end={stateData.deaths} duration={1} separator=","  /> </h6>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="center">
                    <Graph graphData={stateData} />
                </div>
            </div>
        </div>
    )
}

export default Cards
