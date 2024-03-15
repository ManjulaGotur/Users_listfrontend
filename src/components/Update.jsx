import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const Update = () => {
    const { id } = useParams();
    const [values, setValues] = useState({
        id: '',
        name: '',
        email: '',
        phone: '',
        designation: ''
    });

    let navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3000/users/' + id)
            .then(res => {
                setValues({
                    id: res.data.id,
                    name: res.data.name,
                    email: res.data.email,
                    designation: res.data.designation,
                    phone: res.data.phone
                });
            })
            .catch(err => console.log(err));

    }, [id]); 

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put('http://localhost:3000/users/' + id, values) // Using axios.put for update
            .then(result => {
                console.log(result);
                navigate('/users-list');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100 '>
            <div className='bg-white border shadow p-3  px-5 pt-3 pb-5 rounded w-50'>
                <h2>Update-Users</h2>
                <form onSubmit={handleUpdate} >
                    <div className='mb-2 d-flex'>
                        <label htmlFor='id' className="m-2 w-25"><strong>Id:</strong></label>
                        <input type="text" name='id' placeholder='Enter id ' value={values.id}
                            className='form-control rounded-0' onChange={e => setValues({ ...values, id: e.target.value })} />
                    </div>
                    <div className='mb-2 d-flex'>
                        <label htmlFor='name' className="m-2 w-25"><strong>Name:</strong></label>
                        <input type="text" name='name' placeholder='Enter your name' value={values.name}
                            className='form-control rounded-0' onChange={e => setValues({ ...values, name: e.target.value })} />
                    </div>
                    <div className='mb-2 d-flex'>
                        <label htmlFor='email' className="m-2 w-25"><strong>Email:</strong></label>
                        <input type="email" name='email' placeholder='Enter your email' value={values.email}
                            className='form-control rounded-0' onChange={e => setValues({ ...values, email: e.target.value })} />
                    </div>
                    <div className='mb-2 d-flex'>
                        <label htmlFor='designation' className="m-2 w-25"><strong>Designation:</strong></label>
                        <input type="text" placeholder='Enter your designation' name='designation' value={values.designation}
                            className='form-control rounded-0' onChange={e => setValues({ ...values, designation: e.target.value })} />
                    </div>
                    <div className='mb-2 d-flex'>
                        <label htmlFor='phone' className="m-2 w-25"><strong>Phone:</strong></label>
                        <input type="text" name='phone' placeholder='Enter your phone' value={values.phone}
                            className='form-control rounded-0' onChange={e => setValues({ ...values, phone: e.target.value })} />
                    </div>
                    <button className='btn btn-success'>Update</button>
                    <Link to="/users-list" className='btn btn-secondary ms-3'>Back</Link>
                </form>
            </div>
        </div>
    )
}

export default Update;
