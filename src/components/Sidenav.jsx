import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import CountUp from 'react-countup'
import { Header } from './index'
import { useHistory } from 'react-router-dom'
import '../css/Sidenav.css'

const Sidenav = (props) => {
    //State
    const [stateName, setStateName] = useState('')

    //Fetching data from redux store
    const data = useSelector(state => state.covid.data)
    const lastUpdate = useSelector(state => state.covid.lastRefreshed)
    const pastData = useSelector(state => state.pastData.data)

    const history = useHistory()
    
    const handleClick = (stateData) => {
        history.push(`/${stateData.loc}`)
    }

    if(!data){
        return <h1>Loading...</h1>
    }

    //Mapping over the state data and displaying it in a table
    const stateList = data.regional.map((state, index) => {
        return (
            <tr key={index} onClick={() => handleClick(state)}>
                <td>{index+1}</td>
                <td>{state.loc}</td>
                <td>{state.totalConfirmed}</td>
                <td>{state.totalConfirmed - state.discharged - state.deaths}</td>
                <td>{state.discharged}</td>
                <td>{state.deaths}</td>
            </tr>
        )
    })

    //Filtering the state data list
    const filteredStateName = data.regional.filter(state => 
        state.loc.toLowerCase().includes(stateName.toLowerCase())
        )
    
    //Displaying the filtered list
    const filteredStateList = filteredStateName.map((state,index) => {
        return (
            <tr key={index} onClick={() => handleClick(state)}>
                <td>{index+1}</td>
                <td>{state.loc}</td>
                <td>{state.totalConfirmed}</td>
                <td>{state.totalConfirmed - state.discharged - state.deaths}</td>
                <td>{state.discharged}</td>
                <td>{state.deaths}</td>
            </tr>
        )
    })

    //Calculating the present covid-19 cases
    const active = data.summary.total - data.summary.deaths - data.summary.discharged
    let total, discharged, deaths = 0
    total = data.summary.total
    discharged = data.summary.discharged
    deaths = data.summary.deaths

    //Calculating yesterday's date
    const today = new Date()
    today.setDate(today.getDate() - 1)
    const yesterday = today.toDateString()

    //Declaring variables
    let increasedTotalCases, increasedActiveCases, increasedDischargedCases, increasedDeaths = 0; 

    //Assigning the total incremented cases
    pastData.map(({day, summary:{total, discharged, deaths}}) => {
        if(new Date(day).toDateString() === yesterday){
            increasedTotalCases = total
            increasedActiveCases = total - discharged - deaths
            increasedDischargedCases = discharged
            increasedDeaths = deaths
        }
        return day
    })
    
    return (
        <div>
            <Header />
            <div className="row">
                <div className="col s12 m2">
                    <div className="card z-depth-3 center" onClick={() =>  history.push('/India')}>
                        <a href={`${process.env.PUBLIC_URL}/India`} className="white-text"><h4>INDIA</h4></a>    
                        <h6 className="white-text"> Updated: {new Date(lastUpdate).toDateString()} </h6>
                        <div style={{color: "rgb(111, 173, 235)"}}>
                            <h4><CountUp start={0} end={total} duration={2} separator="," /> <h6>(+{total - increasedTotalCases})</h6> </h4>
                            <h5>Total</h5>
                        </div>
                        <div style={{color: "#F99D2E"}}>
                            <h4>  <CountUp start={0} end={active} duration={2} separator="," /> <h6>(+{active - increasedActiveCases})</h6> </h4>
                            <h5>Active</h5>
                        </div>
                        <div style={{color: "rgb(235, 111, 111)"}}>
                            <h4>  <CountUp start={0} end={deaths} duration={2} separator="," /> <h6>(+{deaths - increasedDeaths})</h6> </h4>
                            <h5>Deaths</h5>
                        </div>
                        <div style={{color: "#65DD9B"}}>
                            <h4>  <CountUp start={0} end={discharged} duration={2} separator="," /> <h6>(+{discharged - increasedDischargedCases})</h6> </h4>
                            <h5>Recovered</h5>
                        </div>
                    </div>
                </div>
    
                <div className="col l1"></div> 
                
                <div className="col s12 m8">
                    <div className="heading">
                        <h4>INDIA COVID-19 Stats</h4>
                        <input 
                            type="text" 
                            placeholder="Search states..." 
                            value={stateName} onChange={e => setStateName(e.target.value)} 
                        />
                    </div>

                    <div>
                        <img src="https://img.icons8.com/color/48/000000/info--v1.png" alt="info" style={{height:"20px", width:"20px", verticalAlign: "middle"}} />
                        <span>Click on the states to know more</span>
                    </div>

                    <div className="table-height">
                        <table className="striped highlight">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>State/UT</th>
                                    <th>Total</th>
                                    <th>Active</th>
                                    <th>Recovered</th>
                                    <th>Deaths</th>
                                </tr>
                            </thead>

                            <tbody>
                                { stateName === '' ? stateList : filteredStateList }  
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidenav