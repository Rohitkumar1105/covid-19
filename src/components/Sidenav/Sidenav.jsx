import React, { useState } from 'react'
// import CountUp from 'react-countup'
import styles from './Sidenav.module.css'
import {Cards} from '../index'

const Sidenav = ({ coronaData: { summary, regional } }) => {
    const [stateName, setStateName] = useState('')
    const [stateData, setStateData] = useState('')

    const handleClick = (stateData) => {
        setStateData(stateData)
    }

    if(!summary){
        return <h1>Loading...</h1>
    }
    const stateList = regional.map((state, index) => {
        return (
            <ul key={index}>
                <li onClick={() => handleClick(state)}>{state.loc}</li>
            </ul>
        )
    })

    const filteredStateName = regional.filter(state => 
        state.loc.toLowerCase().includes(stateName.toLowerCase())
        )
    
    const filteredStateList = filteredStateName.map((state,index) => {
        return (
            <ul key={index}>
                <li onClick={() => handleClick(state)}>{state.loc}</li>
            </ul>
        )
    })
    return (
        <div className="row">
            <div className="col s12 m4 l2">
                <div className={styles.sidenav}>
                    {/* <div className={styles.displayNumbers}>
                        <h3 className="red-text center"><CountUp start={0} end={summary.total} duration={2} separator="," /> </h3>
                        <div className="left">
                            <h4>  <CountUp start={0} end={summary.deaths} duration={2} separator="," /> </h4>
                            <h6 className="center">Deaths</h6>
                        </div>
                        <div className="right">
                            <h4>  <CountUp start={0} end={summary.discharged} duration={2} separator="," /> </h4>
                            <h6 className="center">Recovered</h6>
                        </div>
                    </div> */}

                    <div>
                        <label htmlFor="state"></label>
                        <input 
                            type="text" 
                            id="state" 
                            placeholder="Search for the state.." 
                            value={stateName} onChange={e => setStateName(e.target.value)} 
                        />
                    </div>

                    <div className={styles.displayStates}>
                        { stateName === '' ? stateList : filteredStateList }                        
                    </div>
                </div>
            </div>
 
            <div className="col l1"></div> 
            
            <div className="col s12 m8">
                <Cards stateData={stateData} summary={summary} />
            </div>
        </div>
    )
}

export default Sidenav
