import React from 'react'
import Modal from 'react-bootstrap/esm/Modal'
import { useDispatch } from 'react-redux'
import { closeModalC } from '../../redux'

const ModalC = ({contact}) => {

    const  dispatch = useDispatch()
  return (
    <Modal show={true}>
        <Modal.Header>
          Modal C
        </Modal.Header>
        <Modal.Body>
            <div>
                <div><h4> ID : {contact.id}</h4></div>
                <div>
                    <h5>Name : {contact.first_name} {contact.last_name}</h5>
                    <h5>e-mail : {contact.email}</h5>
                    <h5>Phone Number : {contact.phone_number}</h5>
                </div>
            </div>
            

        </Modal.Body>
        <Modal.Footer>
            <div className='d-flex justify-content-end w-100'>                
                <button className='btn border-primary' onClick={()=>dispatch(closeModalC())}>Close</button>
            </div>
        </Modal.Footer>
      </Modal>
  )
}

export default ModalC