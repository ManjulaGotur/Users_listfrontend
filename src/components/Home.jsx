import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'


const Home = () => {
  const [data,setData] =useState([])
  // const users = [
  //   { id: 1, name: 'kumaran', email: 'kumaran@gmail.com',  designation: "sales", phonenumber: '9865552588'},
  //   { id: 2, name: 'Manjula', email: 'mrg@gmail.com', designation: "hr",phonenumber:"6789345520" },
  // ];


  useEffect(()=>{
    axios.get('http://localhost:3000/users')
    .then(res => setData(res.data))
    // console.log("check22===",result)
    .catch(err => console.log(err))

  },[])


  const handleDelete =(id) =>{
    const confirm = window.confirm("would you like to delete?")
    if (confirm){
      axios.delete('http://localhost:3000/users'+id)
      .then(res =>{
         window.location.reload()
      }).catch(err => console.log(err))
    }
  }


  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-dark vh-100'>
       <h1>Users-Lists</h1>
      <div className='bg-white rounded w-60 border shadow p-3'>
   
       <div className='d-flex justify-content-end'>
       <Link to="/create" className='btn btn-success'>Add +</Link> 
       </div>
        <table className='table table-stipend'>
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
            {data.map((d,i) => (
              <tr key={i}>
                 <td>{d.id}</td>
                 <td><img src={d.image} alt="" width="55px" height="55px"/></td>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>{d.designation}</td>
                <td>{d.phone}</td>
                <td>
                
                  <div className="button d-flex">
                  <Link to={`/read/${d.id}`} type="button"   className='btn btn-info'>Read</Link> 
               <Link to={`/update/${d.id}`}  type="button"  className='btn btn-success me-2 ms-2'>Edit</Link>
                     <button  type="button"   className='btn btn-danger  '  onClick={(e)=> handleDelete(d.id)}>Delete</button>

                  </div>
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
