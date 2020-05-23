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
                            backgroundColor: ['rgb(111, 173, 235)', '#F99D2E', '#65DD9B', 'rgb(235, 111, 111)'],
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