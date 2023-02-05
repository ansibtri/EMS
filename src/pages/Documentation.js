import React, { Fragment } from 'react'

const Documentation = () => {
  return (
    <Fragment>
      <div className='container'>
        <h1 className='text-center my-5'>Employee Management System</h1>
        <div>
          <p>Employee Management System is a system based on <a href="https://reactjs.org/">React JS</a> library and <a href="https://getbootstrap.com/">Bootstrap</a> toolkit. Shortly, we can define Employee Management System as EMS.<br/>EMS holds a power to create, retrieve, update and delete data of employee. EMS possess following features till now:-</p>
          <ol>
            <li className='font-weight-bold'>Login</li>
            <ul>
              <li>Email is use to login</li>
              <li>Email field is validated</li>
              <li>8 Characters password is mandatory</li>
            </ul>
            <li>Dashboard</li>
            <ul>
              <li>Various Dashboard components</li>
              <li>Static data is use for dashboard components</li>
              <li>Dashboard contains one car chart, one card, one graph chart</li>
            </ul>
            <li>User List</li>
            <ul>
              <li>A grid with existing users, each row should contain edit/delte icons</li>
              <li>Enroll button is used to add a new user</li>
            </ul>
            <li>Routing and Navigation</li>
            <ul>
              <li>Routing is implemented into various screens</li>
            </ul>
            <li>Authentication</li>
            <ul>
              <li>Dashboard, Employee Management Section and Profile section is accessible only after authenticating users</li>
              <li>User who aren't enrolled can't access site.</li>
            </ul>
            <li>Library</li>
            <ul>
              <li>React JS is used as Javascript Library along with bootstrap</li>
            </ul>
            <li>Addons</li>
            <ul>
              <li>Sweetalert2 is used to make toaster during enrollment, updating, deleting and to log errors</li>
            </ul>
            <li>Database</li>
            <ul>
              <li>localStorage is used to store data giving key name 'accounts'</li>
              <li>sessionStorage is used to create session and to store logged in account until session expires(logged out or browser close)</li>
            </ul>
          </ol>
        </div>
      </div>
    </Fragment>
  )
}

export default Documentation