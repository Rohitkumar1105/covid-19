import React, { useState, useEffect } from 'react'
import Sidenav from './Sidenav/Sidenav'


function Map() {
    const [coronaDetails, setCoronaDetails] = useState({})

    useEffect(() => {
        const fetchFunc = async() => {
            const res = await fetch('https://api.rootnet.in/covid19-in/stats/latest')
            const resJson = await res.json()
            setCoronaDetails(resJson.data)
        }
        fetchFunc()
    }, [])

    // const coronaStateWiseData = coronaDetails.regional

    if (!coronaDetails) {
        return <h4> Loading... </h4>
    }
    return (
        // <div>
        //     <div className="col s4">
        //             <thead>
        //                 <tr>
        //                     <th>State/UT</th>
        //                     <th>Confirmed</th>
        //                     <th>Discharged</th>
        //                     <th>Deceased</th>
        //                 </tr>
        //             </thead>

        //             <tbody>
        //                 {
        //                    coronaStateWiseData.map((state, index) => {
        //                        return (
        //                             <tr key={index}>
        //                                 <td>{state.loc}</td>
        //                                 <td>{state.totalConfirmed}</td>
        //                                 <td>{state.discharged}</td>
        //                                 <td>{state.deaths}</td>
        //                             </tr>
        //                        )
        //                    }) 
        //                 }
                        
        //                 <tr>
        //                     <td><strong>TOTAL</strong></td>
        //                     <td>{coronaDetails.summary.total}</td>
        //                     <td>{coronaDetails.summary.discharged}</td>
        //                     <td>{coronaDetails.summary.deaths}</td>
        //                 </tr>
                            
        //             </tbody>
        //     </div>
        //     <div className="col s6"></div>
        // </div>
        <div>
            <Sidenav coronaData={coronaDetails} />
        </div>
    )
}

export default Map
