import React from 'react'
import CountUp from 'react-countup'
import styles from './Sidenav.module.css'

const Sidenav = ({ coronaData: { summary, regional } }) => {
    console.log(summary)
    if(!summary){
        return <h1>Loading..</h1>
    }
    return (
        <div>
            <div className={styles.sidenav}>
                <div className={styles.displayNumbers}>
                    <h3 className="red-text center"><CountUp start={0} end={summary.total} duration={2} separator="," /> </h3>
                    <div className="left">
                        <h4>  <CountUp start={0} end={summary.deaths} duration={2} separator="," /> </h4>
                        <h6 className="center">Deaths</h6>
                    </div>
                    <div className="right">
                        <h4>  <CountUp start={0} end={summary.discharged} duration={2} separator="," /> </h4>
                        <h6 className="center">Recovered</h6>
                    </div>
                </div>

                <div className={styles.displayStates}>
                    <input type="text" placeholder="Search for the state.." />
                    {
                        regional.map((state, index) => {
                            return (
                                <ul key={index}>
                                    <li>{state.loc}</li>
                                </ul>
                            )
                        })
                    }                        
                </div>
            </div>
        </div>
    )
}

export default Sidenav
