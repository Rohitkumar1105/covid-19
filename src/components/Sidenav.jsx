import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CountUp from 'react-countup'
import { Header } from './index'
import { useHistory } from 'react-router-dom'
import '../css/Sidenav.css'
import { fetchData } from '../action/getCoronaData_action'

const Sidenav = (props) => {
    //State
    const [stateName, setStateName] = useState('')

    //Dispatching action to fetch data from API
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchData())
      }, [dispatch])
    
    //Fetching data from redux store
    const data = useSelector(state => state.covid.data.data)
    const lastUpdate = useSelector(state => state.covid.data.lastRefreshed)

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

    //Calculating the active cases
    const active = data.summary.total - data.summary.deaths - data.summary.discharged

    return (
        <div>
            <Header />
            <div className="row">
                <div className="col s12 m2">
                    <div className="card z-depth-3">
                        <div className="center">
                            <div className="white-text">
                                <h4>INDIA</h4>    
                                <h6> Updated: {new Date(lastUpdate).toDateString()} </h6>
                            </div>
                            <div style={{color: "rgb(111, 173, 235)"}}>
                                <h3><CountUp start={0} end={data.summary.total} duration={2} separator="," /> </h3>
                                <h5>Total</h5>
                            </div>
                            <div style={{color: "#F99D2E"}}>
                                <h4>  <CountUp start={0} end={active} duration={2} separator="," /> </h4>
                                <h5>Active</h5>
                            </div>
                            <div style={{color: "rgb(235, 111, 111)"}}>
                                <h4>  <CountUp start={0} end={data.summary.deaths} duration={2} separator="," /> </h4>
                                <h5>Deaths</h5>
                            </div>
                            <div style={{color: "#65DD9B"}}>
                                <h4>  <CountUp start={0} end={data.summary.discharged} duration={2} separator="," /> </h4>
                                <h5>Recovered</h5>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div className="col l1"></div> 
                
                <div className="col s12 m8">
                    <input 
                        type="text" 
                        placeholder="Search for the state.." 
                        value={stateName} onChange={e => setStateName(e.target.value)} 
                    />

                    <table className="striped highlight responsive-table">
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
    )
}

export default Sidenav