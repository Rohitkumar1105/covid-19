import React, { useState, useEffect } from 'react'
import { Sidenav } from './components' 
import { fetchData } from './api'


// export default class App extends Component {
//     state = { 
//       coronaData : {},
//      }

//   async componentDidMount() {
//     const fetchedData = await fetchData()
//     this.setState({ coronaData: fetchedData })
//   }

//   render() {
//     const { coronaData } = this.state

//     return (
//       <div>
//         <Sidenav coronaData={coronaData} />
//       </div>

//     )
//   }
// }

const App = () => {
  const [coronaData, setCoronaData] = useState({})
  useEffect(()=> {
    const getData = async () => {
      const fetchedData = await fetchData()
      setCoronaData(fetchedData)
    }
    getData()
  }, [])

  return (
    <div>
      <Sidenav coronaData={coronaData} />
    </div>
  )
}

export default App