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
                            backgroundColor: ['rgba(247, 163, 45)', 'rgba(81, 209, 64)', 'rgba(247, 45, 45)'],
                            data: [graphData.totalConfirmed, graphData.discharged, graphData.deaths],
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