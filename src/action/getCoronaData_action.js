import { GET_CORONA_DATA, GET_CORONA_PAST } from '../constants/action_types'  

export const fetchData = () => dispatch  => {
    fetch('https://api.rootnet.in/covid19-in/stats/latest')
    .then(res => res.json())
    .then(coronaData => 
        dispatch({
            type: GET_CORONA_DATA,
            payload: coronaData
        }))
}

export const fetchPastData = () => dispatch => {
    fetch('https://api.rootnet.in/covid19-in/stats/history')
    .then(res => res.json())
    .then(coronaPastData => 
        dispatch({
            type: GET_CORONA_PAST,
            payload: coronaPastData
        }))
}