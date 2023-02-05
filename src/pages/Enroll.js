import React, { useState } from 'react'
import Swal from 'sweetalert2'
const Enroll = (props) => {
  if (props.session !== true) {
    window.location.href = "http://localhost:3000/";
  }
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [country, setCountry] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');

  const handleFirstname = (e) => {
    setFirstname(e.target.value);
  }
  const handleLastname = (e) => {
    setLastname(e.target.value);
  }
  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  const handleContact = (e) => {
    setContact(e.target.value);
  }
  const handleCountry = (e) => {
    setCountry(e.target.value);
  }
  const handleRole = (e) => {
    setRole(e.target.value);
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }
  const handleCpassword = (e) => {
    setCpassword(e.target.value);
  }

  const submitData = (e) => {
    e.preventDefault();
    if(firstname === '' || firstname === null || firstname === undefined){
      Swal.fire({
        title: 'Error!',
        icon: 'error',
        text: 'Firstname Requires'
      })
    }
    if(lastname === '' || lastname === null || lastname === undefined){
      Swal.fire({
        title: 'Error!',
        icon: 'error',
        text: 'Lastname Requires'
      })
    }
    if(email === '' || email === null || email === undefined){
      Swal.fire({
        title: 'Error!',
        icon: 'error',
        text: 'Email Requires'
      })
    }
    if(contact === '' || contact === null || contact === undefined){
      Swal.fire({
        title: 'Error!',
        icon: 'error',
        text: 'Contact Requires'
      })
    }
    if(country === '' || country === null || country === undefined){
      Swal.fire({
        title: 'Error!',
        icon: 'error',
        text: 'Country Requires'
      })
    }
    if(role === '' || role === null || role === undefined){
      Swal.fire({
        title: 'Error!',
        icon: 'error',
        text: 'Role Requires'
      })
    }
 
    if (password === cpassword && password.length > 5) {
      let emailArr = [];
      Array.from(props.accounts).forEach((account)=>{
        emailArr.push(account.email);
      })
      if(emailArr.includes(email)){
        Swal.fire({
          title: 'Warning!',
          icon: 'warning',
          text: 'Email already exists!'
        })
      }else{
        let data = {
          firstname: firstname.toLowerCase().trim(),
          lastname: lastname.toLowerCase().trim(),
          email: email.trim(),
          contact: contact,
          country: country.toLowerCase().trim(),
          role: role.toLowerCase().trim(),
          password: password
        }
        props.setaccount(data)
        Swal.fire({
          title: 'Success!',
          icon: 'success',
          text: 'Employee account created successfully.'
        });
        setFirstname('');
        setLastname('');
        setEmail('');
        setContact('');
        setCountry('');
        setRole('');
        setPassword('');
        setCpassword('');
      }
    } else {
      Swal.fire({
        title: 'Error!',
        icon: 'error',
        text: 'Password requirements doesn\'t match'
      })
    }


  }
  return (
    <div className='container'>
      <h1 className='text-center my-5'>Enroll in EMS</h1>
      <form>
        <div className='row'>
          <div className="mb-3 col-md-6">
            <label htmlFor="firstname" className="form-label">Firstname</label>
            <input type="text" className="form-control" id="firstname" placeholder="Enter Your Firstname" defaultValue={firstname} onChange={handleFirstname} />
          </div>
          <div className="mb-3 col-md-6">
            <label htmlFor="lastname" className="form-label">Lastname</label>
            <input type="text" className="form-control" id="lastname" placeholder="Enter Your Lastname" defaultValue={lastname} onChange={handleLastname} />
          </div>
          <div className="mb-3 col-md-6">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="Enter Your Email" defaultValue={email} onChange={handleEmail} />
          </div>
          <div className="mb-3 col-md-6">
            <label htmlFor="contact" className="form-label">Contact</label>
            <input type="number" className="form-control" id="contact" placeholder="Enter Your Contact Number" defaultValue={contact} onChange={handleContact} />
          </div>
          <div className="mb-3 col-md-6">
            <label htmlFor="country" className="form-label">Country</label>
            <input type="text" className="form-control" id="country" placeholder="Enter Your Country" defaultValue={country} onChange={handleCountry} />
          </div>
          <div className="mb-3 col-md-6">
            <label htmlFor="role" className="form-label">Role</label>
            <input type="text" className="form-control" id="role" placeholder="Enter Your Province" defaultValue={role} onChange={handleRole} />
          </div>
          <div className="mb-3 col-md-6">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Enter Your Password" defaultValue={password} onChange={handlePassword} />
          </div>
          <div className="mb-3 col-md-6">
            <label htmlFor="cpassword" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" id="cpassword" placeholder="Confirm Your Password" defaultValue={cpassword} onChange={handleCpassword} />
          </div>
          <div className='mb-3 col-md-6'>
            <button className='btn btn-primary' onClick={submitData}>Submit Data</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Enroll