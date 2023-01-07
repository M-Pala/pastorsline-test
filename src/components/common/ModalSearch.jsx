import React from 'react'

const ModalSearch = ({modal, searchVal, setSearchVal}) => {


    const handleSearch = (e) =>{
        setSearchVal(e.target.value)
    }

  return (
    <div className='my-2 w-100'>
        <input className='w-100' placeholder='search' type="text" value={searchVal} onChange={(e)=>handleSearch(e)}/>
    </div>
  )
}

export default ModalSearch