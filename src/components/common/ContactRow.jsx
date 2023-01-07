import React from 'react'
import { useDispatch } from 'react-redux'
import { handleSingleContactDetail } from '../../redux'

const ContactRow = ({contact}) => {
    const dispatch = useDispatch()
  return (
    <div className='row border border-aqua' role='button' key={contact.id} onClick={()=>dispatch(handleSingleContactDetail(contact))}>
        <h4 className='col text-secondary'>{contact.id}</h4>
        <h4 className='col'>{contact.first_name}</h4>
        <h4 className='col'>{contact.last_name}</h4>
        <h4 className='col'>{contact.country_id}</h4>
    </div>
  )
}

export default ContactRow