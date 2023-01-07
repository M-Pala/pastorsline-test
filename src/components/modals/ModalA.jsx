import React, { useEffect, useState } from 'react'
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearchContacts } from '../../redux';
import ModalFooter from '../common/ModalFooter';
import axios from 'axios'
import { Scrollbars } from 'react-custom-scrollbars'
import ModalC from './ModalC';
import ModalSearch from '../common/ModalSearch';
import ContactRow from '../common/ContactRow';

const ModalA = () => {
  const dispatch = useDispatch()
  const isEven = useSelector(state => state.modal.isEven)
  const [initLoading, setInitLoading] = useState(true)
  const [loading, setLoading] = useState(false)
  const [contacts, setContacts] = useState([])
  const [page, setPage] = useState(1)

  const [searchVal, setSearchVal] = useState("")

  const modalCContacts = useSelector(state => state.modal.modalCContacts)

  const searchDataLoading = useSelector(state => state.search.loading)
  const searchDataSearchContacts = useSelector(state => state.search.searchContacts)

  const onScroll = (e) => {
    const contactsView = e.target
    if(!searchVal){
      if (contactsView.scrollTop + contactsView.clientHeight >= contactsView.scrollHeight) {
        setPage(page + 1)
      }
    }
  }

  useEffect(()=>{
    fetchContacts(page)
    // eslint-disable-next-line
  },[page])

  const fetchContacts = async (page) => {
    if(initLoading){
      setInitLoading(true)
    }
    else{
      setLoading(true)
    }
    const res = await axios.get(  'https://api.dev.pastorsline.com/api/contacts.json', { 
      headers: {
        'Authorization': 'Bearer ' + process.env.REACT_APP_TOKEN
      },
      params: { 
        companyId: 171,
        page: page
      } 
    });

    if(res.status === 200){
      let newContacts = Object.values(res?.data?.contacts) 
      setContacts([...contacts, ...newContacts])
      setInitLoading(false)
      setLoading(false)
    }
    else{
      console.log('error : ', res)
    }
  }

  useEffect(()=>{
    if(searchVal){
      dispatch(fetchSearchContacts('a',searchVal))
    }
    // eslint-disable-next-line
  },[searchVal])

  return (
    <>
      {
        !modalCContacts ? 
      
      <Modal show={true}>
        <Modal.Header>
          Modal A
        </Modal.Header>
        <Modal.Body>
          <ModalSearch modal={'a'} searchVal = {searchVal} setSearchVal={setSearchVal}/>
          {
            initLoading ? 
            <h4>Loading All Country Contacts...</h4>
            :
            <Scrollbars onScroll={onScroll} style={{ height: '70vh' }}>
            <div className='row border border-aqua'>
              <h5 className='col font-weight-bold bold text-secondary'>ID</h5>
              <h5 className='col font-weight-bold'>f_name</h5>
              <h5 className='col font-weight-bold'>l_name</h5>
              <h5 className='col font-weight-bold'>Country_ID</h5>
            </div>
              {searchVal  ?
                searchDataLoading ? (
                  <p>Loading...</p> )
                  :
                  searchDataSearchContacts.length === 0 ? <h4>No records found</h4> :
                searchDataSearchContacts?.map((contact, i)=> {
                  let tempContact = contact
                  if(isEven){
                    if(Number(tempContact?.id) % 2 === 0){
                      return (
                        <ContactRow contact={tempContact} key={tempContact.id}/>
                      )    
                    }
                  }
                  else{
                    return (
                      <ContactRow contact={contact} key={contact.id}/>
                    )
                  }
              })
              
              :

              contacts.map((contact, i)=> {
                let tempContact = contact
                if(isEven){
                  if(Number(tempContact?.id) % 2 === 0){
                    return (
                      <ContactRow contact={tempContact} key={tempContact.id}/>
                    )    
                  }
                }
                else{
                  return (
                    <ContactRow contact={contact} key={contact.id}/>
                  )
                }
              })
              }
            </Scrollbars>
          }
          {loading && <h5>Loading more contacts...</h5>}
        </Modal.Body>
        <Modal.Footer>
          <ModalFooter/>
        </Modal.Footer>
      </Modal>
      
       : <ModalC contact={modalCContacts}/>
      }
      

    </>
  )
}

export default ModalA