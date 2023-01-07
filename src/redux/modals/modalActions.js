import { CLOSE_MODAL_C, IS_EVEN, OPEN_MODAL_C } from "./modalTypes";


export const handleEvenRecords = () => {
    return {
        type : IS_EVEN
    }
}

export const handleSingleContactDetail = (contact) => {
    return {
        type : OPEN_MODAL_C,
        payload : contact
    }
}
export const closeModalC = () => {
    return {
        type : CLOSE_MODAL_C,
    }
}