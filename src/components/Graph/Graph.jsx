import React from 'react'
import { Bar } from 'react-chartjs-2'

const Graph = ({graphData}) => {
    return(
        <div>
            {   
                graphData ?
                <Bar 
                    data={{
                        labels: ['Total', 'Active', 'Recovered', 'Deaths'],
                        datasets: [{
                            label: 'People',
                            fill: true,
                            backgroundColor: ['rgb(175, 23, 175)', 'rgb(127, 125, 224)', 'rgb(81, 209, 64)', 'rgb(247, 45, 45)'],
                            data: [
                                graphData.totalConfirmed ? graphData.totalConfirmed : graphData.total, 
                                (graphData.totalConfirmed ? graphData.totalConfirmed : graphData.total) - graphData.discharged - graphData.deaths, 
                                graphData.discharged, 
                                graphData.deaths
                            ],
                        }]
                    }}
                    options = {{
                        legend: { display: false }
                    }}
                />
                : ''
            }
        </div>
    )
}

export default Graph