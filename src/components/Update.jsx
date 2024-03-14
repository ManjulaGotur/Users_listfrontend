import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'



const Update = () => {
    // const [data,setData] =useState([])
    const {id} = useParams();
    const [values, setValues] = useState({
        name: '',
        email: '',
        phone: '',
        designation: ''
      });
    
      let navigate =useNavigate();
  useEffect(()=>{
    axios.get('http://localhost:3000/users'+id)
    .then(res => {
setValues(res.data)
    })
    .catch(err => console.log(err))

  },[id])
 

  const handleUpdate =(e)=>
    {
        e.preventDefault();
        axios.post('http://localhost:3000/users'+id, values)
          .then(result => {
            console.log(result);
            navigate('/');
          })
          .catch(err => console.log(err));
      };
  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100 '>
    <div className='bg-white border shadow p-3  px-5 pt-3 pb-5 rounded w-50'>
      <h2>Update-Users</h2>
      <form onSubmit={handleUpdate} >
        <div className='mb-2 '>
          <label htmlFor='name'><strong>Name:</strong></label>
          <input type="name" name='name' placeholder='Enter your name' value={values.name}
            className='form-control rounded-0'   onChange={e => setValues({ ...values, name: e.target.value })} />
        </div>
        <div className='mb-2'>
          <label htmlFor='email'><strong>Email:</strong></label>
          <input type="email" name='email' placeholder='Enter your email'   value={values.email}
            className='form-control rounded-0'  onChange={e => setValues({ ...values, email: e.target.value })} />
        </div>
        <div className='mb-2'>
          <label htmlFor='designation'><strong>Designation:</strong></label>
          <input type="designation" placeholder='Enter your designation' name='designation' value={values.designation}
            className='form-control rounded-0'   onChange={e => setValues({ ...values, designation: e.target.value })}
             />
        </div>
        <div className='mb-2'>
          <label htmlFor='number'><strong>phone:</strong></label>
          <input type="phone" name='phone' placeholder='Enter your number' value={values.phone}
            className='form-control rounded-0'   onChange={e => setValues({ ...values, phone: e.target.value })}
            />
        </div>
        <button className='btn btn-success'>Update</button>
        <Link to="/" className='btn btn-secondary ms-3'>Back</Link>
      </form>
    </div>
  </div>
  )
}

export default Update
