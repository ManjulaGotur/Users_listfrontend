import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Create = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    designation: ''
  });

  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/users', values)
      .then(result => {
        console.log(result);
        navigate('/users-list');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100 '>
      <div className='bg-white border shadow p-3  px-5 pt-3 pb-5 rounded-3 w-50'>
        <h2>Add-Users</h2>
        <form onSubmit={handleSubmit}>
        {/* <div className='mb-2 '>
          <label htmlFor='number'><strong>Id:</strong></label>
          <input type="number" name='id' placeholder='Enter id ' value={values.id}
            className='form-control rounded-0'   onChange={e => setValues({ ...values, id: e.target.value })} />
        </div> */}
          <div className='mb-2 d-flex'>
            <label htmlFor='name'className="m-2 w-25"><strong>Name :</strong></label>
            <input type="name" name='name' placeholder='Enter your name'
              className='form-control p-2 rounded' value={values.name}
              onChange={e => setValues({ ...values, name: e.target.value })} />
          </div>
          
          {/* <div className="fileupload mt-4">
                    <input className="form-control" type="file" id="formFile"
                     placeholder="Place image link here" value={values.image} 
                     onChange={(e) => setValues(e.target.value)} />
                </div> */}


          <div className='mb-2 d-flex'>
            <label htmlFor='email' className="m-2 w-25"><strong>Email :</strong></label>
            <input type="email" name='email' placeholder='Enter your email'  value={values.email}
              className='form-control p-2 rounded'
              onChange={e => setValues({ ...values, email: e.target.value })} />
          </div>
          <div className='mb-2 d-flex'>
            <label htmlFor='designation' className="m-2 w-25"><strong>Designation :</strong></label>
            <input type="designation" placeholder='Enter your designation' name='designation'
              className='form-control p-2 rounded' value={values.designation}
              onChange={e => setValues({ ...values, designation: e.target.value })} />
          </div>
          <div className='mb-2 d-flex'>
            <label htmlFor='number' className="m-2 w-25"><strong>phone :</strong></label>
            <input type="phone"   name='phone' placeholder='Enter your number' 
              className='form-control p-2 rounded' value={values.phone}
              onChange={e => setValues({ ...values, phone: e.target.value })} />
          </div>
          <button className='btn btn-success'>Create</button>
          <Link to="/users-list" className='btn btn-secondary ms-3'>Back</Link>
        </form>
      </div>
    </div>
  )
}

export default Create;
