import { combineReducers } from 'redux'
import getCoronaDataReducer from './getCoronaData_reducer'
import getCoronaPastDatareducer from './getCoronaPastData_reducer'

const rootReducer = combineReducers({
    covid: getCoronaDataReducer,
    pastData: getCoronaPastDatareducer,
})

export default rootReducer