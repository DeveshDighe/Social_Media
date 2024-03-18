import React, { useContext } from 'react'
import { myContext } from '../Store/Data'

const SideBar = () => {

  const { state, dispatch } = useContext(myContext)
  // console.log(state);

  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar w-full gap-y-3">
      <a href="/" className={`d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none w-full flex justify-center`}>
        {/* <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg> */}
        <span className="fs-4 ">Sidebar</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto cursor-pointer">
        <li className="nav-item w-full flex justify-center">
          <a onClick={() => dispatch({ type: 'SHOW', payload: true })} className={`${state.postClicked ? 'active' : ''} nav-link  text-white flex items-center justify-center w-full`} aria-current="page">
            {/* <svg className="bi pe-none me-2" width="16" height="36"><use xlinkHref="#home"></use></svg> */}
            Home
          </a>
        </li>
        <li className=' w-full'>
          <a onClick={() => dispatch({ type: 'CREATE', payload: false })} className={`${state.postClicked ? '' : 'active'} nav-link text-white flex items-center justify-center w-full`}>
            {/* <svg className="bi pe-none me-2" width="16" height="36"><use xlinkHref="#speedometer2"></use></svg> */}
            Create Post
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SideBar