import { GET_CORONA_DATA } from '../constants/action_types'  

export const fetchData = () => dispatch  => {
    fetch('https://api.rootnet.in/covid19-in/stats/latest')
    .then(res => res.json())
    .then(coronaData => 
        dispatch({
            type: GET_CORONA_DATA,
            payload: coronaData
        }))
}

