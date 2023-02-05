import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = (props) => {
    const logout = (e)=>{
        e.preventDefault();
        sessionStorage.session = false;
        sessionStorage.account = null;
        window.location.href="http://localhost:3000/";
    }
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">EMS</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        {props.session ? <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Details
                            </Link>
                             <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/enroll">Enroll</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/manage">Manage</Link></li>
                            </ul></li>:null}
                        
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/documentation">Documentation</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/help">Help</Link>
                        </li>
                    </ul>
                    {props.session ? <div className="d-flex">
                        <Link to="/profile">{JSON.parse(sessionStorage.account).email}</Link>
                        <button className='btn btn-danger mx-2' onClick={logout}>Logout</button>
                    </div>:<Link to="/" className='btn btn-primary mx-2 text-white text-decoration-none'>Login</Link>}
                </div>
            </div>
        </nav>
    )
}

export default Navbar