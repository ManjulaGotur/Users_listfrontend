import { useState } from "react";
import {  useNavigate } from "react-router-dom";



const Login = () => {
    const  [email, setEmail] = useState("");
    const  [password, setPassword] = useState("");
    const  navigate = useNavigate();

    const handleSubmit = () => {
        if (email === "admin@gmail.com" && password === "abc@123") {
            navigate('/users-list');
        } else {
            alert('Invalid Credentials');
        }
    };
    
    return ( 
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className="border1 rounded-3  w-25 p-4 bg-white ">
             <h1 className="text-center ">Login Form</h1>
                <div className='mb-3'>
                    <label htmlFor="email" className="m-2" ><h4>UserName:</h4></label>
                    <input type="email" className="w-100 p-2 rounded" value={email} 
                    onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="" className="m-2"><h4>Password:</h4></label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-100 p-2 rounded" />
                </div>      
                <button onClick={handleSubmit} className="btn btn-primary mt-4 w-100">Submit</button>
               
            </div>
        </div>
    );
};
 
export default Login;
