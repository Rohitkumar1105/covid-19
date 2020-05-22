import React from 'react'
import { Bar } from 'react-chartjs-2'

const Graph = ({total, activeCases, discharged, deaths}) => {
    return(
        <div>
            {   
                total ?
                <Bar 
                    data={{
                        labels: ['Total', 'Active', 'Recovered', 'Deaths'],
                        datasets: [{
                            label: 'People',
                            fill: true,
                            backgroundColor: ['rgb(207, 59, 207)', 'rgb(127, 125, 224)', 'rgb(81, 209, 64)', 'rgb(247, 45, 45)'],
                            data: [total, activeCases, discharged, deaths ],
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