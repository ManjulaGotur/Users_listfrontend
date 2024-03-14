import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'



const Read = () => {
    const [data,setData] =useState([])
    const {id} = useParams();

    
  useEffect(()=>{
    axios.get('http://localhost:3000/users'+id)
    .then(res => setData(res.data))
    .catch(err => console.log(err))

  },[id])
  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
        <div className='w-50 border bg-white shadow px-5 pt-3  pb-5 rounded'>
            <h3>Details of User</h3>
            <div className='mb-2'>
                <strong>Name: {data.name}</strong>
            </div>

            <div className='mb-2'>
                <strong>Email: {data.email}</strong>
            </div>

            <div className='mb-2'>
                <strong>Phone: {data.phone}</strong>
            </div>

            <div className='mb-2'>
                <strong>Designation: {data.designation}</strong>
            </div>

           <Link to={`/update/${id}`} className='btn btn-warning '>Edit</Link>
           <Link to='/' className='btn btn-warning '>Back</Link>
        </div>
      
    </div>
  )
}

export default Read
