import { CLOSE_MODAL_C, IS_EVEN, OPEN_MODAL_C } from "./modalTypes"

const initialState = {
    modalOpenA : false,
    modalOpenB : false,
    isEven : false,
    modalCContacts : null,
    modalOpenC : false,
    serchedContacts : null
}

const modalReducer = (state=initialState, action) =>{
    switch(action.type) {
        
        case IS_EVEN : 
            return {
                ...state,
                isEven : !state.isEven
            }
        
        case OPEN_MODAL_C : 
            return {
                ...state,
                modalCContacts : action.payload,
                modalOpenC : true
            }
        case CLOSE_MODAL_C : 
            return {
                ...state,
                modalCContacts : null,
                modalOpenC : false
            }

        default : return state
    }
}

export default modalReducer