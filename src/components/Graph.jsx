import React from 'react'
import { useSelector } from 'react-redux'
import { Bar, Line } from 'react-chartjs-2'
import styles from '../css/Cards.module.css'
import cx from 'classnames'

const Graph = ({total, activeCases, discharged, deaths, state}) => {
    const pastData = useSelector(state => state.pastData.data)

    return(
        <div>
            <div className={cx(styles.card,"z-depth-1")}>
                {   
                    total ?
                    <Bar 
                        data={{
                            labels: ['Total', 'Active', 'Recovered', 'Deaths'],
                            datasets: [{
                                label: 'People',
                                fill: true,
                                backgroundColor: ["blue", 'orange', 'green', 'red'],
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
            {   
                state === "India" ?
                <div>
                    <h5 className="center">History of cases</h5>
                    <div className={cx(styles.card,"z-depth-1")}>
                        <Line 
                            data={{
                                labels: pastData.map((date) => date.day),
                                datasets: [{
                                    data: pastData.map((date) => date.summary.total),
                                    label: 'Infected',
                                    borderColor: '#3333ff',
                                    fill: 'true,',
                                },{
                                    data: pastData.map((date) => date.summary.total -  date.summary.discharged - date.summary.deaths),
                                    label: 'Active',
                                    borderColor: 'Orange',
                                    fill: 'true,'
                                },
                                {
                                    data: pastData.map((date) => date.summary.discharged),
                                    label: 'Recovered',
                                    borderColor: 'green',
                                    fill: 'true,'
                                },{
                                    data: pastData.map((date) => date.summary.deaths),
                                    label: 'Deaths',
                                    borderColor: 'red',
                                    fill: 'true,'
                                }
                            ]}
                            }
                        />
                    </div>
                </div>
                : ''
            }
        </div>
    )
}

export default Graph