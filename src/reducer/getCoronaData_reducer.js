import { GET_CORONA_DATA } from '../constants/action_types'

const initState = {
    
}

const getCoronaDataReducer = (state = initState, action) => {
    if(action.type === GET_CORONA_DATA){
        return {
            ...state,
            ...action.payload
        }
    }
    return state;
}

export default getCoronaDataReducer