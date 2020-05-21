import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import CountUp from 'react-countup'
import { Cards } from './index'
import { Redirect, Link } from 'react-router-dom'
import '../css/Sidenav.css'
import { fetchData } from '../action/getCoronaData_action'

const Sidenav = () => {
    const [stateName, setStateName] = useState('')
    const [stateData, setStateData] = useState('')

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchData())
      }, [])

    // const handleClick = (stateData) => {
    //     return (
    //         <Redirect to={`${process.env.PUBLIC_URL/stateData.loc}`} />
    //     )
    // }

    // if(!data){
    //     return <h1>Loading...</h1>
    // }
    // const stateList = data.regional.map((state, index) => {
    //     return (
    //         <tr key={index} onClick={() => handleClick(state)}>
    //             <td>{index+1}</td>
    //             <td>{state.loc}</td>
    //             <td>{state.totalConfirmed}</td>
    //             <td>{state.totalConfirmed - state.discharged - state.deaths}</td>
    //             <td>{state.discharged}</td>
    //             <td>{state.deaths}</td>
    //         </tr>
    //     )
    // })

    // const filteredStateName = data.regional.filter(state => 
    //     state.loc.toLowerCase().includes(stateName.toLowerCase())
    //     )
    
    // const filteredStateList = filteredStateName.map((state,index) => {
    //     return (
    //         <tr key={index} onClick={() => handleClick(state)}>
    //             <td>{index+1}</td>
    //             <td>{state.loc}</td>
    //             <td>{state.totalConfirmed}</td>
    //             <td>{state.totalConfirmed - state.discharged - state.deaths}</td>
    //             <td>{state.discharged}</td>
    //             <td>{state.deaths}</td>
    //         </tr>
    //     )
    // })

    // const active = data.summary.total - data.summary.deaths - data.summary.discharged

    return (
        <div>
            <h1>Under Maintenance</h1>
        </div>
        // <div className="row">
        //     <div className="col s12 m4 l2">
        //         <div className="card z-depth-3">
        //             <div className="center">
        //             <h6> Updated: {new Date(lastRefreshed).toDateString()} </h6>
        //                 <h3 className="red-text"><CountUp start={0} end={data.summary.total} duration={2} separator="," /> </h3>
        //                 <h6>Total</h6>
        //                 <h4>  <CountUp start={0} end={active} duration={2} separator="," /> </h4>
        //                 <h6>Active</h6>
        //                 <h4>  <CountUp start={0} end={data.summary.deaths} duration={2} separator="," /> </h4>
        //                 <h6>Deaths</h6>
        //                 <h4>  <CountUp start={0} end={data.summary.discharged} duration={2} separator="," /> </h4>
        //                 <h6>Recovered</h6>
        //             </div>
        //         </div>
        //     </div>
 
        //     <div className="col l1"></div> 
            
        //     <div className="col s12 m8">
        //         <label htmlFor="state"></label>
        //         <input 
        //             type="text" 
        //             id="state" 
        //             placeholder="Search for the state.." 
        //             value={stateName} onChange={e => setStateName(e.target.value)} 
        //         />

        //         <table className="striped responsive-table">
        //             <thead>
        //                 <tr>
        //                     <th>#</th>
        //                     <th>State/UT</th>
        //                     <th>Total</th>
        //                     <th>Active</th>
        //                     <th>Recovered</th>
        //                     <th>Deaths</th>
        //                 </tr>
        //             </thead>

        //             <tbody>
        //                 { stateName === '' ? stateList : filteredStateList }  
        //             </tbody>
        //         </table>


        //     </div>
        // </div>
    )
}

export default Sidenav