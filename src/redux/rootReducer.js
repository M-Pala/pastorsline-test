import { combineReducers } from 'redux'

import modalReducer from './modals/modalReducer'
import searchReducer from './search/searchReducer'

const rootReducer = combineReducers({
    modal : modalReducer,
    search : searchReducer
})

export default rootReducer