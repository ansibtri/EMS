import React from 'react'
import Swal from 'sweetalert2';

// icons
import Edit from '../assets/pencil-square.svg';
import Delete from '../assets/person-x.svg';
import Info from '../assets/info-circle.svg';
const Manage = (props) => {
  const sessionAcc = JSON.parse(sessionStorage.account); // importing loggedin accounts from session.

  const capitalizeWord = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  const alertInfo = (data) => {
    Swal.fire({
      title: 'Can\t Perform!',
      icon: 'info',
      text: `The account ${data.email} is loggedin. So can't delete`
    })
  }
  const remove = (data) => { // remove function for removing data from localstorage
    // alerting confirmations to ask whether to delete account or not.
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      text: `The account linked with ${data.email} will be deleted. You won't be able to revert this!`,
      showCancelButton: true,
      confirmButtonColor: '#3085D6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      // if it's true then account will be deleted 
      if (result.isConfirmed) {
        props.removeaccount(data); // accessing props and sending data to parent component app.js to remove data
        Swal.fire(
          'Deleted!',
          'Employee account has been deleted.',
          'success'
        )
      }
    })
  }

  // function to edit employee data
  const edit = (data)=>{
    console.log(data)
  }

  return (
    <div className='container'>
      <h2 className='my-5'>Details</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
            <th scope="col">Contact</th>
            <th scope="col">Country</th>
            <th scope="col">Role</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {Array.from(props.accounts).map((account, key) => {
            if (sessionAcc.email === account.email) {

              return <tr key={key}>
                <th scope="row">{key + 1}</th>
                <td>{capitalizeWord(account.firstname)}</td>
                <td>{capitalizeWord(account.lastname)}</td>
                <td>{account.email}</td>
                <td>{account.contact}</td>
                <td>{capitalizeWord(account.country)}</td>
                <td>{capitalizeWord(account.role)}</td>
                <td className='d-flex'>
                  <button className='btn btn-warning mx-1' onClick={()=>{edit(account)}}><img src={Edit} alt='edit' /></button>
                  <button className='btn btn-info mx-1' onClick={() => { alertInfo(account) }}><img src={Info} alt="Info" /></button>
                </td>
              </tr>
            } else {
              return <tr key={key}>
                <th scope="row">{key + 1}</th>
                <td>{capitalizeWord(account.firstname)}</td>
                <td>{capitalizeWord(account.lastname)}</td>
                <td><a href={`mailto:${account.email}`}>{account.email}</a></td>
                <td>{account.contact}</td>
                <td>{capitalizeWord(account.country)}</td>
                <td>{capitalizeWord(account.role)}</td>
                <td className='d-flex'>
                <button className='btn btn-warning mx-1' onClick={()=>{edit(account)}}><img src={Edit} alt='edit' /></button>
                  <button className='btn btn-danger mx-1' onClick={() => { remove(account) }}><img src={Delete} alt="delete" /></button>
                </td>
              </tr>
            }
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Manage