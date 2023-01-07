import { FETCH_SEARCH_FAILURE, FETCH_SEARCH_REQUEST, FETCH_SEARCH_SUCCESS } from "./searchTypes"

const initialState = {
    loading : false,
    searchContacts : [],
    error : ''
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_SEARCH_REQUEST:
            return {
                ...state,
                loading : true
            }
        
        case FETCH_SEARCH_SUCCESS:
            return {
                loading: false,
                searchContacts : action.payload,
                error : ''
            } 

        case FETCH_SEARCH_FAILURE:
            return {
                loading : false,
                searchContacts: [],
                error: action.payload
            }
        default: // need this for default case
            return state 
   
    }
}

export default reducer