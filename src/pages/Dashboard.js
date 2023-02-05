import React from 'react'

const Dashboard = ({ accounts }) => {
  return (
    <>
      <div className='container my-5'>
        <div className='row'>
          <div className="card mb-3 col-md-6" style={{'width':'18rem'}}>
            <div className="card-body">
              <h5 className="card-title">Total Employee</h5>
              <p className="card-text">{accounts.length}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard