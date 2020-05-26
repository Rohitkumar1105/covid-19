import React from 'react'
import { Graph, Header } from './index'
import styles from '../css/Cards.module.css'
import CountUp from 'react-countup' 
import { useSelector } from 'react-redux'
import cx from 'classnames'

const Cards = (props) => {
    // console.log(props)
    let activeCases, total, discharged, deaths, fatalityRate, recoveryRate = 0;
    let increasedTotalCases, increasedActiveCases, increasedDischargedCases, increasedDeaths = 0; 
    const stateData = useSelector(state => state.covid.data.regional)
    const countryData = useSelector(state => state.covid.data.summary)
    const pastData = useSelector(state => state.pastData.data)
    
    if(!stateData) {
        return "Loading..."
    }

    //Calculating yesterday's date
    const today = new Date()
    today.setDate(today.getDate() - 1)
    const yesterday = today.toDateString()

     //Assigning the total incremented cases
     pastData.map((date) => {
        if(new Date(date.day).toDateString() === yesterday) {
            date.regional.map((state) => {
                if(state.loc === props.match.params.name) {
                    increasedTotalCases = state.totalConfirmed
                    increasedActiveCases = state.totalConfirmed - state.discharged - state.deaths
                    increasedDischargedCases = state.discharged
                    increasedDeaths = state.deaths
                }
                return state
            })
        }
        return date
    })
    
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

    if(props.match.params.name === "India"){
        activeCases = countryData.total - countryData.discharged - countryData.deaths
        total = countryData.total
        discharged = countryData.discharged
        deaths = countryData.deaths
        fatalityRate = (countryData.deaths/countryData.total) * 100
        recoveryRate = (countryData.discharged/countryData.total) * 100

        pastData.map(({day, summary:{total, discharged, deaths}}) => {
            if(new Date(day).toDateString() === yesterday){
                increasedTotalCases = total
                increasedActiveCases = total - discharged - deaths
                increasedDischargedCases = discharged
                increasedDeaths = deaths
            }
            return day
        })
    }

    return (
        <div>
            <Header />
            <div className="container">
                <div className={styles.heading}>
                    <h4> <strong> {props.match.params.name} </strong></h4>
                </div>
                <div className="row">
                    <div className="col s12 l6">
                        <div className={cx(styles.card, "z-depth-2")}>
                            <div className={styles.total}>
                                <h5> <CountUp start={0} end={total} duration={1} separator="," /> </h5>
                                <h6>Total Cases</h6>
                                <h6>( +{total - increasedTotalCases} )</h6> 
                            </div>
                            <div className={styles.infected}>
                                <h5> <CountUp start={0} end={activeCases} duration={1} separator="," /> </h5>
                                <h6>Active Cases</h6>
                                <h6>( +{activeCases - increasedActiveCases} )</h6> 
                            </div>
                            <div className={styles.discharged}>
                                <h5> <CountUp start={0} end={discharged} duration={1} separator=","  /> </h5>
                                <h6>Total Discharged</h6>
                                <h6>( +{discharged - increasedDischargedCases} )</h6> 
                            </div>
                            <div className={styles.deaths}>
                                <h5> <CountUp start={0} end={deaths} duration={1} separator=","  /> </h5>
                                <h6>Total Deaths</h6>
                                <h6>( +{deaths - increasedDeaths} )</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col s6 l3">
                        <div className={cx(styles.card, "z-depth-2")}>
                            <h5>{fatalityRate.toFixed(2)}%</h5>
                            <h6>Fatality Rate</h6>
                        </div>
                    </div>
                    <div className="col s6 l3">
                        <div className={cx(styles.card, "z-depth-2")}>
                            <h5>{recoveryRate.toFixed(2)}%</h5>
                            <h6>Recovery Rate</h6>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className={styles.showGraph}>
                        <Graph deaths={deaths} discharged={discharged} activeCases={activeCases} total={total} state={props.match.params.name} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
