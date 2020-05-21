import { combineReducers } from 'redux'
import getCoronaDataReducer from './getCoronaData_reducer'

const rootReducer = combineReducers({
    covid: getCoronaDataReducer
})

export default rootReducer