import { GET_CORONA_DATA } from '../constants/action_types'

const initState = {
    data: []
}

const getCoronaDataReducer = (state = initState, action) => {
    if(action.type === GET_CORONA_DATA){
        return {
            ...state,
            data: action.payload
        }
    }
    return state;
}

export default getCoronaDataReducer