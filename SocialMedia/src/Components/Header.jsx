import React, { useState } from 'react'
import { useContext } from 'react';
import { myContext } from '../Store/Data.jsx';
import { useNavigate } from 'react-router-dom';


const Header = ({ setsearched }) => {
  const { state, dispatch } = useContext(myContext)
  const [InnerSearch, setInnerSearch] = useState('')
  const router = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    setsearched(InnerSearch)
  }
  return (
    <>
      <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
              <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap"></use></svg>
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><a href="#" className="nav-link px-2 text-secondary">Home</a></li>
              <li><a href="#footer" className="nav-link px-2 text-white">About me</a></li>
              {/* <li><a href="#" className="nav-link px-2 text-white">Pricing</a></li>
              <li><a href="#" className="nav-link px-2 text-white">About</a></li> */}
              <li><a href="#" className="nav-link px-2 text-white"
                title={state.user && state.user.name ? state.user.name : 'Please Login'}>
                {state.user && state.user.name ? state.user.name : 'USER'}
              </a>

              </li>
            </ul>


            <form className=" flex justify-between sm:mb-4 gap-x-4 mr-10" role="search" onSubmit={handleSubmit} >
              <input type="search" className="form-control form-control-dark text-bg-dark" onChange={(e) => setInnerSearch(e.target.value)} value={InnerSearch} placeholder="Search..." aria-label="Search" />
              <input className=' bg-white py-1 rounded-sm px-3 text-black' type="submit" />
            </form>

            <div className="text-end">
              {state.user && state.user.name ? <button type="button" className="btn btn-outline-light me-2" onClick={() => dispatch({ type: "LOGOUT" })}>Logout</button>
                :

                <span><button type="button" className="btn btn-outline-light me-2" onClick={() => router('/LoginForm')} >Login</button>
                  <button type="button" className="btn btn-outline-light me-2" onClick={() => router('/register')}>Sign-up</button></span>
              }

            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header