import { GET_CORONA_PAST } from '../constants/action_types'

const initState = {}

const getCoronaPastDatareducer = (state = initState, action) => {
    if (action.type === GET_CORONA_PAST){
        return {
            ...state,
            ...action.payload
        }
    } 
    return state
}

export default getCoronaPastDatareducer