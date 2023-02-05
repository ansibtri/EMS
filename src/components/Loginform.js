import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';
const Loginform = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const login = (e) => {
        e.preventDefault();
        // looping through the localStorage accounts to check whether the login data match or not.
        Array.from(props.accounts).forEach((account) => { // looping through the each element(account) of array
            if (email === account.email && password === account.password) { // checking email and password
                sessionStorage.session = true; // updating session value to true
                props.setsession(JSON.stringify(sessionStorage.session)); // updating session storage
                if(window.location.href === "http://localhost:3000/"){
                    window.location.href = "http://localhost:3000/"; // routing to page
                }else{
                    window.location.href="http://192.168.1.245:3000"
                }
                sessionStorage.account = JSON.stringify(account); // setting loggedin account to sessionStorage for authentication
            } else {
                // if login credentials doesn't match then show error.
                Swal.fire({ 
                    title: 'Error!',
                    icon: 'error',
                    text: 'Login credentials doesn\'t match'
                });
            }
        });
    }
    return (
        <div className='container d-flex flex-column justify-content-center my-5'>
            <h1 className='text-center my-3'>Login to EMS</h1>
            <form className='my-4' style={{ 'display': 'block', 'margin': 'auto' }}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter Your Email" defaultValue={email} onChange={handleEmail} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter Your Password" defaultValue={password} onChange={handlePassword} />
                </div>
                <button className='btn btn-primary' onClick={login}>Login</button>
                <div className='d-flex justify-content-end'>
                <Link to="/resetpassword">Forgot Password?</Link>
                </div>
                <div className='d-flex justify-content-between my-2'>
                    <Link to="/documentation">Documentation</Link>
                    <Link to="/help">Help</Link>
                </div>
            </form>
        </div>
    )
}

export default Loginform