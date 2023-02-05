import React from 'react'

const Profile = (props) => {
  if (props.session !== true) {
    window.location.href = "http://localhost:3000"
  }
  const sessionAcc = JSON.parse(sessionStorage.account);

  return (
    <div className='container'>
      <h1 className='text-center my-5'>Account info</h1>
      <div className='row'>
        <div className='col-md-3 my-3'></div>
        <div className='col-md-3'>
          <div className="input-group mb-5">
            <span className="input-group-text" id="basic-addon1">Firstname</span>
            <input className="form-control" type="text" value={sessionAcc.firstname} aria-label="Disabled input example" disabled readOnly></input>
          </div>
        </div>
        <div className='col-md-3'>
          <div className="input-group mb-5">
            <span className="input-group-text" id="basic-addon1">Lastname</span>
            <input className="form-control" type="text" value={sessionAcc.lastname} aria-label="Disabled input example" disabled readOnly></input>
          </div>
        </div>
        <div className='col-md-3 my-3'></div>
        <div className='col-md-3'></div>
        <div className='col-md-3'>
          <div className="input-group mb-5">
            <span className="input-group-text" id="basic-addon1">Email</span>
            <input className="form-control" type="text" value={sessionAcc.email} aria-label="Disabled input example" disabled readOnly></input>
          </div>
        </div>
        <div className='col-md-3'>
          <div className="input-group mb-5">
            <span className="input-group-text" id="basic-addon1">Contact</span>
            <input className="form-control" type="text" value={sessionAcc.contact} aria-label="Disabled input example" disabled readOnly></input>
          </div>
        </div>
        <div className='col-md-3'></div>
        <div className='col-md-3'></div>
        <div className='col-md-3'>
          <div className="input-group mb-5">
            <span className="input-group-text" id="basic-addon1">Country</span>
            <input className="form-control" type="text" value={sessionAcc.country} aria-label="Disabled input example" disabled readOnly></input>
          </div>
        </div>
        <div className='col-md-3'>
          <div className="input-group mb-5">
            <span className="input-group-text" id="basic-addon1">Role</span>
            <input className="form-control" type="text" value={sessionAcc.role} aria-label="Disabled input example" disabled readOnly></input>
          </div>
        </div>
        <div className='col-md-3'></div>
        <div className='col-md-3'></div>
        <div className='col-md-3'>
          <div className="input-group mb-5">
            <span className="input-group-text" id="basic-addon1">Password</span>
            <input className="form-control" type="text" value={sessionAcc.password} aria-label="Disabled input example" disabled readOnly></input>
          </div>
        </div>
        <div className='col-md-3'></div>
        


      </div>
    </div>
  )
}

export default Profile