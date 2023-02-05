import React, { Fragment } from 'react'
const Documentation = () => {
  return (
    <Fragment>
      <div className='container'>
        <h1 className='text-center my-4'>Help</h1>
        <div>
          <details>
            <summary>How to make first login?</summary>
            <p>Here is default login email and password and you can delete this account after creating new account</p>
            <ul>
              <li>Email: "user@support.com"</li>
              <li>Password: "%G346g9J"</li>
            </ul>
          </details>
          <details>
            <summary>Why you can't delete your account while loggedin?</summary>
            <p>You can't delete your account during login because if you delete your account you will still be loggedin and can access all elements. So for deleting account other admin have to login and delete it.</p>
            <ul>
              <li>Email: "user@support.com"</li>
              <li>Password: "%G346g9J"</li>
            </ul>
          </details>
        </div>
      </div>
    </Fragment>
  )
}

export default Documentation