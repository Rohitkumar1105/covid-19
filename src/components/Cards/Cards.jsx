import React from 'react'

const Cards = ({stateData}) => {
    return (
        <div>
            <div className="center">
                <h3>COVID - 19</h3>
                <h5>{stateData.loc}</h5>
            </div>
            <div className="col s12 m4">
                <div className="card">
                    <h5>Infected</h5> 
                    <h6>{stateData.totalConfirmed}</h6>
                </div>
            </div>
            <div className="col s12 m4">
                <div className="card">
                    <h5>Recovered</h5>
                    <h6>{stateData.discharged}</h6>
                </div>
            </div>
            <div className="col s12 m4">
                <div className="card">
                    <h5>Deaths</h5>
                    <h6>{stateData.deaths}</h6>
                </div>
            </div>
        </div>
    )
}

export default Cards
