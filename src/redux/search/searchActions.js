import axios from "axios"
import { FETCH_SEARCH_FAILURE, FETCH_SEARCH_REQUEST, FETCH_SEARCH_SUCCESS } from "./searchTypes"

export const fetchSearchRequest = () => {
    return {
        type : FETCH_SEARCH_REQUEST
    }
}

export const fetchSearchSuccess = (search) => {
    return {
        type : FETCH_SEARCH_SUCCESS,
        payload : search
    }
}

export const fetchSearchFailure = (error) => {
    return {
        type : FETCH_SEARCH_FAILURE,
        payload : error
    }
}


export const fetchSearchContacts = (modal, query) => {
    return async (dispatch)=>{
        dispatch(fetchSearchRequest())
        let params = {}
        if(modal === 'a'){
            params = {
                companyId: 171,
                query : query
            }
        }
        else if(modal === 'b'){
            params = {
                companyId: 171,
                query : query,
                countryId : 226
            }
        }
        else{
            params = {
                companyId: 171
            }
        }
        const res = await axios.get(  'https://api.dev.pastorsline.com/api/contacts.json', { 
            headers: {
                'Authorization': 'Bearer ' + process.env.REACT_APP_TOKEN
            },
            params: params
        });
    
        if(res.status === 200){
            let newContacts = Object.values(res?.data?.contacts) 
            dispatch(fetchSearchSuccess(newContacts))
        }
        else{
            console.log('error : ', res)
            dispatch(fetchSearchFailure(res))
        }
    }
}