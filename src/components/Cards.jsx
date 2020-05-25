import React from 'react'
import { useSelector } from 'react-redux'
import { Graph, Header } from './index'
import styles from '../css/Cards.module.css'
import CountUp from 'react-countup' 
import cx from 'classnames'

const Cards = (props) => {
    // console.log(props)
    let activeCases, total, discharged, deaths, fatalityRate, recoveryRate = 0;
    const stateData = useSelector(state => state.covid.data.data.regional)
    
    if(!stateData) {
        return "Loading..."
    }
    
    stateData.map((state) => {
        if(state.loc === props.match.params.name) {
            activeCases = state.totalConfirmed - state.discharged - state.deaths
            total = state.totalConfirmed
            discharged = state.discharged
            deaths = state.deaths
            fatalityRate = (state.deaths/state.totalConfirmed) * 100
            recoveryRate = (state.discharged/state.totalConfirmed) * 100
        }
        return state
    })


    return (
        <div>
            <Header />
            <div className="container">
                <div className={styles.heading}>
                    <h5> <strong> { props.match.params.name} </strong></h5>
                </div>
                <div className="row">
                    <div className="col s6 l2">
                        <div className={cx(styles.card,styles.total)}>
                            {/* <img src={virus} alt="total" /> */}
                            <h4> <CountUp start={0} end={total} duration={1} separator="," /> </h4>
                            <h6>Total Cases</h6> 
                        </div>
                    </div>
                    <div className="col s6 l2"> 
                        <div className={cx(styles.card,styles.infected)}>
                            {/* <img src={active} alt="active" /> */}
                            <h4> <CountUp start={0} end={activeCases} duration={1} separator="," /> </h4>
                            <h6>Active Cases</h6> 
                        </div>
                    </div>
                    <div className="col s6 l2">
                        <div className={cx(styles.card,styles.discharged)}>
                            {/* <img src={cured} alt="active" /> */}
                            <h4> <CountUp start={0} end={discharged} duration={1} separator=","  /> </h4>
                            <h6>Cured / Discharged</h6>
                        </div>
                    </div>
                    <div className="col s6 l2">
                        <div className={cx(styles.card,styles.deaths)}>
                            {/* <img src={virus} alt="active" /> */}
                            <h4> <CountUp start={0} end={deaths} duration={1} separator=","  /> </h4>
                            <h6>Deaths</h6>
                        </div>
                    </div>
                    <div className="col s6 l2">
                        <div className={styles.card}>
                            <h4>{fatalityRate.toFixed(2)}%</h4>
                            <h6>Fatality Rate</h6>
                        </div>
                    </div>
                    <div className="col s6 l2">
                        <div className={styles.card}>
                            <h4>{recoveryRate.toFixed(2)}%</h4>
                            <h6>Recovery Rate</h6>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className={styles.showGraph}>
                        <Graph deaths={deaths} discharged={discharged} activeCases={activeCases} total={total} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
