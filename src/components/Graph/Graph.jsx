import React from 'react'
import { Bar } from 'react-chartjs-2'

const Graph = ({graphData}) => {
    return(
        <div>
            {   
                graphData ?
                <Bar 
                    data={{
                        labels: ['Active', 'Recovered', 'Deaths'],
                        datasets: [{
                            label: 'People',
                            fill: true,
                            backgroundColor: ['orange', 'green', 'red'],
                            data: [graphData.totalConfirmed, graphData.discharged, graphData.deaths],
                        }]
                        // {
                        //     data: [graphData.discharged],
                        //     label: 'Recovered',
                        //     fill: true,
                        //     backgroundColor: 'green',
                        // },
                        // {
                        //     data: [graphData.deaths],
                        //     label: 'Deceased',
                        //     fill: true,
                        //     backgroundColor: 'red',
                        //     categoryPercentage: 1.0,
                        //     barPercentage: 1.0,
                        // }],
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