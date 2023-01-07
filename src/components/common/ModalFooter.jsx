import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { handleEvenRecords } from '../../redux'

const ModalFooter = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const isEven = useSelector(state => state.modal.isEven)

    return (
        <div className='d-flex justify-content-between w-100'>
            <div>
                    <input type="checkbox" name="onlyEven" id="onlyEven" checked={isEven} onChange={()=>dispatch(handleEvenRecords())}/>
                    <label className='ml-1' htmlFor="onlyEven" >Only Even</label>
            </div>

            <div className='d-flex justify-content-between' style={{width:'65%'}}>
                    <button className='btn btn-primary text-nowrap' onClick={()=>navigate('/modalA')}>All Contacts</button>
                    <button className='btn btn-secondary text-nowrap' onClick={()=>navigate('/modalB')}>US Contacts</button>
                    <button className='btn border-primary' onClick={()=>navigate('/')}>Close</button>
            </div>
        </div>
    )
}

export default ModalFooter