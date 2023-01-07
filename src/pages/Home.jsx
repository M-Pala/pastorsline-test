import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate()

    return (
        <div className='d-flex justify-content-center align-items-center w-100 vh-100'>
        <div className='row relative'>
            
            <div className='col'>
                <button className='btn btn-primary text-nowrap' onClick={()=>navigate('/modalA')}>Button A</button>
            </div>
            <div className='col'>
                <button className='btn btn-secondary text-nowrap' onClick={()=>navigate('/modalB')}>Button B</button>
            </div>
        </div>
        </div>
    )
}

export default Home