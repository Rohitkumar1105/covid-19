import React, { Component } from 'react'
import { Sidenav } from './components' 
import { fetchData } from './api'


export default class App extends Component {
    state = { 
      coronaData : {},
     }

  async componentDidMount() {
    const fetchedData = await fetchData()
    this.setState({ coronaData: fetchedData })
  }

  render() {
    const { coronaData } = this.state

    return (
      <div>
        <Sidenav coronaData={coronaData} />
      </div>

    )
  }
}

