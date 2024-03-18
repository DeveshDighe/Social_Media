import React, { useContext, useEffect, useState } from 'react'
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import SideBar from './SideBar.jsx';
import CreatePost from './CreatePost.jsx';
import AllPost from './AllPost.jsx';
import { myContext } from '../Store/Data';


const Container = () => {
    const { state, dispatch } = useContext(myContext)
    const [searched, setsearched] = useState('')

    // useEffect(() => {
    //   JSON.parse(localStorage.getItem('currentUser'))
    // }, [])

    return (
        <div className='main'>
            <Header setsearched={setsearched} />
            <div className=' d-flex justify-content-between'>
                <div className='sidebarContainer'>
                    <SideBar />
                </div>
                <div className='w-100 py-2 px-2 mb-6'>
                    {state.postClicked == true ? <AllPost searched={searched} /> : <CreatePost />}
                    {/* <AllPost/> */}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Container