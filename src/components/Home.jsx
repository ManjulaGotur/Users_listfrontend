import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios.get('http://localhost:3000/users')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  };

  const handleSearch = () => {
    axios.get('http://localhost:3000/users', {
      params: {
        name: name,
        email: email,
        phone: phone
      }
    })
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Would you like to delete?");
    if (confirmDelete) {
      axios.delete(`http://localhost:3000/users/${id}`)
        .then(res => {
          setData(data.filter(user => user.id !== id));
          alert("User deleted successfully!");
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-dark vh-100'>
      <h1>Users-Lists</h1>

      <div className='bg-white rounded w-60 border shadow p-3 '>
        <h1>Users-Lists</h1>
        <div className='d-flex justify-content-end'>
          <Link to="/create" className='btn btn-success'>Add +</Link>
        </div>
        <div className="d-flex justify-content-center align-items-center mt-4 ms-2 ">
          <input type="text" placeholder='Search by Name' className='ms-2' value={name} onChange={e => setName(e.target.value)} />
          <input type="text" placeholder='Search by Email' className='ms-5' value={email} onChange={e => setEmail(e.target.value)} />
          <input type="text" placeholder='Search by Phone' className='ms-5' value={phone} onChange={e => setPhone(e.target.value)} />
          <button type="button" className='btn btn-success ms-4' onClick={handleSearch}>Search</button>
        </div>

        <table className='table table-stripped mt-4'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Images</th>
              <th>Name</th>
              <th>Email</th>
              <th>Designation</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={i}>
                <td>{d.id}</td>
                <td><img src={d.image} alt="" width="55px" height="55px" /></td>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>{d.designation}</td>
                <td>{d.phone}</td>
                <td>
                  <Link to={`/read/${d.id}`} className='btn btn-info'>Read</Link>
                  <Link to={`/update/${d.id}`} className='btn btn-success me-2 ms-2'>Edit</Link>
                  <button className='btn btn-danger' onClick={() => handleDelete(d.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
